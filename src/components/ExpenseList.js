import React from 'react';
import ExpenseItem from './ExpenseItem';
import { MdDeleteForever } from "react-icons/md";

export default function ExpenseList({expenses, clearItems,deleteItem, editItem}) {

    return (
        <>
            <ul className='list'>
                {expenses.map(expense =>
                <ExpenseItem expense={expense} deleteItem={deleteItem} editItem={editItem} />)}
            </ul>
            {expenses.length > 1 && <button type='button' className='btn' onClick={clearItems}>
                Clear all
                <MdDeleteForever className='btn-icon' />
            </button>}

        </>
    )
}
