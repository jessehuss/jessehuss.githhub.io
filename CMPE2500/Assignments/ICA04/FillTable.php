<?php

require_once 'dbUtility.php';
require_once 'functions.php';
if (isset($_POST["action"]) && $_POST["action"] == "AddUser" && isset($_POST["user"]) && strlen($_POST["user"]) > 0 && isset($_POST["pass"]) && strlen($_POST["pass"]) > 0) {
    $user = strip_tags($_POST["user"]);
    $pass = strip_tags($_POST["pass"]);
    $pass = password_hash($pass, PASSWORD_DEFAULT);
    echo AddUserQuery($user, $pass);
} else if (isset($_POST["action"]) && $_POST["action"] == "DeleteUser" && isset($_POST["userID"]) && strlen($_POST["userID"]) > 0) {
    $pageStatus = $validate["response"];
    $userID = strip_tags($_POST["userID"]);
    echo DeleteUserQuery($userID);
} else {
    echo AllUsersQuery($input);
}

function AllUsersQuery() {
    $query = "SELECT userID, username, password ";
    $query .="FROM prj_users ";

    $tableJSON = null;
    $count = 0;
    if ($results = mysqlQuery($query)) {
        while ($row = $results->fetch_assoc()) {
            $count++;
            $tableJSON[$count] = $row;
        }
    } else {
        return "Query Error : $query";
    }
    return json_encode($tableJSON);
}

function AddUserQuery($user, $pass) {
    global $mysql_response;

    $query = "INSERT into prj_users (username, password) VALUES('$user','$pass')";

    if (($numRows = mysqlNonQuery($query)) == -1) {
        echo json_encode($mysql_response);
        die();
    }
    echo json_encode($numRows);
}

function DeleteUserQuery($userID) {
    global $mysql_response;
    if ($_POST["userID"] != $_SESSION["userID"]) {
        $query = "DELETE FROM prj_users WHERE userID = '$userID'";

        if (($numRows = mysqlNonQuery($query)) == -1) {
            echo json_encode($mysql_response);
            die();
        }

        echo json_encode($numRows);
    } else {
        $numRows = -1;
        echo json_encode($numRows);
    }
}
