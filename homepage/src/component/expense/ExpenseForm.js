import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm =(props)=>{

    const [enterdTitle, setEnteredTitle] = useState('')
    const [enterdAmount, setEnteredAmount] = useState('')
    const [enterdDate, setEnteredDate] = useState('')

    const changeTitle = (event) =>{
        setEnteredTitle(event.target.value)
        // console.log(event.target.value)
    }
    const changeAmount = (event) =>{
        setEnteredAmount(event.target.value)
    }
    const changeDate = (event) =>{
        setEnteredDate(event.target.value)
    }
    const submitForm =(event) =>{
        event.preventDefault();
        const expenseData = {
            title:enterdTitle,
            amount:enterdAmount,
            date:new Date(enterdDate)
        }
        props.ExpenseDataHandle(expenseData);
        
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <div className="expense-form_wraper">
                    <div className="form_controls">
                        <label>Title</label>
                        <input type="text" value={enterdTitle} className="fomr_input" onChange={changeTitle} />
                    </div>
                    <div className="form_controls">
                        <label>Amount</label>
                        <input type="number" value={enterdAmount} min="0.01" step="0.01" className="fomr_input" onChange={changeAmount} />
                    </div>
                    <div className="form_controls">
                        <label>Date</label>
                        <input type="date" value={enterdDate} className="fomr_input" onChange={changeDate} />
                    </div>
                    <div className="form_controls">
                        
                        <button type="submit" className="btn" >Add Expense</button>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default ExpenseForm;