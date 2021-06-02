import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Form = ({addNewExpense, setRemain, remain}) => {
  const [expensename, setExpensename] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  const addExpense = (e) => {
    e.preventDefault();
    if (quantity < 1 || isNaN(quantity) || expensename.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    const expense = {
      expensename,
      quantity,
      id: shortid.generate(),
    };
    addNewExpense(expense);
    const result = remain - quantity;
    setRemain(result);
    setExpensename('');
    setQuantity(0);
  };

  return (
    <form onSubmit={addExpense}>
      <h2> Add your expenses here</h2>
      {error ? (
        <Error message="Both fields are required or Budget is wrong" />
      ) : null}

      <div className="campo">
        <label>Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="e.g. Transport"
          value={expensename}
          onChange={(e) => setExpensename(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Spending Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="e.g. $300 usd"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add Expense"
      />
    </form>
  );
};

export default Form;
