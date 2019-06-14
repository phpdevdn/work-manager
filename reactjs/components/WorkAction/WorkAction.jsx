import React from 'react';
import {work_status_color} from 'src/Helpers/appConfig'
class WorkAction extends React.Component {
	constructor(props) {
		super(props);
		this.handleShow = this.handleShow.bind(this);
	}
	handleShow(){
		this.props.show();
	}
	render() {
		let list_color = Object.keys(work_status_color).map((color)=>{
			let name = work_status_color[color];
			let style_span = {background:color}
			return (<li key={color}>
					<span className="color" style={style_span}></span>
					<span>{name}</span>
					</li>);
		});
		return (
			<div className="flex-contain flex-action">
				<ul className="lst_inl lst-color">
					{list_color}
				</ul>
				<nav id="actions">
					<ul className="lst_inl al_rt">
						<li>
							<button type="button" className="btn" onClick={this.handleShow}>Add</button>
						</li>
					</ul>
				</nav>				
			</div>

		);
	}
}
WorkAction.propTypes = {
}
export default WorkAction;