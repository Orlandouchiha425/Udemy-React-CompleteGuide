import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import { useState } from "react";
export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}

        />
        ))}
        {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
      </Card>
    </div>
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
