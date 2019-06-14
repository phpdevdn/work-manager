import React from 'react';
import PropTypes from 'prop-types';
class DateComponent extends React.Component {
	render() {
		return (
			<div className="fr-row">
				{this.props.label ? (<label>{this.props.label}</label>):''}				
				<input 
					type="date"
					className="fr-txt" 
					value={this.props.value} 
					onChange={this.props.onChange}
					name={this.props.name} 
					/>
			</div>
		);
	}
}
DateComponent.propTypes = {
	name: PropTypes.string,
};
export default DateComponent;
