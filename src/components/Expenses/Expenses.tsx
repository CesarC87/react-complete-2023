// import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import {expenses} from '../../data/expenses'
import './Expenses.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../Card/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import { useState } from 'react';


const Expenses = () => {
  const [ year, setYear ] = useState(null)
  console.log('asd ear', year)
  return (
    <div className='expenses'>
      <ExpensesFilter setYear={setYear}/>
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