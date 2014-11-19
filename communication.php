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

class Poll {
	public $pollid, $Subject, $Detail;
	
	public function __construct($pollid,$Subject,$Detail=null){
		$this->pollid = $pollid;
		$this->Subject = $Subject;
		$this->Detail = $Detail;
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
$query = "SELECT  nbid, nbSubject, nbDetail FROM NoticeBoard WHERE Owner = ?";

	$stmt = mysqli_prepare($conn, $query);
	if ( false===$stmt ) {
		// and since all the following operations need a valid/ready statement object
		// it doesn't make sense to go on
		// you might want to use a more sophisticated mechanism than die()
		// but's it's only an example
		die('prepare() failed: ' . htmlspecialchars($mysqli->error));
	}
	
	// Bind input parameters
	$rc = mysqli_stmt_bind_param($stmt, "s", $username);
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


////////////////////// GET noticeboard information from Database //////////////////////////
function get_poll_from_db($conn, $username){
	
	// Consultation
	/*$query = "SELECT person.firstName,person.lastName,person.age FROM person,user WHERE person.id = user.id_person_fk AND user.username = ?";*/
//$query = "SELECT  nbid, nbSubject, nbDetail FROM NoticeBoard WHERE Owner = ?";
$query = "SELECT  PollID, Subject, Detail FROM Poll";


	$stmt = mysqli_prepare($conn, $query);
	if ( false===$stmt ) {
		// and since all the following operations need a valid/ready statement object
		// it doesn't make sense to go on
		// you might want to use a more sophisticated mechanism than die()
		// but's it's only an example
		die('prepare() failed: ' . htmlspecialchars($mysqli->error));
	}
	
	// Bind input parameters
	/*$rc = mysqli_stmt_bind_param($stmt, "s", $username);
	if ( false===$rc ) {
		// again execute() is useless if you can't bind the parameters. Bail out somehow.
		die('bind_param() failed: ' . htmlspecialchars($stmt->error));
	}	*/

	// Execute statement and store results
	$rc = mysqli_stmt_execute($stmt);	
	// execute() can fail for various reasons. And may it be as stupid as someone tripping over the network cable
	// 2006 "server gone away" is always an option
	if ( false===$rc ) {
		die('execute() failed: ' . htmlspecialchars($xstmt->error));
	}
	mysqli_stmt_store_result($stmt);

	// ORM - Object Relational Mapping - Bind result to output parameters
	mysqli_stmt_bind_result($stmt, $pollid, $Subject,$Detail);
	$noticeboard = array();
	while (mysqli_stmt_fetch($stmt)) {
		$noticeboard[] = new Poll($pollid, $Subject,$Detail);
	}	
		
	mysqli_stmt_close($stmt);		
	
	return $noticeboard;
}



////////////////////// SET NoticeBoard information into Database //////////////////////////
function set_noticeboard_info_db($conn, $nbdetails){
	
	// Consultation
	/*$query = "SELECT person.firstName,person.lastName,person.age FROM person,user WHERE person.id = user.id_person_fk AND user.username = ?";*/

	
	$query ="INSERT INTO NoticeBoard (nbid,nbSubject,nbDetail,Owner,nbValidity)
VALUES ('$nbdetails[0]','$nbdetails[1]','$nbdetails[2]','$nbdetails[3]','$nbdetails[4]');";
		$rc = mysqli_stmt_execute($stmt);	
			mysqli_stmt_store_result($stmt);
				mysqli_stmt_close($stmt);		


	$stmt = mysqli_prepare($conn, $query);
	if ( false===$stmt ) {
		// and since all the following operations need a valid/ready statement object
		// it doesn't make sense to go on
		// you might want to use a more sophisticated mechanism than die()
		// but's it's only an example
		die('prepare() failed: ' . htmlspecialchars($mysqli->error));
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
/*	mysqli_stmt_bind_result($stmt, $fname, $lname, $age);
	$people = array();
	while (mysqli_stmt_fetch($stmt)) {
		$people[] = new Person($fname, $lname, $age);
	}	
*/		
	mysqli_stmt_close($stmt);		
	return;	
}

////////////////////// SET NoticeBoard information into Database //////////////////////////
function set_poll_info_db($conn, $polldetails){
	
	// Consultation
	/*$query = "SELECT person.firstName,person.lastName,person.age FROM person,user WHERE person.id = user.id_person_fk AND user.username = ?";*/

	
	$query ="INSERT INTO Poll (PollID,Subject,Detail,Validity,Option_1,Option_2,Option_3,Option_4,Option_5,SelectedOption)
VALUES ('$polldetails[0]','$polldetails[1]','$polldetails[2]','$polldetails[3]','$polldetails[4]','$polldetails[5]','$polldetails[6]','$polldetails[7]','$polldetails[8]','$polldetails[9]');";
		$rc = mysqli_stmt_execute($stmt);	
			mysqli_stmt_store_result($stmt);
				mysqli_stmt_close($stmt);		


	$stmt = mysqli_prepare($conn, $query);
	if ( false===$stmt ) {
		// and since all the following operations need a valid/ready statement object
		// it doesn't make sense to go on
		// you might want to use a more sophisticated mechanism than die()
		// but's it's only an example
		die('prepare() failed: ' . htmlspecialchars($mysqli->error));
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
/*	mysqli_stmt_bind_result($stmt, $fname, $lname, $age);
	$people = array();
	while (mysqli_stmt_fetch($stmt)) {
		$people[] = new Person($fname, $lname, $age);
	}	
*/		
	mysqli_stmt_close($stmt);		
	return;	
}
////////////////////// MAIN //////////////////////////


if($_GET){
	$nbdetails=array();
	$nbdetails[] = $_GET['Command'];
	$conn = open_db_connection();	
	$result = array();
	switch ($nbdetails[0]) 
	{
		case "SubmitNB":
		    echo "SubmitNB!";
		    $nbdetails[] = $_GET['Subject'];
		    $nbdetails[] = $_GET['Detail'];
			$nbdetails[] = $_GET['email'];
			$nbdetails[] = $_GET['Validity'];
			set_noticeboard_info_db($conn, $nbdetails);

		    $to = "padmashreemr@gmail.com"; // this is your Email address
		    $from = "padmashreemr@gmail.com"; // this is the sender's Email address
		    $first_name = "Padma";
		    $last_name = "M.R Bhat";
		    $subject =  $_GET['Subject'];
		    $subject2 =  $_GET['Subject'];
		    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_GET['Detail'];
		    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_GET['Detail'];
		
		
		$message = "
<html>
<head>
<title>HTML email</title>
</head>

<body>
<h2> Email Padmashree </h2>
<p>This email contains HTML Tags!</p>
<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>
<tr>
<td>John</td>
<td>Doe</td>
</tr>
</table>

</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <webmaster@example.com>' . "\r\n";
$headers .= 'Cc: myboss@example.com' . "\r\n";


		    mail($to,$subject,$message,$headers);
		    mail($from,$subject2,$message2,$headers); // sends a copy of the message to the sender
		    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
		    // You can also use header('Location: thank_you.php'); to redirect to another page.
			
		    break;
		case "CreatePoll":
		    echo "CreatePoll!"; 
		    $nbdetails[] = $_GET['Subject'];
		    $nbdetails[] = $_GET['Detail'];
			$nbdetails[] = $_GET['Validity'];
			$nbdetails[] = $_GET['Pollopt1'];
		    $nbdetails[] = $_GET['Pollopt2'];
			$nbdetails[] = $_GET['Pollopt3'];
			$nbdetails[] = $_GET['Pollopt4'];
			$nbdetails[] = $_GET['Pollopt5'];
			$nbdteails[] = $_GET['PollOption'];
			set_poll_info_db($conn, $nbdetails);
		    break;
		case "GetPoll":
			$username ="padmashreemr@gmail.com";
		 	$noticeboard = get_poll_from_db($conn, $username);
		 	$result[] = $noticeboard;
		    break;
		case "GetNB":
		 	$username = $_GET['username'];
		 	$noticeboard = get_noticeboard_from_db($conn, $username);
		 	$result[] = $noticeboard;
		    break;
		case "GetnbDetail":
		   	$username = $_GET['username'];
		 	$noticeboard = get_noticeboard_from_db($conn, $username);
		 	$nbrow=$_GET['nbrow'];
		 	$result[] = $noticeboard;
		    break;
		default:
	  	    echo "Your favorite color is neither red, blue, or green!";
	  	    break;
	}

}
else{
	$username = $argv[1];
}

		close_db_connection($conn);
			
		// Header to be called / updated before printing anything
		header('Content-type:text/json');
		
		// Multiple objects to be sent through a single object
		$json = json_encode($result);
		//$error = json_last_error();
		//var_dump($json, $error === JSON_ERROR_UTF8);
		echo $json;
?>
