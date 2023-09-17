import ExepenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({ filteredExpenses }) => {
  const displayContent = () => {
    return filteredExpenses.length === 0 ?
      <h2 className='expenses-list__fallback'>Found no expenses.</h2>
      :
      filteredExpenses.map(item => {
        return <ExepenseItem key={item.id} item={item} />
      })
  }

  return (
    <ul className='expenses-list'>
      {displayContent()}
    </ul>
  )
}

export default ExpensesList