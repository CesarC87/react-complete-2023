// import React from 'react'

interface ExpenseDateProps {
    date: any
}

const ExpenseDate = ({date}:ExpenseDateProps) => {
    const month = date.toLocaleString('en-US', { month: 'long'})
    const year = date.toLocaleString()
    const day = date.getFullYear('en-US', { day: '2-digit'})
  return (
    <div className='expense-date'>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
        
    </div>
  )
}

export default ExpenseDate