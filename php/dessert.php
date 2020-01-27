<?php
    require 'connect.php';
    $number_dessert = rand(1,23);
    $sql_dessert = mysql_query("select * from dessert where id ="." ".$number_dessert);
    $sql_arr_dessert = mysql_fetch_assoc($sql_dessert);
    $name_dessert = $sql_arr_dessert['name'];
    echo json_encode($name_dessert,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
?>