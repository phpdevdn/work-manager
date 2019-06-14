<?php 
namespace Core;
use Exception;
class Route{
	private static $instance;
	protected $namespace_controller = 'App\\Controllers';
	protected $routes = [];
	public $request;
    public $params = [];
	public function __construct(){
		$this->request = Request::getInstance();
	}
    static public function getInstance()
    {
        if (null === static::$instance) {
            static::$instance = new static;
        }
        return static::$instance;    	
    }
    //
    public function get($url,$params=[]){
        $data = array_merge(['method'=>'get'],$params);
        $route_pattern = $this->getRoutePattern($url);
        $this->routes[$route_pattern] = $data;
    }
    public function post($url,$params=[]){
        $data = array_merge(['method'=>'post'],$params);
        $route_pattern = $this->getRoutePattern($url);
        $this->routes[$route_pattern] = $data;
    }
    public function dispatch(){
    	if(!$match=$this->matchUrl()){
    		throw new Exception(__('Not found !'),404);
    	}
    	$params = $this->params;
    	$namespace = $this->namespaceController($params['controller']);
    	$controller = new $namespace;
    	$action = $params['action'];
        unset($match[0]);
        call_user_func_array([$controller,$action],$match);
    	return; 
    }
    //
    private function getRoutePattern($url){
        $pattern = preg_replace('/\//', '\\/', $url);
        $pattern = preg_replace('/\{([a-z]+)\}/', '([\d\w\-]+)', $pattern);
        $pattern = '/^' . $pattern . '$/i';
        return $pattern;
    }
    private function matchUrl(){
    	$url = $this->request->url;
    	$routes = $this->routes;
        $route = null;
        foreach ($routes as $k_route=>$v_route) {
            if(preg_match($k_route,$url,$match)){
                $route = $routes[$k_route];
                break;
            }
        }
    	if(!$route){
    		return false;
    	}
        if($this->request->method !== $route['method']){
            return false;
        }
        $this->params = $route;
    	return $match;
    }
    private function namespaceController($name){
    	return $this->namespace_controller .'\\'.$name;
    }
}