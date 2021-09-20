import React, { useState } from "react"
import Message from "./Message"

const Initial = ({ setBudget, setRemain }) => {
  const [input, setInput] = useState()
  const [error, setError] = useState(false)

  const handleInput = (e) => {
    setInput(parseInt(e.target.value))
  }

  const handleForm = (e) => {
    e.preventDefault()

    if (isNaN(input) || input <= 0) {
      setError(true)
    } else {
      setError(false)
      setBudget(input)
      setRemain(input)
    }
  }

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      <form onSubmit={handleForm}>
        {error ? <Message messaLine={"El precupuesto es incorrecto"} /> : null}
        <input type="number" className="u-full-width" placeholder="Coloca tu presupuesto" onChange={handleInput} />
        <input type="submit" className="button-primary u-full-width" value="Definir presupuesto" />
      </form>
    </>
  )
}

export default Initial
