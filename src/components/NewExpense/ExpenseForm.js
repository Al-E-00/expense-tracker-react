import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //const [enteredTitle, setEnteredTitle] = useState("");
  //const [enteredPrice, setEnteredPrice] = useState("");
  //const [enteredDate, setEnteredData] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredPrice: "",
    enteredData: "",
  });

  const titleChangeHandler = (event) => {
    //setEnteredTitle(event.target.value);

    //this method can sometimes lead to errors
    /* setUserInput({
      ...userInput,
      enteredTitle: event.data.value,
    }); */

    //this is the correct method to hadle previous state
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.title };
    });
  };

  const amountChangeHandler = (event) => {
    //setEnteredPrice(event.target.value);

    //this method can sometimes lead to errors
    /* setUserInput({
      ...userInput,
      enteredPrice: event.data.value,
    }); */

    //this is the correct method to hadle previous state
    setUserInput((prevState) => {
      return { ...prevState, enteredPrice: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    //setEnteredData(event.target.value);

    //this method can sometimes lead to errors
    /*  setUserInput({
      ...userInput,
      enteredData: event.data.value,
    }); */

    //this is the correct method to hadle previous state
    setUserInput((prevState) => {
      return { ...prevState, enteredData: event.target.data };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
