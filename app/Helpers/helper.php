<?php

// function changeDateFormate($date,$date_format){
    // return \Carbon\Carbon::createFromFormat('Y-m-d', $date)->format($date_format);    
// }
   
function array_except($array, $keys)
{
	foreach($keys as $key){
        unset($array[$key]);
    }
    return $array;
}