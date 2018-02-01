import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header>
		<div className="logo-text">Cash Tracker</div>
		<nav>
			<ul>
				<li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
				<li><NavLink to="/settings" activeClassName="is-active">Settings</NavLink></li>
			</ul>
		</nav>
	</header>
);

export default Header;