import React from "react";


import ExpenseForm from "./ExpenseForm";

const NewExpense =(props)=>{

    const ExpenseDataHandler = (ReceivedExpenseData)=>{
        const expenseData = {
            ...ReceivedExpenseData,
            id:Math.random().toString()
        }

        props.onAddExpenseData(expenseData);
    }

    return(
        <div className="new-expense_wraper">
            <ExpenseForm ExpenseDataHandle = {ExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;