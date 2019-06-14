<?php 
namespace App\Controllers;
use Core\Controller;
use Core\Request;
use App\Models\Work;
use Exception;
class WorkController extends Controller{
	public function viewAll(){
		$cr_month = date('Y-m');
		$start_date = "{$cr_month}-01";
		$end_date = "{$cr_month}-31";
		$work_model = new Work;
		$works = $work_model->getInDuration($start_date,$end_date );
		$calendar_works = get_calendar_works($works);
		return view()->json($calendar_works);
	}
	public function add(){
		$request = Request::getInstance();
		$status = array_keys(Work::statusAll());
		$rules = [
			'name'=>'required',
			'status'=>'in:'.implode(',',$status),
			'start_date'=>'small_date:end_date'
		];
		$error = $request->validate($rules);
		if($error){
			return view()->json(['error'=>$error]);
		}
		$data = [
			'name'=>$request->input('name'),
			'start_date'=>$request->input('start_date'),
			'end_date'=>$request->input('end_date'),
			'status' => $request->input('status')
		];
		$work = new Work;
		$id = $work->add($data);
		$new_data = (object)array_merge($data,['id'=>$id]);
		$result = get_calendar_work($new_data);
		return view()->json(['error'=>0,'data'=>$result]);
	}
	//-doing-	
	public function view($id){
		$work_model = new Work;
		$work = $work_model->find($id);
		if(!$work){
			throw new Exception('Not found !',404);
		}
		var_dump($work);
		exit;		
	}
	public function update(){
		$work = new Work;
		$result = $work->update(4,['name'=>'work 4']);
		var_dump($result);
		exit;		
	}
	public function delete($id){
		$work_model = new Work;
		$work = $work_model->find($id);
		if(!$work){
			throw new Exception('Not found !',404);
		}		
		$result = $work_model->delete($id);
		if(!$result){
			throw new Exception('Error!');
		}
		echo 'complete!';
		exit;		
	}		
}