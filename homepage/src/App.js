import React, {useState} from "react";

import NewExpense from "./component/expense/NewExpense";
import ExpenseItem from "./component/expense/ExpenseItem";

let Dummy_Expenses = [
    {
        id:'E01',
        title: "Your Expense Name",
        amount: "price",
        date: new Date(2022, 0, 5)
    }
   
]


function App(){

    const  [Expenses,SetNewExpense] = useState(Dummy_Expenses);

    const SaveExpenseDataHandler = (SaveExpenseData)=>{
        const updateExpense =[SaveExpenseData,...Expenses]

        SetNewExpense(updateExpense);
    }

    return(
        <div>
            <NewExpense onAddExpenseData={SaveExpenseDataHandler}/>
            <ExpenseItem item={Expenses} />
        </div>
    );
}

export default App