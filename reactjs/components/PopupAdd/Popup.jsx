import React from 'react'
import {Input,Submit,Select,DateInput} from 'src/components/Form'
import {work_status} from 'src/Helpers/appConfig'
import {work_add_url} from 'src/Helpers/links'
import Validation from 'src/Helpers/Validation'
import axios from 'axios'
import qs from 'qs';
class PopupAdd extends React.Component {
	constructor(props){
		super(props);
		this.work_def = {
				name :'',
				start_date :'',
				end_date : '',
				status : 'planning'
			}
		this.state = {
			work:this.work_def,
			error :[]
 		}
 		this.handleSubmit = this.handleSubmit.bind(this);
 		this.handleChange = this.handleChange.bind(this);
 		this.handleClose = this.handleClose.bind(this);
 	}
 	handleSubmit(ev){
 		ev.preventDefault();
 		let rules = {
 			name : 'required',
 			status : 'required'
 		}
 		let valid = new Validation(this.state.work,rules);
 		let error = valid.fail();
 		let error_date = this.checkDateValid();
 		if(error_date){
 			error.push(error_date);
 		}
 		if(error.length > 0){
 			alert(error.join(','));
 			return false;
 		}
 		this.request();
 		return true;
 	}
 	checkDateValid(){
 		let start_date = this.state.work.start_date;
 		let end_date = this.state.work.end_date;
 		if(start_date == '' || end_date == ''){
 			return false;
 		}
 		let start_ob = new Date(start_date);
 		let end_ob = new Date(end_date);
 		return start_ob.getTime() > end_ob.getTime() ? 'Error date !' : false; 
 	}
 	request(){
		axios({
		  method: 'post',
		  headers: { 'content-type': 'application/x-www-form-urlencoded' },
		  url: work_add_url,
		  data: qs.stringify(this.state.work)
		})
		.then(res=>{
			if(res.data.error){
				alert('Error!');
				this.props.close();
				return false;
			}
			this.props.add_work(res.data.data);
			this.setState({work:this.work_def});
			this.props.close();			
		});
 	} 	
 	handleClose(ev){
 		ev.preventDefault();
 		this.props.close();
 		return true;
 	}
 	
	handleChange(ev){
 		let value = {...this.state.work,[ev.target.name]:ev.target.value};
 		this.setState({work:value});;
	}
	render() {
		let work = this.state.work;
		let popup_cls = this.props.popup.show ? 'popup active' : 'popup';
		return (
			<div id="popup-add" className={popup_cls}>
				<div className="popup-ct">
					<button type="button" className="icon" onClick={this.handleClose}><i className="fas fa-times"></i></button>
					<form className="fr" onSubmit={this.handleSubmit}>
						<Input name="name" 
							label="Name"
							onChange={this.handleChange} 
							value={work.name}
							/>
						<div className="flex-contain flex-row">
							<DateInput name="start_date"
								label="Start date"
								onChange={this.handleChange} 
								value={work.start_date}							
							/>
							<span>-</span>
							<DateInput name="end_date"
								label="End date"
								onChange={this.handleChange} 
								value={work.end_date}							
							/>														
						</div>	

						<Select 
							name="status"
							label="Status" 
							value={work.status}
							options={work_status}
							onChange={this.handleChange}
							 />	
						<div className="al_rt">
							<Submit value="Save"/>
						</div>	
					</form>
				</div>
			</div>
		);
	}
}
PopupAdd.propTypes = {
}
export default PopupAdd;