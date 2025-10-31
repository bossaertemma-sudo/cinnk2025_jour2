<?php

try{
    $pdo = new PDO (dns:"mysql:host=localhost;dbname=mabdd", username: "root", password:"");
echo "connexion réussie";
} catch (PDOException $e){
    echo "erreur de connexion" . $e->getMessage();
}