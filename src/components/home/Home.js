import React, { Component } from 'react';
import { simpleAction } from '../../redux/actions/action-creators.js'

class Home extends Component {

	simpleAction = (event) => {
   		this.props.simpleAction();
  	}
	render() {
		return (
			<div className="content">
				<span onClick={this.simpleAction}>Home</span>
			</div>
		);
	}
}

export default Home;