import React from 'react';
import PropTypes from 'prop-types';
class Textarea extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="fr-row">
				<label>{this.props.label}</label>
				<textarea name={this.props.name} 
					className="fr-area" rows="5"
					onChange = {this.props.onChange}
					value={this.props.children}
					/>
			</div>
		);
	}
}
Textarea.propTypes = {
	name: PropTypes.string,
};
export default Textarea;
