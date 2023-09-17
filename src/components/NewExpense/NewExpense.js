import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ addExpenseData }) => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false)

  const toggleisFormDisplayed = () => {
    setIsFormDisplayed(!isFormDisplayed)
  }

  const saveExpenseDataHandler = (expenseData) => {
    const data = {
      id: Math.random().toString(),
      ...expenseData
    }
    console.log('NewExpense.js data: ', data)
    addExpenseData(data)
  }

  return (
    <div className='new-expense'>
      {isFormDisplayed
        ?
        <ExpenseForm onSave={saveExpenseDataHandler} toggleisFormDisplayed={toggleisFormDisplayed} />
        :
        <button onClick={toggleisFormDisplayed}>Add new expense</button>
      }
    </div>
  )
}

export default NewExpense