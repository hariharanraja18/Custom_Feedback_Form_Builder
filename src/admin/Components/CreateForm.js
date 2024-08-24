import React from 'react';
import add from '../assets/images/add.png'
import textarea from '../assets/images/Textarea.png'
const CreateForm = () => {
	return (
		<div className="flex ">
			<form className="w-3/12 h-96 border border-black mx-auto my-2">
				<div className="h-7 flex">
					<h1>Generic need to change into dynamic</h1>
				</div>
			</form>
			<div className="flex flex-col gap-3 w-60 py-2 px-5 h-screen border border-black">
				<h1 className="font-bold">Add fields</h1>
				<div className="flex w-full">
					<img src={textarea} alt="" />
					<h3 className="flex-grow">Textarea</h3>
					<button >
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
		</div>
	);
};

export default CreateForm;
