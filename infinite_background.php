<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Infinite numbers</title>
    <style>
        body {
            background-color: black;
            color: #00FF00;
            font-family: monospace, sans-serif;
            font-size: 30PX;
            font-weight: 900;
        }
    </style>
</head>

<body>

</body>

</html>


<?php

while (true) {
    echo rand(1000, 9999);
    // usleep(0.1);
    echo "\r";
}
