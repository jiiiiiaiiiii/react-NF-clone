import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
	const navigate = useNavigate();
	const onAboutClik = () => {
		navigate('/about');
	}
	return (
		<header>
			<ul>
				<li>
					<Link to={'/'}>Home</Link>
				</li>
				<li>
					<button onClick={onAboutClik}>About</button>
				</li>
			</ul>
			</header>
	)
}

export default Header;