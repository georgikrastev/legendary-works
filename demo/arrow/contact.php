<?php
    if (isset($_POST["submit"])) {
        $name = isset($_POST['c-name']) ? $_POST['c-name'] : '';
        $email = isset($_POST['c-email']) ? $_POST['c-email'] : '';
        $subject = isset($_POST['c-subject']) ? $_POST['c-subject'] : '';
        $message = isset($_POST['c-message']) ? $_POST['c-message'] : '';
        $from = 'Coder Contact Form'; 
        $to = 'the.legend.torres@gmail.com'; // Change this email with yours
        
        $body = "From: $name\nE-Mail: $email\nMessage:\n $message";
        
        // Field values are validated with jQuery 
        // If there are no errors, send the email
        if (mail($to, $subject, $body, $from)) {
            $result='<div class="alert alert-success">Thank You! We will get to you as soon as possible.</div>';
        } else {
            $result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
        }

        echo json_encode($result);
        exit;
    }
?>