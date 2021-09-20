import React, { useState, useEffect } from "react"
import Initial from "./components/Initial"
import MainForm from "./components/MainForm"
import Expenses from "./components/Expenses"

function App() {
  const [budget, setBudget] = useState(0)
  const [remain, setRemain] = useState(0)
  const [expenses, setExpenses] = useState([])
  const [singleExpense, setSingleExpense] = useState(0)
  const [isExpenseSent, setIsExpenseSent] = useState(false)

  useEffect(() => {
    if (isExpenseSent) {
      setRemain(remain - singleExpense)
      setIsExpenseSent(false)
    }
  }, [isExpenseSent, remain, singleExpense])

  return (
    <>
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>
          <div className="contenido-principal contenido">
            {budget === 0 ? (
              <Initial setBudget={setBudget} setRemain={setRemain} />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <MainForm setExpenses={setExpenses} setSingleExpense={setSingleExpense} setIsExpenseSent={setIsExpenseSent} remain={remain} setRemain={setRemain} expenses={expenses} setExpenses={setExpenses} />
                </div>
                <div className="one-half column">
                  <Expenses budget={budget} remain={remain} expenses={expenses} setRemain={setRemain} />
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </>
  )
}

export default App
