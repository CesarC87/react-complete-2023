// import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import {expenses} from '../../data/expenses'
import './Expenses.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../Card/Card'


const Expenses = () => {
  console.log(expenses)
  return (
    <div className='expenses'>
        {
      expenses.map( item => {
        return (
          <Card className='expense-item'>
            <ExpenseDate date={item.date}/>
            <ExpenseItem title={item.title} price={item.amount}/>
          </Card>
        )
      })
    }
    </div>
  )
}

export default Expenses