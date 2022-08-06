import React from 'react'
import "./ExpenseItem.css"
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import { useState } from "react"

function ExpenseItem({ expenseDate, expenseTitle, expenseAmount }) {

    const [title, setTitle] = useState(expenseTitle);

    const clickHandler = () => {
        let newTitle = prompt("Enter new title");
        console.log(newTitle);
        setTitle(newTitle);
    }

    return (
        <div className='expense-item'>
            <ExpenseDate expenseDate={expenseDate} />
            <div className='expense-item__description'>
                <h2>{title || expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount}</div>
                <button onClick={clickHandler}>Change title!</button>
            </div>
        </div>
    )
}

export default ExpenseItem