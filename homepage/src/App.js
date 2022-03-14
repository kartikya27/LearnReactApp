import Expense from "./component/expense/Expense";

function App(){
    let expenseDate = new Date(2012, 2, 25);
    let expenseTitle = "food expense";
    let expensePrice = 100;

    return(
        <Expense
        date ={expenseDate}
        title = {expenseTitle}
        price = {expensePrice}
        ></Expense>
    );
}

export default App