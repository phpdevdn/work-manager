import store from './../stores'
const popup = (state = store.popup, action) => {
  switch (action.type) {
  	case 'POPUP_ADD_CLOSE':
  		return Object.assign({},state,{show:false});
  	case 'POPUP_ADD_SHOW':
  		return Object.assign({},state,{show:true});
  		
    default:
      return state
  }
}

export default popup