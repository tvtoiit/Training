<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

//Include things that need to be global, for integrating with other frameworks
include "globals.php";

ini_set('memory_limit', '-1');
set_time_limit(0);

if($_SERVER["REQUEST_METHOD"] != 'POST') {
  $return_data->status = 400;
  $return_data->message = "Bad request";
  echo json_encode($return_data);
  exit;
}
$json_string = file_get_contents('php://input');
$params = json_decode($json_string, true);
$command = $params["command"];

$phpClassName = str_replace("_","",mb_convert_case($command, MB_CASE_TITLE));

include $servicesPath . $phpClassName .".php";

$Class = $phpClassName;
if (class_exists($Class)) {
  $target_class = new $Class($params);
  $return_data = $target_class->processAPI();
}else{
  $return_data->status = 404;
  $return_data->message = "Not Found";
}

echo json_encode($return_data);
?>