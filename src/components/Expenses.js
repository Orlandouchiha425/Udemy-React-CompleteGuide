import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "./Card";
export default function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </Card>
  );
}



//or you can do this


// import ExpenseItem from "./ExpenseItem";
// import "./Expenses.css"
// export default function Expenses(props) {
//   return (
//     <div className="expenses">
//       <ExpenseItem
//         title={props.expenses[0].title}
//         amount={props.expenses[0].amount}
//         date={props.expenses[0].date}
//       />
//       <ExpenseItem
//         title={props.expenses[1].title}
//         amount={props.expenses[1].amount}
//         date={props.expenses[1].date}
//       />
//       <ExpenseItem
//         title={props.expenses[2].title}
//         amount={props.expenses[2].amount}
//         date={props.expenses[2].date}
//       />
//     </div>
//   );
// }