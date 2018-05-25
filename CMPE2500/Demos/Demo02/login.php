<?php   
require_once 'functions.php';

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
    
    $validate = array();
    $validate["user"] = $user;
    $validate["pass"] = $pass;
    $validate["response"] = "";
    $validate["status"]="";
    
    $validate = Validate($validate);
    
    if($validate["status"])
    {
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
            <h1>Demo02 ~ Login</h1>      
        </div>
        <a href="../../">Home</a>
        <a href="../">Demos</a>
        <a href="../Demo01/index.php">Demo01</a>
        <a href="index.php">Demo02</a>
        <hr/>
        <a href="">Login Page</a>       
        <div>
            <form action="login.php" method="post">
                Username : <input type="text" name="user"><br/>
                Password : <input type="text" name="pass"><br/>
                <input type="submit" name="submit" value="login"/>
                <input type="submit" name="submit" value="logout"/>                
            </form>            
        </div>
        <?php echo $pageStatus;?>
         <footer class="footerDiv">
            <div class="text-center footer largerText ">
                &COPY; by Jesse Huss <br/>
                <script>document.write("Last Modified: " + document.lastModified);</script>
            </div>
        </footer>
    </body>
</html>



