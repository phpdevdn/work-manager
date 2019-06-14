<?php 
$route = Core\Route::getInstance();
$route->get('/',['controller'=>'PageController','action'=>'home']);
$route->get('/works',['controller'=>'WorkController','action'=>'viewAll']);
$route->get('/works/view/{id}',['controller'=>'WorkController','action'=>'view']);
$route->post('/works/add',['controller'=>'WorkController','action'=>'add']);
$route->post('/works/update/{id}',['controller'=>'WorkController','action'=>'update']);
$route->get('/works/delete/{id}',['controller'=>'WorkController','action'=>'delete']);