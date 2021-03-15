<?php
$servername = "localhost";
$database = "aesBd";
$username = "aesUser-Local";
$password = "79682869P@ola";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
/* if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
mysqli_close($conn); */

$username= $_POST['username'];
$pass= $_POST['pass'];

$sqluser= "Select * From user where username = '$username'";
$sqlpass= "Select * From user where pass = md5('$pass')";

$resullUser= mysqli_query($conn, $username);
$resullPass= mysqli_query($conn, $pass);


if($resullUser == true and resullPass == true){
    echo "user correct";
}else{
    echo"user incorrecto";
}

?>