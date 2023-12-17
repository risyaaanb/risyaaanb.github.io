<?php

if (isset($_POST["submit"])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message']; ?>
    <h1><?= $name ?></h1>
    <h1><?= $email ?></h1>
    <h1><?= $phone ?></h1>
    <h1><?= $subject ?></h1>
    <h1><?= $message ?></h1>

    <?php
    echo "We will contact you soon";
    ?>
<?php } ?>
