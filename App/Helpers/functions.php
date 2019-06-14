<?php 
if(!function_exists('__')){
	function __($txt){
		return $txt;
	}
}
if(!function_exists('view')){
	function view(){
		return new Core\View;
	}
}
if(!function_exists('site_url')){
	function site_url($path=null){
		return SITE_URL . '/'.$path;
	}
}
if(!function_exists('url')){
	function url($path=null){
		return SITE_URL . '/'.$path;
	}
}
function getEventCalendarColor($status){
	return App\Models\Work::getColorStatus($status);
}
function get_calendar_works($datas){
	$out=[];
	foreach($datas as $dt){	
		$color = getEventCalendarColor($dt->status);	
		$out[]=[
			'id'=>$dt->id,
			'title'=>$dt->name,
			'start'=>$dt->start_date ? $dt->start_date : $dt->end_date ,
			'end'=>$dt->end_date,
			'status'=>$dt->status,
			'backgroundColor'=>$color,
			'borderColor'=>$color
		];
	}
	return $out;
}
function get_calendar_work($dt){
	$color = getEventCalendarColor($dt->status);
	$out=[
		'id'=>$dt->id,
		'title'=>$dt->name,
		'start'=>$dt->start_date ? $dt->start_date : $dt->end_date,
		'end'=>$dt->end_date,
		'status'=>$dt->status,
		'backgroundColor'=>$color,
		'borderColor'=>$color
	];
	return $out;
}