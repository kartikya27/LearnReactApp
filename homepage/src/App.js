import Expense from "./component/expense/Expense";

function App(){
    // let expenseDate = new Date(2021, 2, 14);
    // let expenseTitle = "food expense";
    // let expensePrice = 100;
    let ExpenseItem = [
        {
            id:'E01',
            title: "Car EMI",
            amount: 5110,
            date: new Date(2021, 0, 5)
        },
        {
            id:'E02',
            title: "Phone EMI",
            amount: 1399,
            date: new Date(2021, 0, 2)
        },
        {
            id:'E03',
            title: "Phone Bills",
            amount: 2000,
            date: new Date(2021, 0, 10)
        }
    ]

    return(
        <div>
            <Expense
                date ={ExpenseItem[0].date}
                title = {ExpenseItem[0].title}
                price = {ExpenseItem[0].amount}>

            </Expense>
            <Expense
                date ={ExpenseItem[1].date}
                title = {ExpenseItem[1].title}
                price = {ExpenseItem[1].amount}>

            </Expense>
            <Expense
                date ={ExpenseItem[2].date}
                title = {ExpenseItem[2].title}
                price = {ExpenseItem[2].amount}>

            </Expense>
        </div>
    );
}

export default App