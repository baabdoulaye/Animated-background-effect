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
            font-size: 30px;
            font-weight: 900;
            overflow-x: hidden;
            position: relative;
            height: 100vh;
            width: 90%;
            display: flex;
        }
    </style>
</head>

<body>
    <div id="numberContainer"></div>
    <script>
        setInterval(function() {
            var randomNumber = Math.floor(Math.random() * 9000) + 1000;
            var numberContainer = document.getElementById('numberContainer');
            numberContainer.innerText += randomNumber +
                " . ";
            window.scrollTo(0, document.body.scrollHeight);
        }, 1);
    </script>
</body>

</html>