import React, { useState } from 'react';

import symbol from '../assets/images/symbol.png';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	const [isOpen, SetIsOpen] = useState(false);
	const [formName, SetFormName] = useState('Generic Website Rating');
	return (
		<div>
			<div>
				<button onClick={() => SetIsOpen(true)} className="cursor-pointer">
					<div className="w-64 h-72 ml-5 mt-5 gap-3 border border-black flex flex-col items-center justify-center">
						<img src={symbol} alt="add symbol" />
						<h1>New Form</h1>
					</div>
				</button>
			</div>

			{isOpen && (
				<div className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-50 z-50">
					<div className="border border-black w-1/5 m-3 p-5 flex flex-col bg-white gap-2">
						<h1 className="text-xl font-semibold">Create Feedback Form</h1>
						<input
							className="border-b-2 border-gray-400 w-full text-lg p-1"
							type="text"
							value={formName}
							onChange={(e) => SetFormName(e.target.value)}
						/>
						<div className="mt-2 flex justify-end gap-2">
							<Link to={'/createForm'} state={{formName}}>
								<button className="border border-black p-1">Create</button>
							</Link>
							<button
								onClick={() => SetIsOpen(false)}
								className="border border-black p-1">
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
