<?php 
namespace Core;
use Exception;
class View{
	protected $view_path = '/App/views';
	public function render($view,$args=[]){
		extract($args,EXTR_SKIP);
		$file_path = SITE_DIR . $this->view_path.'/' .$view;
        if(file_exists($file_path)) {
            require $file_path;
        }else{
            throw new Exception(__("$file_path not found"));
        }		
	}
	public function json($data){
		header('Content-Type: application/json');
		echo json_encode($data,JSON_UNESCAPED_UNICODE);
		exit;
	}
}