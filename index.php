<?php
$servername = "127.0.0.1"; // Der Servername (normalerweise localhost)
$username = "root"; // Dein MySQL-Benutzername
$password = "lM+2021.10+25"; // Dein MySQL-Passwort
$dbname = "MBC"; // Der Name deiner MySQL-Datenbank

// Verbindung herstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Verbindung überprüfen
if ($conn->connect_error) {
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}
echo "Verbindung erfolgreich";
?>