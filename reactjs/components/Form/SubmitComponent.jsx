import React from 'react';
import PropTypes from 'prop-types';
class Submit extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="fr-row alrt">
				<button type="submit" name="submit" value="submit" className="btn btn-primary">{this.props.value}</button>
			</div>
		);
	}
}
Submit.propTypes = {
	name: PropTypes.string,
};
export default Submit;
