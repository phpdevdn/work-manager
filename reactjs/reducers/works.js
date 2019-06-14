import app from '../stores';
import {work_actions} from '../actions/works';
const works = (state = app.works, action) => {
  switch (action.type) {
    case work_actions.add : 
      let data = action.data;      
      let new_data = [...state.data,data];
      return Object.assign({},state,{data:new_data});
  	case work_actions.fetching :
  		return Object.assign({},state,{isFetching:true})
  	case work_actions.success : 
      let args = {
        isFetching:false,
        data:action.data,
      };
  		return Object.assign({},state,args);
  	case work_actions.error :	
  		return Object.assign({},state,{error:true});		
    default:
      return state
  }
}

export default works