import "./expense.css";

function Expense(props){
    
        const month = props.date?.toLocaleString("en-US", { month: "long" });
        const day = props.date?.toLocaleString("en-US", { day: "2-digit" });
        const year = props.date?.getFullYear();
    
    return(
        <div className="card">
            <div className="card-body">
                <h3 className="expense-title">{props.title}</h3>
                <div className="expense-price">Rs./ - { props.price}</div>
                
            </div>
            <div className="card-footer">
            <div className="expense-date">
                <span>{day}, </span>
                <span>{month} </span>
                <span>{year}</span>  
            </div>
            </div>
        </div>
    );
}
export default Expense;