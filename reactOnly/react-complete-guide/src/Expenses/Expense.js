import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter'
import Card from '../shared/Card';
import ExpenseItem from './ExpenseItem';

import './Expenses.css'

function Expense({items}) {

	const [filterYear, setFilterYear] = useState('2020');

	const filterChangeHandler =(selectedYear) => {
		setFilterYear(selectedYear);
	}
	return (
		<div>
	
		<Card className='expenses'>
		<ExpensesFilter selected = {filterYear} onChangeFilter={filterChangeHandler}  />
			<ExpenseItem
				title={items[0].title}
				items={items[0].amount}
				date={items[0].date}
				
			/>
			<ExpenseItem
				title={items[1].title}
				items={items[1].amount}
				date={items[1].date}
			/>
			<ExpenseItem
				title={items[2].title}
				items={items[2].amount}
				date={items[2].date}
			/>
			<ExpenseItem
				title={items[3].title}
				items={items[3].amount}
				date={items[3].date}
			/>
		</Card>
		</div>
	);
}

export default Expense;
