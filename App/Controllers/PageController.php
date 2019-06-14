<?php 
namespace App\Controllers;
use Core\Controller;
class PageController extends Controller{
	public function home(){
		return view()->render('home.php');
	}
}