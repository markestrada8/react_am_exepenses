import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'

import './ExpenseItem.css'

const ExepenseItem = ({ item }) => {

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={item.date} />
        <div className='expense-item__description'>
          <h2>{item.title}</h2>
          <div className='expense-item__price'>${item.amount}</div>
        </div>
      </Card>
    </li>
  )
}

export default ExepenseItem