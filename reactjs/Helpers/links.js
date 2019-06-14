export let app_url = window._appConfig.app_url;
export let work_list_url = window._appConfig.work_list_url;
export let work_update_url = window._appConfig.work_update_url;
export let work_add_url = window._appConfig.work_add_url;
export let work_delete_url = window._appConfig.work_delete_url;
export let str2query = (str)=>{
	if(!str || str == ''){ return {};}
	let q_str = str.match(/\?[^\?]+$/);
	if(!q_str){ return {};}
	q_str = q_str[0];
	q_str = q_str.replace(/^\?/,'');
	let q_str_ar = q_str.split('&');
	var query = {};
	q_str_ar.forEach((ite)=>{
		let ite_ar = ite.split('=');
		let key = ite_ar[0];
		let value = ite_ar.length < 2 ? key : ite_ar[1];
		query[key]=value;
	});
	return query;
}