// import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import {expenses} from '../../data/expenses'
import './Expenses.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate'


const Expenses = () => {
  console.log(expenses)
  return (
    <div className='expenses'>
        {
      expenses.map( item => {
        return (
          <div className='expense-item'>
            <ExpenseDate date={item.date}/>
            <ExpenseItem title={item.title} price={item.amount}/>
          </div>
        )
      })
    }
    </div>
  )
}

export default Expenses