import React, { useState } from 'react'
import "./ExpenseForm.css"

function ExpenseForm({onSaveExpenseData, onCancelButton}) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");



    const titleChangehandler = (event) => {
        setTitle(event.target.value);
    }

    const amountChangehandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangehandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date),
          };

        onSaveExpenseData(expenseData);
        //clear inputs after submit
        setAmount("")
        setDate("")
        setTitle("")

        onCancelButton()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangehandler}
                        value={title} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={amount} min="0.01" step="0.01" onChange={amountChangehandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" value={date} max="2022-12-31" onChange={dateChangehandler} />
                </div>
            </div>

            <div className='new-expense__controls'>
                <button type='button' onClick={onCancelButton} >Cancel</button>
                <button type='submit'  >Add Expense</button>
            </div>
            

        </form>
    )
}

export default ExpenseForm