import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";

function App() {
  // definir state
  const [budget, setBudget] = useState(0);
  const [remain, setRemain] = useState(0);
  const [showQuestion, setQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, upsetExpense] = useState(false);

  // UseEffect que actualiza el restante

  useEffect(() => {
    if (createExpense) {
      // Agregar el nuevo presupuesto
      setExpenses([...expenses, expense]);
      // Resta del presupuesto actual
      const remainingBudget = remain - expense.quantity;
      setRemain(remainingBudget);
      // Resetear a false
      upsetExpense(false);
    }
  }, [expense, createExpense, expenses, remain]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question
              setBudget={setBudget}
              setRemain={setRemain}
              setQuestion={setQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form setExpense={setExpense} upsetExpense={upsetExpense} />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetControl budget={budget} remain={remain} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
