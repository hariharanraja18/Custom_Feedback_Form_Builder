import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Field from './Field';
import AdvancedField from './AdvancedField';
const CreateForm = () => {
	const location = useLocation();
	const formName = location.state.formName;
	const [showAdvancedField,setShowAdvancedField] = useState(false);
	return (
		<div className="flex ">
			<form className="w-3/12 h-96 border border-black mx-auto my-2">
				<div className="h-7 flex">
					<h1>{formName}</h1>
				</div>
			</form>
			{!showAdvancedField && <Field setShowAdvancedField={setShowAdvancedField}/>}
			{showAdvancedField && <AdvancedField/>}
		</div>
	);
};

export default CreateForm;
