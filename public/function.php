<?php
    function userStart(){
        return isset($_SESSION['iduser'])
    }
    userStart();
    session_start();
?>