// import React from 'react'
import './ExpenseItem.css'

interface ExpenseItemProps {
    title: string;
    // description: string;
    price: number;
}

const ExpenseItem = ({title,price}:ExpenseItemProps) => {
  return (
    <>
      
        <h2>{title}</h2>
        <div className='expense-item__price'>
            <span>{price}</span>
        </div>
     
    </>
  )
}

export default ExpenseItem