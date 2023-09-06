// import { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import ExpensesFilter from './components/ExpensesFilter/ExpensesFilter'
import NewExpense from './components/NewExpense/NewExpense'

function App() {

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <>
      <ExpensesFilter/>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses/>
    </>
  )
}

export default App
