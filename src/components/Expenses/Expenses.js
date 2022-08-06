import React, { useState } from 'react'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';
import "./Expenses.css";

function Expenses({ data }) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = data.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        <div className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList data={filteredExpenses}/>

        </div>
    )
}

export default Expenses