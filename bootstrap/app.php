<?php
$root_path = dirname(__DIR__);
$c_dir = str_replace('\\','/',dirname(__DIR__));
$doc_root = $_SERVER['DOCUMENT_ROOT'];
$pattern = preg_replace('/\//', '\/', $doc_root);
if(preg_match('/^'.$pattern.'/',$c_dir)){
	$base_path = str_replace($doc_root,'',$c_dir);
}else{
	$base_path = '';
}
if(!defined('SITE_DIR')){
	define('SITE_DIR',$root_path);
}
if(!defined('SITE_PATH')){
	define('SITE_PATH',$base_path);
}
if(!defined('CONFIG_PATH')){
	define('CONFIG_PATH',$root_path.'/config');
}
//
$home_url = (isset($_SERVER['HTTPS']) ? "https" : "http").'://'.$_SERVER['HTTP_HOST'].$base_path;
if(!defined('SITE_URL')){
	define('SITE_URL',$home_url);
}
require './../App/Helpers/functions.php';
require './../config/routes.php';