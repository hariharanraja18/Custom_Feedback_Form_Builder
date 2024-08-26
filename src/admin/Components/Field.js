import React from 'react'
import add from '../assets/images/add.png';
import textarea from '../assets/images/Textarea.png';
const Field = ({ setShowAdvancedField }) => {
	return (
		<div className="flex flex-col gap-3 w-72 py-2 px-5 h-screen border border-black">
			<h1 className="font-bold">Add fields</h1>
			<div className="flex w-full">
				<img src={textarea} alt="" />
				<h3 className="flex-grow">Textarea</h3>
				<button onClick={setShowAdvancedField}>
					<img className="" src={add} alt="add-btn" />
				</button>
			</div>
			<div className="flex w-full">
				<img src={textarea} alt="" />
				<h3 className="flex-grow">Textarea</h3>
				<img className="" src={add} alt="add-btn" />
			</div>
			<div className="flex w-full">
				<img src={textarea} alt="" />
				<h3 className="flex-grow">Textarea</h3>
				<img className="" src={add} alt="add-btn" />
			</div>
			<div className="flex w-full">
				<img src={textarea} alt="" />
				<h3 className="flex-grow">Textarea</h3>
				<img className="" src={add} alt="add-btn" />
			</div>
			<div className="flex w-full">
				<img src={textarea} alt="" />
				<h3 className="flex-grow">Textarea</h3>
				<img className="" src={add} alt="add-btn" />
			</div>
			<div className="flex w-full">
				<img src={textarea} alt="" />
				<h3 className="flex-grow">Textarea</h3>
				<img className="" src={add} alt="add-btn" />
			</div>
			<div className="flex w-full">
				<img src={textarea} alt="" />
				<h3 className="flex-grow">Textarea</h3>
				<img className="" src={add} alt="add-btn" />
			</div>
		</div>
	);
};

export default Field
