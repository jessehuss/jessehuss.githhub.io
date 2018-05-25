<?php

require_once 'dbUtility.php';

if (isset($_POST["filter"]) && strlen($_POST["filter"]) > 0)
    $input = strip_tags($_POST["filter"]);
if (isset($_POST["multiplier"]) && strlen($_POST["multiplier"]) > 0) {
    $multiplier = floatval(strip_tags($_POST["multiplier"]));
    $rowsAffected = TestNonQuery($multiplier, $input);
}

if(isset($rowsAffected) != NULL)
    echo "<br/>" . TestQuery($input) . "<br/>$rowsAffected rows affected!";
else 
    echo TestQuery($input);




function TestQuery($filter) {
    global $mysql_connection;

    $filter = $mysql_connection->real_escape_string($filter);
    $query = "SELECT title_id, title, price ";
    $query .="FROM titles ";
    $query .="WHERE title LIKE '%{$filter}%'";

    $output = "<ul>";

    if ($results = mysqlQuery($query)) {
        while ($row = $results->fetch_assoc()) {
            $output .= "<li>{$row['title_id']} : {$row['title']} = {$row['price']}</li>";
        }
    } else {
        return "Query Error : $query";
    }
    $output .="</ul>";
    return $output;
}

function TestNonQuery($value, $filter) {
    global $mysql_response;

    $query = "UPDATE titles SET price = $value * price WHERE title like '%$filter%'";

    if (($numRows = mysqlNonQuery($query)) == -1) {
        echo json_encode($mysql_response);
        die();
    }
    return $numRows;
}
