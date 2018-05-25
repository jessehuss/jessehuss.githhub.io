<?php
require_once 'dbUtility.php';

if(isset($_POST["username"])&&  strlen($_POST["username"]) > 0)
    $input = strip_tags ($_POST["username"]);

$userTable = array();

function LoginQuery($username)
{
    global $mysql_connection;
    
    $username = $mysql_connection->real_escape_string($username);
    $query = "SELECT userID, username, password ";
    $query .="FROM prj_users ";
    $query .="WHERE username = '{$username}' ";
    
    global $userTable;
    
    if($results = mysqlQuery($query))
    {   
        while($row = $results->fetch_assoc())
        {            
            $userTable = $row;                 
        }        
    }    
    else
    {
        return "Query Error : $query";
    }    
}

   