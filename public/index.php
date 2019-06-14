<?php 
require './../vendor/autoload.php';
require './../bootstrap/app.php';
$route = Core\Route::getInstance();
$route->dispatch();