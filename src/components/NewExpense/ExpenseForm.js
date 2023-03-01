import React from "react";

function ExpenseForm() {
  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" /> 
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
