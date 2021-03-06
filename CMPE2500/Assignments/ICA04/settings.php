<?php
require_once 'functions.php';
require_once 'dbUtility.php';
if (!isset($_SESSION["user"])) {
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
        <script src="java.js" type="text/javascript"></script>
        <link rel="stylesheet" href="style.css">        
    </head>
    <body>              
        <div class="jumbotron text-center">
            <h1><?php echo "ICA04 Settings:{$_SESSION["user"]}" ?></h1>      
        </div>
        <a href="../">Home</a>
        <a href="../../">Assignments</a>
        <a href="../ICA01/index.php">ICA01</a>
        <a href="../ICA02/index.php">ICA02</a>
        <a href="../ICA03/index.php">ICA03</a>
        <a href="">ICA04</a>
        <hr/>        

        <div class="container divOne">
            <form action="settings.php" method="post">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-2 text-right">Username : </div>
                    <div class="col-md-3"><input id="user" type="text" name="user" placeholder="Supply a username"><br/></div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-2 text-right">Password : </div>
                    <div class="col-md-3"><input id="pass" type="text" name="pass" placeholder="Supply a password"><br/></div>
                </div>
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6"><input class="CenteredInline" id="addUser" type="button" name="submit" value="AddUser" style="width: 100%"/></div>  
                </div>                       
            </form>            
        </div>
        <br/>
        <div class="container divOne">
            <div class="row">
                <div class="col-md-12">
                    <table class="tables text-left" id="firstTable">
                        <th colspan="2">Op</th>
                        <th colspan="2">userID</th>
                        <th colspan="4">Username</th>
                        <th colspan="4">Encrypted Password</th>
                    </table>
                </div>
            </div>
        </div>              
        <br/>
        <div class="container-fluid divOne text-center">
            <div id="statusDiv"></div>  
            <div id="statusDiv2"></div>  
</div>
<br/>
<?php echo $pageStatus; ?>       
<footer class="footerDiv">
    <div class="text-center footer largerText ">
        &COPY; by Jesse Huss <br/>
        <script>document.write("Last Modified: " + document.lastModified);</script>
    </div>    
</footer>
<form action="index.php" method="post">                
                <div class="container-fluid">                   
                    <input class="CenteredInline" type="submit" name="submit" value="logout" style="width: 100%"/> 
                </div>   
            </form>   
</body>
</html>

