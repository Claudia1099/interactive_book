<?php
$servername = "localhost";
$database = "aesBd";
$username = "aesClie-Local";
$password = "79682869P@ola";

$connect = mysqli_connect($servername, $username, $password, $database);   
$usern= $_POST['username'];
$pass= $_POST['pass'];

$result= mysqli_query($connect,"SELECT * FROM user WHERE userlogin = '$usern'");

if(!$result){
    die("Query access failed: " . mysqli_error());
}

$rows = mysqli_fetch_assoc($result);

if(!empty($rows)){
    if($pass == $rows['userpass']){
        session_start();
        $_SESSION['iduser'] = $rows['userid'];
        $response = array(
            'response'=>'true'
        );
    }else{
        $response = array(
            'response'=>'false'
        );
    }
}
mysqli_close($connect);
?>