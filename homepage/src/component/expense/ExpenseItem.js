import React from "react";

import Expense from "./Expense";

function ExpenseItem(props){
    return(
        <div>
            {
                props.item.map(
                    expense =>(
                        <Expense
                            date ={expense.date}
                            title = {expense.title}
                            price = {expense.amount}>
        
                        </Expense>
                    )
                )
            }

        </div>
    );
}

export default ExpenseItem;