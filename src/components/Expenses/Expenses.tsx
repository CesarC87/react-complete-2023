// import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
// import {expenses} from '../../data/expenses'
import './Expenses.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../Card/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import { useState } from 'react';

interface ExpensesList {
  expensesList: {
    id: string;
    title: string;
    amount: number;
    date: Date;
}[]
}

const Expenses = ({expensesList}:ExpensesList) => {
  const [ year, setYear ] = useState(null)
  // const [ expensesList, setExpenses ] = useState(expenses)
  const filteredExpenses = expensesList.filter( exp => exp.date.getFullYear().toString() === year)
  return (
    <div className='expenses'>
      <ExpensesFilter setYear={setYear}/>
        {
      filteredExpenses.map( (item:any) => {       
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