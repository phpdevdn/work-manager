import React from 'react';
import PropTypes from 'prop-types';
class InputComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="fr-row">
				{this.props.label ? (<label>{this.props.label}</label>):''}				
				<input 
					type={this.props.type ? this.props.type : 'text'} 
					value={this.props.value} 
					onChange={this.props.onChange} 
					name={this.props.name} 
					className="fr-txt"
					/>
			</div>
		);
	}
}
InputComponent.propTypes = {
	name: PropTypes.string,
};
export default InputComponent;
