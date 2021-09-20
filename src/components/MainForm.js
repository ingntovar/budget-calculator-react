import React, { useState } from "react"
import Message from "./Message"
import { v4 as uuidv4 } from "uuid"

const MainForm = ({ setSingleExpense, setIsExpenseSent, setExpenses }) => {
  const [formBudget, setFormBudget] = useState({
    concept: "",
    amount: "",
  })
  const [error, setError] = useState(false)

  const inputHandler = (e) => {
    setFormBudget({
      ...formBudget,
      [e.target.name]: e.target.value,
    })
  }
  const handlerExpenses = (e) => {
    e.preventDefault()
    if (formBudget.concept === "" || formBudget.amount === "") {
      setError(true)
    } else {
      setError(false)
      formBudget.id = uuidv4()
      setIsExpenseSent(true)
      setExpenses((prev) => prev.concat(formBudget))
      setSingleExpense(parseInt(formBudget.amount))
    }
  }

  return (
    <>
      <form onSubmit={handlerExpenses}>
        <h2>Agrega tus gastos</h2>
        {error ? <Message messaLine={"Los campos deben ser diligenciados"} /> : null}
        <div className="campo">
          <label>Nombre del gasto</label>
          <input name="concept" type="text" className="u-full-width" placeholder="Ej. Transporte" onChange={inputHandler} />
        </div>
        <div className="campo">
          <label>Cantidad de Gasto</label>
          <input name="amount" type="number" className="u-full-width" placeholder="Ej. 300" onChange={inputHandler} />
        </div>
        <input type="submit" className="button-primary u-full-width" value="Agregar Gasto" />
      </form>
    </>
  )
}

export default MainForm
