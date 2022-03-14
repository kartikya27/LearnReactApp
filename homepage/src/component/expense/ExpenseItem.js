import React from "react";

import Expense from "./Expense";

function ExpenseItem(props){
    return(
        <div>
            <Expense
                date ={props.item[0].date}
                title = {props.item[0].title}
                price = {props.item[0].amount}>

            </Expense>
            <Expense
                date ={props.item[1].date}
                title = {props.item[1].title}
                price = {props.item[1].amount}>

            </Expense>
            <Expense
                date ={props.item[2].date}
                title = {props.item[2].title}
                price = {props.item[2].amount}>

            </Expense>
        </div>
    );
}

export default ExpenseItem;