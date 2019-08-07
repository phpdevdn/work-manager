<?php 
require './../vendor/autoload.php';
require './../bootstrap/app.php';
// disptch request
$route = Core\Route::getInstance();
$route->dispatch();