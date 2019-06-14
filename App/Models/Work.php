<?php 
namespace App\Models;
use Core\Model;
use Exception;
class Work extends Model{
	const STATUS_PLANNING = 'planning';
	const STATUS_DOING = 'doing';
	const STATUS_COMPLETE = 'complete';
	protected $table = 'works';
	static public function statusAll(){
		return [
			static::STATUS_PLANNING => 'Planning',
			static::STATUS_DOING => 'Doing',
			static::STATUS_COMPLETE => 'Complete',
		];
	}
	static public function getColorStatusName(){
		return [
			'#f00'=>'Planning',
			'#f7ba0f'=>'Doing',
			'#00ca22'=>'Complete',
		];
	}
	static public function getColorStatus($status){
		switch ($status) {
			case static::STATUS_PLANNING:
				$color = '#f00';
				break;
			case static::STATUS_DOING:
				$color = '#f7ba0f';
				break;
			case static::STATUS_COMPLETE:
				$color = '#00ca22';
				break;			
			default:
				$color = '#3788d8';
				break;
		}
		return $color;
	}
	public function getAll(){
		$result = $this->query("SELECT * FROM {$this->table}");
		return $result; 
	}
	public function getInDuration($from,$to){
		$param = [
			':from_date'=>$from,
			':to_date'=>$to,
		];
		$result = $this->query("SELECT * FROM {$this->table} WHERE (start_date >= :from_date AND start_date <= :to_date) OR (end_date >= :from_date AND end_date <= :to_date)",$param)->get();
		return $result; 		
	}
	public function find($id){
		$param = [
			':id'=>$id,
		];
		$result = $this->query("SELECT * FROM {$this->table} WHERE id=:id LIMIT 1",$param)->get();
		return empty($result) ? null : $result[0]; 		
	}
	public function add($args=array()){
		$param=[];
		$param[':name']=$args['name'];
		$param[':start_date']=empty($args['start_date']) ? null : $args['start_date'];
		$param[':end_date']=empty($args['end_date']) ? null : $args['end_date'];
		$param[':status']=$args['status'];
		try {
			$result = $this->query("INSERT INTO {$this->table} (name,start_date,end_date,status) VALUES (:name,:start_date,:end_date,:status)",$param)->create();
		} catch (Exception $e) {
			$result = $e->getMessage();
		}
		
		return $result;
	}
	public function update($id,$param){
		$sql = $this->createStringSql($param);
		$param[':id']=$id;
		try {
			$this->query("UPDATE {$this->table} SET {$sql} WHERE id=:id",$param);
			$result =  true;
		} catch (Exception $e) {
			$result = false;
		}
		return $result;
	}
	public function delete($id){
		$param=[];
		$param[':id']=$id;
		try {
			$this->query("DELETE FROM {$this->table} WHERE id=:id",$param);
			$result =  true;
		} catch (Exception $e) {
			$result = false;
		}
		return $result;
	}
}