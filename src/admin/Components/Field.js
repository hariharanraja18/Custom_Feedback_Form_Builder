import React from 'react';
import add from '../assets/images/add.png';
import textarea from '../assets/images/Textarea.png';
const Field = ({ setShowAdvancedField }) => {
	const inputType = [
		'Textarea',
		'Numeric rating',
		'Star rating',
		'Smiley rating',
		'Single input line',
		'Radio button',
		'Categories',
	];
	return (
		<div className="flex flex-col gap-3 w-72 py-2 px-5 h-screen border border-black">
			<h1 className="font-bold">Add fields</h1>
			{inputType.map((input) => {
				return (
					<div className="flex w-full">
						<div className='flex flex-1'>
							<img src={textarea} alt="" />
							<h3 className="">{input}</h3>
						</div>
						<button onClick={setShowAdvancedField}>
							<img src={add} alt="add-btn" />
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Field;
