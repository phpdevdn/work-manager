import React from 'react';
import appConfig from 'src/Helpers/appConfig'
import {app_url} from 'src/Helpers/links'
class Header extends React.Component {
	constructor(props) {
		super(props);
		this.site_title = appConfig.site_name;
		this.app_base_url = appConfig.app_url;
	}
	render() {
		return (
			<header id="header">
				<div className="container">
					<div className="logo">
						<h1 className="logo-tit">
							<a className="logo-lk" href={this.app_base_url} >{this.site_title}</a>
						</h1>
					</div>						
				</div>			
			</header>
		);
	}
}
Header.propTypes = {
}
export default Header;