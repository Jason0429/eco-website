import React from 'react';
import './Header.scss';
import Navbar from './Navbar';
import background from '../img/ocean.jpg';

function Header() {
	return (
		<div className="header">
			<Navbar />
			<div className="header-title">People Against Plastic</div>
		</div>
	);
}

export default Header;
