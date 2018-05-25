<?php
require_once 'utility.php';
$status = "Status:";
$sentence = "";

if (!is_null(filter_input(INPUT_GET, 'Name')) && strlen(filter_input(INPUT_GET, 'Name')) > 0 && !is_null(filter_input(INPUT_GET, 'Hobby')) && strlen(filter_input(INPUT_GET, 'Hobby')) > 0) 
{
    $Name = strip_tags($_GET['Name']);   
    $Hobby = strip_tags($_GET['Hobby']);
    $HowMuch = strip_tags($_GET['HowMuch']);
    $status .= "ShowArray+";
    $sentence .= $Name;
    for ($i = 0; $i < $HowMuch; $i++) {
        $sentence .= " really";
    }
    $sentence .= " likes $Hobby";
    $status .= "ProcessForm+";
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
            <h1>ICA01 PHP</h1>      
        </div>
        <a href="../../">Home</a>
        <a href="../index.php">Assignments</a>
        <a href="">ICA01</a>
        <hr/>
        <div class="yel container">
            <div class="row">
                <div class="col-md-3">
                    Your IP Address is:
                </div>
                <div class="col-md-3">
                    <?php echo $_SERVER['REMOTE_ADDR']; ?>                    
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    Found : <?php echo count($_GET); ?> Entry in the $_GET                       
                </div>                
            </div>
            <div class="row">
                <div class="col-md-3">
                    Found : <?php echo count($_POST); $status .= "ServerInfo+"?> Entry in the $_POST                        
                </div>                
            </div>
        </div>
        <br/>
        <div class="yel container">            
            <?php
            $status .= "GetData+";                    
            $list = "<ul>";
            foreach ($_GET as $key => $value) {
                $list .= "<li>[$key] = $value</li>";
            }
            $list .= "</ul>";                        
            ?>
            <div class="col-md-4"></div>
            <div class=" col-md-4">
                <?php echo $list; ?>
            </div>
        </div>
        <br/>
        <div class="yel container">
            <div class="col-md-4">
                <?php 
                    $status .= "GenerateNumbers+";
                    echo MakeList(GenerateNumbers()); 
                    $status .= "MakeList";                    
                ?>
            </div>
        </div>
        <br/>         
        <div class="yel container">
            <form action="index.php" method="get">
                <div class="row">
                    <div class="col-md-5 text-right">
                        Name:
                    </div>                    
                    <div class="col-md-2 leftInline">
                        <input name="Name" id="Name" type="text" value="">
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-5 text-right">
                        Hobby:
                    </div>                    
                    <div class="col-md-2 leftInline">
                        <input name="Hobby" id="Hobby" type="text" value="">
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-5 text-right">
                        How Much I like it:
                    </div>                   
                    <div class="col-md-2 leftInline">
                        <input name="HowMuch" id="HowMuch" type="range" min="1" max="13" value="8">
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-12">
                        <input class="CenteredInline" name="Go Now!" id="get" type="submit" value="Go Now!"/>
                    </div>
                </div>
            </form>
        </div>
        <br/>
        <div class="yel container text-center">            
            <label> <?php echo $sentence; ?> </label>   
        </div>
        <br/>
        <div class="yel container-fluid text-center">            
            <label> <?php echo $status; ?> </label>   
        </div>
        <br/>
        <footer class="footerDiv">
            <div class="text-center footer largerText ">
                &COPY; by Jesse Huss <br/>
                <script>document.write("Last Modified: " + document.lastModified);</script>
            </div>
        </footer>
    </body>
</html>
