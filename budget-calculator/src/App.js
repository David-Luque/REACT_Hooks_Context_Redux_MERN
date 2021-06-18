import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetController from './components/BudgetController';

function App() {

  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  //useEffect for update the remaining
  useEffect(() => {
    if(createExpense){
      setExpenses([...expenses, expense]);

      //substract from remaining budget
      const remaininBudget = remaining - expense.quantity
      setRemaining(remaininBudget)

      setCreateExpense(true);
    }
  }, [expense, createExpense, expenses, remaining])

  

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
        <div className="primary-content content">
          {showQuestion 
            ? (
              <Question
                setBudget={setBudget}
                setRemaining={setRemaining}
                setShowQuestion={setShowQuestion}
              />
            )
            : (
              <div className="row">
                <div className="one-half column">
                  <Form
                    setExpense={setExpense}
                    setCreateExpense={setCreateExpense}
                  />
                </div>
                <div className="one-half column">
                  <List 
                    expenses={expenses}
                  />
                  <BudgetController
                    budget={budget}
                    remaining={remaining}
                  />
                </div>
              </div>
            )
          }
          
        </div>
      </header>
    </div>
  );
}

export default App;
