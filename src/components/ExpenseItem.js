import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
export default function ExpenseItem(props) {
  // const expenseDate = new Date(2023, 2, 28)
  // const expenseTitle = ' Car Insurance'



  return (
    
      <Card className="expense-item">
       <ExpenseDate date ={props.date}/>
        <div className="expense-item__descripton">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
   
  );
}
