import React,{useState} from "react";

import "./expense.css";
import ExpenseDate from "./ExpenseDate";

function Expense(props){
    // title=props.title;
    // const [title, setTitle]= useState(props.title);
    const [customTitle, setCustomeTitle]= useState(props.title);
    let clickHandler = () =>{
        // setTitle(customTitle);
    }
    let changeHandler = (event) =>{

        setCustomeTitle(event.target.value);
    }

    return(
        <div className="card">
            <div className="card-body">
                <h3 className="expense-title">{customTitle}</h3>
                <div className="expense-price">Rs./ - { props.price}</div>
                
            </div>
            <div className="card-footer">
            <ExpenseDate date={props.date} />
            </div>
            <input type="text" placeholder="Change title here" value={customTitle} onChange={changeHandler} />
            {/* <button onClick={ clickHandler }>Change Title</button> */}
        </div>
    );
}
export default Expense;