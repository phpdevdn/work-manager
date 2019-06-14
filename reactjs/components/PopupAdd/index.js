import React from 'react'
import { connect } from 'react-redux';
//
import Popup from './Popup';
import {close_popup_add} from 'src/actions/popup'
import {add_work} from 'src/actions/works'
let mapStateToProp = (state)=>{
	return {
		popup :state.popup
	}
}
let mapDispathToProp = (dispatch)=>{
	return {
		close : ()=>dispatch(close_popup_add()),
		add_work : (data)=>dispatch(add_work(data))
	}
}
export default connect(
	mapStateToProp,
	mapDispathToProp
)(Popup);