import React from "react";

import ExpenseItem from "./component/expense/ExpenseItem";

function App(){
    // let expenseDate = new Date(2021, 2, 14);
    // let expenseTitle = "food expense";
    // let expensePrice = 100;
    let Expenses = [
        {
            id:'E01',
            title: "Car EMI",
            amount: 5110,
            date: new Date(2022, 0, 5)
        },
        {
            id:'E02',
            title: "Phone EMI",
            amount: 1399,
            date: new Date(2022, 0, 2)
        },
        {
            id:'E03',
            title: "Phone Recharge Bills",
            amount: 2000,
            date: new Date(2022, 0, 10)
        }
    ]

    return(
        <div>
            <ExpenseItem item={Expenses} />
        </div>
    );
}

export default App