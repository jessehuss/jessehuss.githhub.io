<?php
require_once 'dbUtility.php';

echo AllUsersQuery($input);
function AllUsersQuery()
{
    global $mysql_connection;
    $query = "SELECT userID, username, password ";
    $query .="FROM prj_users ";    
    
    $tableJSON = null;
    $count = 0;
    if($results = mysqlQuery($query))
    {   
        while($row = $results->fetch_assoc())
        {   
            $count++;
            $tableJSON[$count] = $row; 
        }        
    }    
    else
    {
        return "Query Error : $query";
    }
    return json_encode($tableJSON);   
}