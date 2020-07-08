import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function ExpenseItem({expense, deleteItem,editItem}) {
    const {charge,amount,id} = expense;
    return (
        <li className='item'>
            <div className='info'>
                <span className='expense'>{charge}</span>
                <span className='amount'>€ {amount}</span>
            </div>
            <div>
                <button className='btn-icon edit-btn' onClick={() => editItem(id)}><MdEdit/></button>
                <button className='btn-icon clear-btn' onClick={() => deleteItem(id)}><MdDelete/></button>
            </div>
        </li>
    )
}
