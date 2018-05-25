<?php
    require_once 'functions.php';
    
    if(!isset($_SESSION["user"]))
    {
        header("Location:login.php");
        die();
    }       
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
            <h1>Demo02 ~ Home Page</h1>      
        </div>
        <a href="../../">Home</a>
        <a href="../">Demos</a>
        <a href="../Demo01/index.php">Demo01</a>
        <a href="">Demo02</a>   
        <a href="../Demo03/index.php">Demo03</a>
        <hr/>
        <div>
            <h2><?php echo "Hi {$_SESSION["user"]}!"?></h2>
            <form action="login.php" method="post">
                <input type="submit" name="submit" value="logout"/>
            </form>
        </div>
            <footer class="footerDiv">
                <div class="text-center footer largerText ">
                    &COPY; by Jesse Huss <br/>
                    <script>document.write("Last Modified: " + document.lastModified);</script>
                </div>
            </footer>
    </body>
</html>



