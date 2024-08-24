import React from 'react'
import image6 from '../assets/images/image 6.png';
const Header = () => {
  return (
		<div>
			<div className="border border-gray-400 shadow-lg flex items-center">
				<img className="w-16 h-16" src={image6} alt="thumbs-up" />
				<h1 className="h-6 w-48 ">USER FEEDBACK</h1>
			</div>
		</div>
	);
}

export default Header;
