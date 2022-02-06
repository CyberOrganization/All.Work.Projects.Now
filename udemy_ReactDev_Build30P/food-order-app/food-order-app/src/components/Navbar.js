import React, {useState} from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

// Apply css
import '../styles/Navbar.css';

function Navbar() {


    //Show Navbar State
    const [showLinks, setShowLinks] = useState(false);
    const toggleNavbar = () => {
        setShowLinks(!showLinks);
    }


	return (
		<div className='navbar'>
			<div className='leftSide' id={showLinks ? "open" : "close"}>
				<img src={logo} alt='logo' />

				<div className='hiddenLinks'>
					<Link to='/*'> Home</Link>
					<Link to='/*'> Menu</Link>
					<Link to='/*'> About</Link>
					<Link to='/*'> Contact</Link>
				</div>
			</div>
			<div className='rightSide'>
				<Link to='/*'> Home</Link>
				<Link to='/*'> Menu</Link>
				<Link to='/*'> About</Link>
				<Link to='/*'> Contact</Link>
				<button onClick={toggleNavbar}>
					<ReorderIcon />
				</button>
			</div>
		</div>
	);
}

export default Navbar;
