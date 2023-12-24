<?php

if (isset($_POST["submit"])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message']; ?>
    

    <?php
    echo "Thank you for the message, we will contact you soon";
    ?>
<?php } 
?>
<p>
 Input Data Lagi <a href="index.php">Feedback
</p>

