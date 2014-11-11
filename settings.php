<?php

header('Content-Type: text/html; charset=utf-8');

class Person {
	public $fname, $lname, $age;
	
	public function __construct($fname,$lname,$age=null){
		$this->fname = $fname;
		$this->lname = $lname;
		$this->age = $age;
	}
}
class NoticeBoard {
	public $nbid, $nbSubject, $nbDetails ,$nbValidity,$nbOwner;
	
	public function __construct($nbid,$nbSubject,$nbDetails,$nbValidity,$nbOwner=null){
		$this->nbid = $nbid;
		$this->nbSubject = $nbSubject;
		$this->nbDetails = $nbDetails;
		$this->nbValidity = $nbValidity;
		$this->nbOwner = $nbOwner;
	}
}

class Authenticated {
	public $username, $auth;
		
	public function __construct($username,$auth=null){
		$this->username = $username;
		$this->auth = $auth;
	}
}

class JSON 
{
    public static function Encode($obj)
    {
        return json_encode($obj);
    }
    
    public static function Decode($json, $toAssoc = false)
    {
        $result = json_decode($json, $toAssoc);
        switch(json_last_error())
        {
            case JSON_ERROR_DEPTH:
                $error =  ' - Maximum stack depth exceeded';
                break;
		    case JSON_ERROR_STATE_MISMATCH:
		        $error = ' - Underflow or the modes mismatch';
		    break;
            case JSON_ERROR_CTRL_CHAR:
                $error = ' - Unexpected control character found';
                break;
            case JSON_ERROR_SYNTAX:
                $error = ' - Syntax error, malformed JSON';
                break;
		    case JSON_ERROR_UTF8:
		        $error = ' - Malformed UTF-8 characters, possibly incorrectly encoded';
		    break;
            case JSON_ERROR_NONE:
            default:
                $error = '';                    
        }
                
        if( !empty($error) ){
            throw new Exception('JSON Error: '.$error);	        
        }
        
        return $result;
    }
}

////////////////////// OPEN connection //////////////////////////
function open_db_connection(){

	// Connection
	$conn = mysqli_connect('localhost','padma','welcome123','hiveintown');
	if (mysqli_connect_errno()) {
		throw new RuntimeException("Connect failed: %s\n", mysqli_connect_error());
	}		
	$conn->autocommit(TRUE);
	
	return $conn;	
}

////////////////////// CLOSE connection //////////////////////////
function close_db_connection($conn){
	
	mysqli_close($conn);
}

////////////////////// GET noticeboard information from Database //////////////////////////
function get_noticeboard_from_db($conn, $username){
	
	// Consultation
	/*$query = "SELECT person.firstName,person.lastName,person.age FROM person,user WHERE person.id = user.id_person_fk AND user.username = ?";*/
//$query = "SELECT  fname, lname, AptNum FROM AptUser WHERE email = ?";
$query = "SELECT  nbid, nbSubject, nbDetail FROM NoticeBoard LIMIT 3,1";

	$stmt = mysqli_prepare($conn, $query);
	if ( false===$stmt ) {
		// and since all the following operations need a valid/ready statement object
		// it doesn't make sense to go on
		// you might want to use a more sophisticated mechanism than die()
		// but's it's only an example
		die('prepare() failed: ' . htmlspecialchars($mysqli->error));
	}
	
	// Bind input parameters
	$rc = mysqli_stmt_bind_param($stmt, "i", $username);
	if ( false===$rc ) {
		// again execute() is useless if you can't bind the parameters. Bail out somehow.
		die('bind_param() failed: ' . htmlspecialchars($stmt->error));
	}	

	// Execute statement and store results
	$rc = mysqli_stmt_execute($stmt);	
	// execute() can fail for various reasons. And may it be as stupid as someone tripping over the network cable
	// 2006 "server gone away" is always an option
	if ( false===$rc ) {
		die('execute() failed: ' . htmlspecialchars($stmt->error));
	}
	mysqli_stmt_store_result($stmt);

	// ORM - Object Relational Mapping - Bind result to output parameters
	mysqli_stmt_bind_result($stmt, $nbid, $nbSubject,$nbDetail);
	$noticeboard = array();
	while (mysqli_stmt_fetch($stmt)) {
		$noticeboard[] = new Person($nbid, $nbSubject,$nbDetail);
	}	
		
	mysqli_stmt_close($stmt);		
	
	return $noticeboard;
}

////////////////////// MAIN //////////////////////////
if($_GET){
	$username = $_GET['username'];
}
else{
	$username = $argv[1];
}

$conn = open_db_connection();	
$noticeboard = get_noticeboard_from_db($conn, $username);
$auth=true;
close_db_connection($conn);
$result = array();
$result[] = $noticeboard;
$result[] = new Authenticated($username, $auth);

// Header to be called / updated before printing anything
header('Content-type:text/json');

// Multiple objects to be sent through a single object
$json = json_encode($result);
//$error = json_last_error();
//var_dump($json, $error === JSON_ERROR_UTF8);
echo $json;

?>
