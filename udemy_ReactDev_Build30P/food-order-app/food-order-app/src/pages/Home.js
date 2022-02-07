import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/banner.jpeg';

//Import CSS
import "../styles/Home.css"

function Home() {
	return (
		<div className='home' style={{ backgroundImage: `url(${banner})` }}>
			<div className='headerContainer'>
				<h1>Food Corner</h1>
				<p>INDIAN FOOD AT A CLICK.</p>
				<Link>
					<button>Order Now</button>
				</Link>

            
			</div>
		</div>
	);
}

export default Home;
