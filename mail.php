<?

$para = "celso.paredes@sngular.team";
$name = $_POST["name"];
$phone = $_POST["phone"];
$subject = "$name/$phone ";
$msg = $_POST["msg"];
$email = $_POST["email"];

$headers = "MIME-Version:1.0;\r\n";
$headers .= "Content-type: text/html; \r\n charset=iso-8859-1; \r\n";
$headers .= "From: $email; \r\n";
$headers .= "To: $para; \r\n Subject: $subject \r\n";

if(mail($para,$subject,$msg,$headers)){
	header('Location: http://ireneportfolio.hol.es/');
}
else
	echo "Something goes wrong! Please report this bug to celsoparedespjeda@gmail.com. Thank you!";

?>