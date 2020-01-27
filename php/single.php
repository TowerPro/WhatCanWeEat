<?php
    require 'connect.php';
    $number_single = rand(1,23);
    $sql_single = mysql_query("select * from singlepeople where id ="." ".$number_single);
    $sql_arr_single = mysql_fetch_assoc($sql_single);
    $name_single = $sql_arr_single['name'];
    echo json_encode($name_single,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
?>