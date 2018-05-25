<?php

$mysql_connection = null;
$mysql_response = array();
$mysql_status = "";

mysqlConnect();

function mysqlConnect()
{
    global $mysql_connection, $mysql_response;
    $mysql_connection = new mysqli("localhost", "jhuss222_test", "P@ssw0rd", "jhuss222_CMPE2500");
    
    if($mysql_connection -> connect_error)    
    {
        $mysql_response[] = 'Connect error('. $mysql_connection->connect_errno . ') '.$mysql_connection -> connect_error;        
        echo json_encode($mysql_response);
        die();
    }
}
function mysqlQuery($query)
{
    global $mysql_connection,$mysql_response, $mysql_status;    
    $results = false;
    
    if($mysql_connection == null)
    {
        $mysql_status = "No active database connection!";
        return $results;                
    }
    
    if(!($results = $mysql_connection->query($query)))
    {
        $mysql_response[] = "Query Error {$mysql_connection->errno} : " ."{$mysql_connection->error}";
        echo json_encode($mysql_response);
        die();
    }
    
    return $results;
}

function mysqlNonQuery($query)
{
    global $mysql_connection, $mysql_response;

    if($mysql_connection == null)
    {
        $mysql_status = "No active database connection!";
        return -1;
    }
    if(!($mysql_connection->query($query)))
    {
        $mysql_response[] = "Query Error {$mysql_connection->errno} : " ."{$mysql_connection->error}";
        return -1;
    }
    return $mysql_connection->affected_rows;    
}

