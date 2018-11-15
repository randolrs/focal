import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
		<div className="nav">
			<div className="nav__left">
				<a className="nav__link">Nav</a>
			</div>
			<div className="nav__right">
				<a className="nav__link">CTA</a>
			</div>
		</div>
    );
  }
}

export default Nav;