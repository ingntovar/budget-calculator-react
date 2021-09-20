const SingleExpense = ({ amount, concept }) => {
  return (
    <>
      <li className="gastos">
        <p>
          {concept}
          <span className="gasto">{amount}</span>
        </p>
      </li>
    </>
  )
}

export default SingleExpense
