import React from 'react';

import './ExpenseDate.css';

function ExpenseDate({date}) {
	const Month = date.toLocaleString('en-US', { month: 'long' });
	const Day = date.toLocaleString('en-US', { day: '2-digit' });
	const Year = date.getFullYear();
	return (
		<div className='expense-date'>
			<div className='expense-date__month'>{Month}</div>
			<div className='expense-date__day'>{Day}</div>
			<div className='expense-date__year'>{Year}</div>
		</div>
	);
}

export default ExpenseDate;
