<?php   
require_once 'functions.php';
require_once 'webService.php';

if(isset($_POST["submit"]) && $_POST["submit"] == "logout")
{
    session_unset();
    session_destroy();
    header("Location:index.php");
    die();
}

if(isset($_POST["submit"]) && $_POST["submit"] == "login"
        && isset($_POST["user"]) && strlen($_POST["user"]) > 0
        && isset($_POST["pass"]) && strlen($_POST["pass"]) > 0)
{    
    $user = strip_tags($_POST["user"]);
    $pass = strip_tags($_POST["pass"]);
         
    LoginQuery($user);
    
    $validate = array();
    $validate["userID"] = $userTable["userID"];
    $validate["user"] = $user;
    $validate["pass"] = $pass;
    $validate["response"] = "";
    $validate["status"]=false;   
    
    $validate = Validate($validate);
    
    if($validate["status"])
    {        
        $_SESSION["userID"] = $validate["userID"];        
        $_SESSION["user"] = $validate["user"];        
        header("Location:index.php");
        die();        
    }
    
    $pageStatus = $validate["response"];
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
            <h1>ICA03 ~ Login</h1>      
        </div>
        <a href="../">Home</a>
        <a href="../../">Assignments</a>
        <a href="../ICA01/index.php">ICA01</a>
        <a href="../ICA02/index.php">ICA02</a>
        <a href="">ICA03</a>
        <hr/>        
        
        <div class="container divOne">
            <form action="login.php" method="post">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-2 text-right">Username : </div>
                    <div class="col-md-3"><input type="text" name="user">(admin)<br/></div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-2 text-right">Password : </div>
                    <div class="col-md-3"><input type="text" name="pass">(pass)<br/></div>
                </div>
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6"><input class="CenteredInline" type="submit" name="submit" value="login" style="width: 100%"/></div>  
                </div>       
            </form>            
        </div>
        <br/>
        <div class="container-fluid divOne text-center">
            Page Status: <?php echo $pageStatus;?>
        </div>        
        <footer class="footerDiv">
            <div class="text-center footer largerText ">
                &COPY; by Jesse Huss <br/>
                <script>document.write("Last Modified: " + document.lastModified);</script>
            </div>
        </footer>
    </body>
</html>
