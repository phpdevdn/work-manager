import React from 'react';
import PropTypes from 'prop-types';
class InputMail extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="fr-row">
				<label htmlFor={this.props.name}>{this.props.label}</label>
				<input type="email" 
				value={this.props.value} 
				name={this.props.name} 
				onChange = {this.props.onChange}
				className="fr-txt"
				/>
			</div>
		);
	}
}
InputMail.propTypes = {
	name: PropTypes.string,
};
export default InputMail;
