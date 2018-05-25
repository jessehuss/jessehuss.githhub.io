<?php   
session_start();

$userTable = array();
$userTable['admin'] = password_hash('pass', PASSWORD_DEFAULT );
$userTable['germf'] = password_hash('new123', PASSWORD_DEFAULT );
function AddUser($newUser){
    $userTable[$newUser['user']] = password_hash($newUser['pass'], PASSWORD_DEFAULT );
}
function Validate($validate)
{
    global $userTable;
    
    if(password_verify($validate["pass"], $userTable[$validate["user"]]))
    {
        $validate["response"] = "Successfully logged in as {$validate["user"]}";
        $validate["status"] = true;
    }
    else
    {
        $validate["response"] = "No Match";
        $validate["status"] = false;
    }
    return $validate;
}


