import React, { useState } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import ControlBudget from "./components/ControlBudget";

function App() {
  const [budget, setBudget] = useState(0);
  const [remain, setRemain] = useState(0);
  const [showquestion, setQuestion] = useState(true);
  const [expenses, setExpense] = useState([]);
 

  const addNewExpense = expense => {
    setExpense([
      ...expenses,
      expense
    ])

  }


  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
        <div className="contenido-principal contenido">
          {showquestion ? (
            <Question
              setBudget={setBudget}
              setRemain={setRemain}
              setQuestion={setQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form 
                  addNewExpense={addNewExpense}
                  setRemain={setRemain}
                  remain={remain}
                />
              </div>
              <div className="one-half column">
                <List 
                  expenses={expenses}
                />
                <ControlBudget 
                  budget={budget}
                  remain={remain}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
