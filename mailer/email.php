<?php
/**
 * Created by PhpStorm.
 * User: Developer
 * Date: 11/03/2015
 * Time: 11:45 PM
 */

if (isset($_POST["email"])) {
    if ($_POST["email"] == "" || $_POST["mensaje"] == "") {
        echo "Existen campos sin completar (Email y Mensaje son obligatorios).";
    } else {
        $email = $_POST['email'];
        $nombre = $_POST['nombre'];
        $mensaje = $_POST['mensaje'];

        $email = filter_var($email, FILTER_SANITIZE_EMAIL);

        $email = filter_var($email, FILTER_VALIDATE_EMAIL);

        if (!$email) {
            echo utf8_decode("El email es inválido");
        } else {

            $subject = "Te han contactado mediante tu sitio web";

            $headers = 'From:'. $email . "\r\n";

            $nombre_eval = empty($nombre);

            if(!$nombre_eval){
                $message = $nombre." te ha contactado mediante tu sitio web.\n\r";
                $message .= "\"". $mensaje ."\"";
            }else{
                $message = "Has recibido el siguiente mensaje desde tu sitio web: \n\r";
                $message .= "\"". $mensaje ."\"";
            }

            $message = wordwrap($message, 70);

            mail("contacto@saaloon.com.mx", $subject, $message, $headers);

            echo "1";
        }
    }
}