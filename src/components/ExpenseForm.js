import React from 'react'
import { MdSend } from "react-icons/md";

export default function ExpenseForm({charge, amount, edit, handleSubmit, handleCharge, handleAmount}) {
   
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-center'>
            <div className='form-group'>
                <label htmlFor="charge">Charge</label>
                <input type="text" id='charge' name='charge' className='form-control' onChange={handleCharge} value={charge} placeholder='e.g. House Rent'/>
            </div>
            <div className='form-group'>
                <label htmlFor="amount">Amount</label>
                <input type="number" id='amount' className='form-control' onChange={handleAmount} value={amount} placeholder='e.g. 500'/>
            </div>
            </div>
            <button type='submit' className='btn'>
                {edit ? 'edit' : 'submit' }
                 <MdSend className='btn-icon'/>
            </button>
            
        </form>
    )
}
