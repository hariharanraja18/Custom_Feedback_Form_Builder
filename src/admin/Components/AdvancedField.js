import React, { useState } from 'react';

const AdvancedField = () => {
	const [label, setLabel] = useState('');
	const [requiredToggle, setRequiredToggle] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	return (
		<div className="flex flex-col gap-3 w-72 py-2 px-5 h-screen border border-black">
			<div className="flex">
				<p>rev button</p>
				<h1>Back to Add Fields</h1>
			</div>
			<div>
				<p>label</p>
				<input onChange={(e)=> setLabel(e.target.value)} value={label} type="text" className="border-black border-b-2" />
			</div>
			<div className="flex">
				<p onClick={()=> setRequiredToggle(!requiredToggle)}>toggleBtn</p>
				<p>Required</p>
			</div>
			<div>
				<p>Error Message</p>
				<input onChange={(e)=>setErrorMessage(e.target.value)} value={errorMessage} type="text" className="border-black border-b-2" />
				<p>Helper text</p>
			</div>
			<div className="flex">
				<button className="border border-black p-2 m-2">Save</button>
				<button className="border border-black p-2 m-2">Cancel</button>
			</div>
		</div>
	);
};

export default AdvancedField;
