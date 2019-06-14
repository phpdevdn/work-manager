import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Calendar from './../Calendar'
import PopupAdd from './../PopupAdd'
import WorkAction from './../WorkAction'
class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="layout">
				<Header/>
				<main id="main">
				<section className="wrap">
					<div className="container">
						<WorkAction/>
						<Calendar/>
					</div>
				</section>				
				</main>
				<Footer/>
				<PopupAdd/>
			</div>
		);
	}
}
App.propTypes = {
}
export default App;
