<?php

function MakeList($collection) {
    $list = "<ol>";
    for($i = 0; $i < count($collection);$i++){
        $list .= "<li>$collection[$i]</li>";
    }   
    $list .= "</ol>";

    return $list;
}
function GenerateNumbers(){
    $nums = array();
    for($i = 1; $i < 11; ++$i)
    {
        $nums[$i] = $i;        
    }
    shuffle($nums);
    return $nums;
}