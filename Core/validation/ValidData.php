<?php 
namespace Core\Validation;

trait ValidData{
	public function validate($rules){
		$error = false;
		foreach ($rules as $name=>$rule) {
			$type = explode(':',$rule);
			switch ($type[0]) {
				case 'required':
					$error = $this->validRequired($name);
					break;
				case 'in':
					$error = $this->validIn($name,$type);
					break;
				case 'small_date':
					$error = $this->validSmallDate($name,$type);
					break;					
				default:
					break;
			}
			if($error){ break;}
		}
		return $error;
	}
	protected function validRequired($name){
		$check = empty($this->input($name));
		return $check ? 'required' : false;
	}
	protected function validIn($name,$type){
		if(count($type) < 1){ return false;}
		$input = $this->input($name);
		$allows = explode(',',$type[1]);
		$check = in_array($input, $allows);
		return $check ? false : 'not in';
	}
	protected function validSmallDate($name,$type){
		if(count($type) < 1){ return false;}
		$input = $this->input($name);
		$input_compare = $this->input($type[1]);
		if(empty($input) || empty($input_compare)){ return false;}
		return (strtotime($input) > strtotime($input_compare)) ? 'small date' : false;
	}
}