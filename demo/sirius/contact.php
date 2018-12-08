<?php
    if (isset($_POST["submit"])) {
        $name = isset($_POST['contact_name']) ? $_POST['contact_name'] : '';
        $email = isset($_POST['contact_email']) ? $_POST['contact_email'] : '';
        $subject = 'Contact From';
        $message = isset($_POST['contact_message']) ? $_POST['contact_message'] : '';
        $from = 'Sirius Contact Form'; 
        $to = 'the.legend.torres@gmail.com'; // Change this email with yours
        
        $body = "From: $name\nE-Mail: $email\nMessage:\n$message";
        
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