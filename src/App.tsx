// import { useState } from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
// import ExpensesFilter from './components/ExpensesFilter/ExpensesFilter'
import NewExpense from './components/NewExpense/NewExpense'
import {expenses} from './data/expenses'

interface Expense {
  id: string,
  title: string,
  amount:number,
  date: Date,
}

function App() {

  const [ expensesList, setExpensesList ] = useState(expenses)

  const addExpenseHandler = (expense:Expense) => {
    setExpensesList( prev => [...prev, expense])
  };

  useEffect(() => {
    console.log('expensesList', expensesList)
  
    
  }, [expensesList])
  

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expensesList={expensesList}/>
    </>
  )
}

export default App
