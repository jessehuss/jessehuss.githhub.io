<?php   
session_start();

function Validate($validate)
{
    global $userTable;
       
    if(password_verify($validate["pass"], $userTable["password"]))
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


