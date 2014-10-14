<?PHP 
$user = $_POST['user']; 
$pass = $_POST['pass']; 

If ($user == '' || $pass == '') { 
echo 'No Username or Password'; 
} 
else { 
header ("Location: [url]http://[/url]$user:$pass@apples-imac.local/private/member.php"); 
} 
?>