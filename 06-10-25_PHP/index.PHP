<?php
echo "Salut! ";

$nom="Emma Bossaert";
$age=25;

echo "Je m'appelle ". $nom; 
echo " et j'ai " . $age ;
echo " ans ";

if ($age >= 18){
    echo ": je suis majeur(e) ";
} else {
    echo ": je suis mineur(e) ";
}

$maki= "californian";
switch($maki){
 case "saumon":
    echo "C'est un maki au saumon";
    break;
case "thon":
    echo "C'est un maki au thon";
    break;
default:
    echo "Ce maki n'est pas disponible ";
    break;
 }

 for ($i=0 ; $i<11 ; $i++){
    echo $i;
 }

 $i= 0;
 while ( $i<11) {
    echo $i;
    $i++;
 }

 $fruit = "fraise","pomme";{
echo '<hr>';
 }
foreach {}


session_start();

$bonemail
$bonpassword

session start();
$_SESSION;
$_GET;
$_POST;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <form action="" method="post">
            <input type="text" placeholder="email" name="email">
            <input type="password" placeholder="mot de passe" name="password">
            <button type="submit">connexion </button>
        </form>
        <
    </div>
    
</body>
</html>
