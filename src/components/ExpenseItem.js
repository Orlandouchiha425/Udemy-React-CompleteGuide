import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
export default function ExpenseItem(props) {
    // const [title, setTitle] = useState(props.title);//Inside paranthesis is default value
    //title is what starts with, and setTitle is what updates to 
  // const expenseDate = new Date(2023, 2, 28)
  // const expenseTitle = ' Car Insurance'
// const clickHandler = () =>{
//     setTitle('Updated!!!')
//     console.log(title)
// }

  return (
    
      <Card className="expense-item">
       <ExpenseDate date ={props.date}/>
        <div className="expense-item__descripton">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={clickHandler}>change title</button> */}
      </Card>
   
  );
}
