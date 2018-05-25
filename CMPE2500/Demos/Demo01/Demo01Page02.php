    <?php
        require_once 'utility.php';

        if (!is_null(filter_input(INPUT_POST, 'name')) && strlen(filter_input(INPUT_POST, 'name')) > 0 && !is_null(filter_input(INPUT_POST, 'quantity')) && strlen(filter_input(INPUT_POST, 'quantity')) > 0) {
            $name = strip_tags($_POST['name']);
            $quantity = strip_tags($_POST['quantity']);

            if (!is_numeric($quantity)) {
                echo "I told you I wanted a number!";
                die();
            }

            $stars = MakeArray($quantity);
            $output = "";
            $output .= $name . " wants : ";

            for ($i = 0; $i < $quantity; ++$i) {
                $output .= $stars[$i];
            }
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
            <h1>Demo01 ~ Intro to PHP</h1>      
        </div>
        <a href="../../">Home</a>
        <a href="index.php">Demo01</a>
        <a href="">Demo01Page02</a>
        <hr/>        
        <form name="simpleForm" action="Demo01Page02.php" method="post">
            What is your name? : <input name="name" type="text" placeholder="Your Name Here"><br/>
            How many do you want? : <input name="quantity" type="text" placeholder="Number Please"><br/>
            <input type="submit" value="Generate"/>
        </form>
        <?php
            if (isset($output)) {
                echo "Server has returned : " . $output;
        }
        ?>
        <footer class="footerDiv">
            <div class="text-center footer largerText ">
                &COPY; by Jesse Huss <br/>
                <script>document.write("Last Modified: " + document.lastModified);</script>
            </div>
        </footer>
    </body>
</html>
