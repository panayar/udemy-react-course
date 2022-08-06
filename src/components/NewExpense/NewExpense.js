import React, { useState } from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'

function NewExpense({ onAddExpense }) {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.floor(Math.random() * 100).toString()
    }
    onAddExpense(expenseData);
  }


  const startEditingHandler = () => {
    setIsEditing(true);
  }


  const onCancelButton = () => {
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
      {/* onSaveExpenseData is for saving the data that is submitted from the form */}
      {
        !isEditing && <button onClick={startEditingHandler}>Add New Expense</button>
      }
      {
        isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelButton={onCancelButton}/>
      }

    </div>
  )
}

export default NewExpense