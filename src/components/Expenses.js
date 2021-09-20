import SingleExpense from "./SingleExpense"
import { changeClassRemain } from "../helpers"

const Expenses = ({ budget, remain, expenses }) => {
  return (
    <>
      <div className="gastos-realizados">
        <h2>Listado</h2>

        {expenses.map((expense) => {
          return <SingleExpense key={expense.id} amount={expense.amount} concept={expense.concept} />
        })}
      </div>
      <div className="alert alert-primary">Presupuesto: {budget}</div>
      <div className={changeClassRemain(remain, budget)}>Restante: {remain}</div>
    </>
  )
}

export default Expenses
