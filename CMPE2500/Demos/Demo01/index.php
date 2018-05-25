<?php   
    require_once 'utility.php';
?>
<html>
    <head>
        <title>CMPE2500</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>              
        <div class="jumbotron text-center">
            <h1>Demo01 ~ Intro to PHP</h1>      
        </div>
        <a href="../../">Home</a>
        <a href="../">Demos</a>
        <a href="">Demo01</a>
        <a href="../Demo02/">Demo02</a>    
        <a href="../Demo03/index.php">Demo03</a>
        <hr/>
        <div>
            <?php
                echo ShowCollection($_SERVER);
            ?>            
        </div>       
        <br/><br/>
        <a href="Demo01Page02.php">Demo01Page02</a>    
         <footer class="footerDiv">
            <div class="text-center footer largerText ">
                &COPY; by Jesse Huss <br/>
                <script>document.write("Last Modified: " + document.lastModified);</script>
            </div>
        </footer>
    </body>
</html>

