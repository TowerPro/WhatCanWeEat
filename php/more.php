<?php
    require 'connect.php';
    $number_more = rand(1,44);
    $sql_more = mysql_query("select * from morepeople where id ="." ".$number_more);
    $sql_arr_more = mysql_fetch_assoc($sql_more);
    $name_more = $sql_arr_more['name'];
    echo json_encode($name_more,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
?>