import ExepenseItem from './ExpenseItem'
import Card from '../UI/Card'

import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = ({ items }) => {
  const [year, setYear] = useState('2022')

  const handleChange = (e) => {
    setYear(e.target.value)
  }

  const filteredExpenses = items.filter(item => item.date.getFullYear() === parseInt(year))

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter handleChange={handleChange} year={year} />
        <ExpensesChart items={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses