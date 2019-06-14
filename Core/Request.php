<?php 
namespace Core;
use Core\Validation\ValidData;
class Request{
    use ValidData;
	private static $instance;
	public $url;
	public $full_url;
    public $method;
    public $inputs;
	public function __construct(){
		$this->initial();
	}
    static public function getInstance()
    {
        if (null === static::$instance) {
            static::$instance = new static;
        }
        return static::$instance;    	
    }
    //
    public function input($name){
        if(!array_key_exists($name,$this->inputs)){
            return null;
        }
        return $this->inputs[$name];
    }
    //
    private function initial(){
        $request_uri = preg_replace('/\?.*$/','',$_SERVER['REQUEST_URI']);
    	$url = str_replace(SITE_PATH,'',$request_uri);
        $this->url = $url;
    	$this->full_url = SITE_URL . $url;
        $this->method = strtolower($_SERVER['REQUEST_METHOD']);
        $this->inputs = $_POST;
    }
}