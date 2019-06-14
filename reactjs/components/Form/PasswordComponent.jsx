import React from 'react';
import PropTypes from 'prop-types';
class Password extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="fr-row">
				<label htmlFor={this.props.name}>{this.props.label}</label>
				<input type="password" value={this.props.value} onChange={this.props.onChange} name={this.props.name} className="fr-txt"/>
			</div>
		);
	}
}
Password.propTypes = {
	name: PropTypes.string,
};
export default Password;
