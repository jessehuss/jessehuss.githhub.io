<?php   
session_start();

$secret = password_hash("testPass", PASSWORD_DEFAULT);

function Validate($validate)
{
    global $secret;
    
    if(password_verify($validate["pass"], $secret))
    {
        $validate["response"] = "Successfully logged in as {$validate["user"]}";
        $validate["status"] = true;
    }
    else
    {
        $validate["response"] = "Log in UNSUCCESSFUL";
        $validate["status"] = false;
    }
    return $validate;
}


