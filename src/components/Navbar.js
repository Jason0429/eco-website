import React from 'react';
import './Navbar.scss';

function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar-wrapper">
				{/* <h1 className="navbar-logo">People Against Plastic</h1> */}
				<div className="navbar-links">
					<a href="" className="navbar-link">
						About
					</a>
					<a href="" className="navbar-link">
						Contact
					</a>
					<a href="" className="navbar-link">
						Polls
					</a>
					<a href="" className="navbar-btn">
						Sign In
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
