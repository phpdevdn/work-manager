import React from 'react'
import { connect } from 'react-redux';
//
import Calendar from './Calendar';
import {fetchWorks} from 'src/actions/works'
let mapStateToProp = (state)=>{
	return {
		works : state.works.data
	}
}
let mapDispathToProp = (dispatch)=>{
	return {
		fetchWorks : (url)=>{dispatch(fetchWorks(url));}
	}
}
export default connect(
	mapStateToProp,
	mapDispathToProp
)(Calendar);