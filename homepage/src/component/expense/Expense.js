import React,{useState} from "react";

import "./expense.css";
import ExpenseDate from "./ExpenseDate";

function Expense(props){
    // // title=props.title;
    // // const [title, setTitle]= useState(props.title);
    // const [customTitle, setCustomeTitle]= useState(props.title);
    // let clickHandler = () =>{
    //     // setTitle(customTitle);
    // }
    // let changeHandler = (event) =>{
    //     setCustomeTitle(event.target.value);
    // }
    // WE ARE NOW USING INPUT FROM USER TO CREATE NEW EXPENSE CARD


    return(
        <div className="card">
            <div className="card-body">
                <h3 className="expense-title">{props.title}</h3>
                <div className="expense-price">Rs./ - { props.price}</div>
                
            </div>
            <div className="card-footer">
            <ExpenseDate date={props.date} />
            </div>
        </div>
    );
}
export default Expense;