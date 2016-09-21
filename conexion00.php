<?php

$user= "ionander95";
$pass="";

try{
    $dbh = new PDO('mysql:host=localhost;dbname=todo',$user,$pass);
    
}
catch (PDOException $e)  {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

?>