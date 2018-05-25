<?php
require_once 'functions.php';

if (!isset($_SESSION["user"])) {
    header("Location:login.php");
    die();
}
if (isset($_POST["submit"]) && $_POST["submit"] == "logout") {
    session_unset();
    session_destroy();
    header("Location:index.php");
    die();
}
if (isset($_POST["submit"]) && $_POST["submit"] == "Settings") {    
    header("Location:settings.php");
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
            <h1><?php echo "ICA04 mySQL Insert and Delete:{$_SESSION["user"]}" ?></h1>      
        </div>
        <a href="../">Home</a>
        <a href="../../">Assignments</a>
        <a href="../ICA01/index.php">ICA01</a>
        <a href="../ICA02/index.php">ICA02</a>
        <a href="../ICA03/index.php">ICA03</a>
        <a href="">ICA04</a>
        <hr/>        

        <div class="container divOne">
            <form action="index.php" method="post">
                <div class="row">    
                    <div class="col-md-6">
                        <input class="CenteredInline" type="submit" name="submit" value="Settings" style="width: 75%"/>
                    </div>
                    <div class="col-md-6">
                        <input class="CenteredInline" type="submit" name="submit" value="Messages" style="width: 75%"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <input class="CenteredInline" type="submit" name="submit" value="Tag Admin" style="width: 75%"/>
                    </div>
                    <div class="col-md-6">
                        <input class="CenteredInline" type="submit" name="submit" value="RealTime Monitor" style="width: 75%"/>
                    </div>
                </div>     
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6"><input class="CenteredInline" type="submit" name="submit" value="logout" style="width: 100%"/></div>  
                </div>   
            </form>            
        </div>
        <?php echo $pageStatus; ?>
        <footer class="footerDiv">
            <div class="text-center footer largerText ">
                &COPY; by Jesse Huss <br/>
                <script>document.write("Last Modified: " + document.lastModified);</script>
            </div>
        </footer>
    </body>
</html>
