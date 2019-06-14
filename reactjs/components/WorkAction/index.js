import React from 'react'
import { connect } from 'react-redux';
//
import WorkAction from './WorkAction';
import {show_popup_add} from 'src/actions/popup';
let mapStateToProp = (state)=>{
	return {
	}
}
let mapDispathToProp = (dispath)=>{
	return {
		show : ()=>dispath(show_popup_add())
	}
}
export default connect(
	mapStateToProp,
	mapDispathToProp
)(WorkAction);