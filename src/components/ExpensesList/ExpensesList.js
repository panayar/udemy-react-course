import React from 'react'
import "./ExpensesList.css"
import ExpenseItem from '../ExpenseItem/ExpenseItem'


function ExpensesList({ data }) {

    if (data.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>
                Found no expenses
            </h2>
        )
    }


    return (
        <>

            <div className='expenses-list'>
                {
                    data.map(expense => {
                        return <ExpenseItem key={expense.id} expenseAmount={expense.amount}
                            expenseTitle={expense.title} expenseDate={expense.date} />

                    })
                }
            </div>

        </>
    )
}

export default ExpensesList