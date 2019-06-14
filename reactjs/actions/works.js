import axios from 'axios';
import {work_list_url,str2query} from './../Helpers/links';
export const work_actions = {
	fetching : 'FETCHING_WORK',
	success : 'FETCHING_WORK_SUCCESS',
	error : 'FETCHING_WORK_ERROR',
	add : 'ADD_WORK'
}
export let add_work = (data)=>{
	return {
		type : work_actions.add,
		data : data
	}
}
let handleReciveWorks = (data)=>{
	return {
		type : work_actions.success,
		data : data
	}
}
let handleErrorWorks = ()=>{
	return {
		type : work_actions.error
	}
}
let getWorks = (dispatch,url)=>{
	dispatch({
		type : work_actions.fetching
	});
	let query = str2query(url);
	axios.get(work_list_url,{
		params : query
	}).then((res)=>{
		let data = res.data;
		dispatch(handleReciveWorks(data));
	}).catch((error)=>{
			displath(handleErrorRroduct());
		});
}
let checkAvailidFetching = (state)=>{
	if(!state.works){ return true;}
	if(state.works.is_error || state.works.is_fetching){ return false;}
	return true;
}
export function fetchWorks(url=''){
	return (dispatch,getState)=>{
		let state = getState();
		let is_availid = checkAvailidFetching(state);
		if(is_availid){
			return getWorks(dispatch,url);
		}
		return Promise.resolve();
	}
} 