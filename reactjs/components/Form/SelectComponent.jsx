import React from 'react';
import PropTypes from 'prop-types';
class SelectComponent extends React.Component {
	render() {
		let prop_options = this.props.options
		let options = [];
		Object.keys(prop_options).forEach((key,id)=>{
			let value = prop_options[key];
			options.push(<option value={key} key={id}>{value}</option>);
		})
		return (
			<div className="fr-row">
				{this.props.label ? (<label>{this.props.label}</label>):''}				
				<select name={this.props.name} 
					onChange={this.props.onChange} 
					className="fr-sel">
					{options}
				</select>	
			</div>
		);
	}
}
SelectComponent.propTypes = {
	name: PropTypes.string,
};
export default SelectComponent;
