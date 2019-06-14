<?php 
namespace Core;
use Core\MySqlConnect;
class Model{
	protected $table;
	protected $connection;
	protected $query;
	public function __construct(){
		$this->connection = new MySqlConnect;
	}
	public function query($sql,$param=[]){
		$this->query = $this->connection->query($sql,$param);
		return $this;
	}
	public function get(){
		$result = $this->connection->get($this->query);
		return $result;
	}
	public function create(){
		$result = $this->connection->create($this->query);
		return $result;		
	}
	public function createStringSql($data){
		$sql_ar = array_map(function($key){
			return "{$key}=:{$key}";
		},array_keys($data));
		return implode(',',$sql_ar);
	}
}