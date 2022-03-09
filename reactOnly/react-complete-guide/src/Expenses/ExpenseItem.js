import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../shared/Card';

import './ExpenseItem.css';

function ExpenseItem({ date, title, items }) {
	const [title2, settitle] = useState(title);

	const clickHandler = () => {
		settitle('Updated');
		console.log(title2);
	};

	return (
		<Card className='expense-item'>
			<ExpenseDate date={date} />
			<div className='expense-item__description'>
				<h2>{title2}</h2>
				<div className='expense-item__price'>{items}</div>
			</div>

			<button onClick={clickHandler}> Change Title</button>
		</Card>
	);
}

export default ExpenseItem;
