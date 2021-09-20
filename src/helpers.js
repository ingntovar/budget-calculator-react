export const changeClassRemain = (remain, budget) => {
  let classRemain

  if (remain / parseInt(budget) < 0.5 && remain > 0) {
    classRemain = "alert alert-warning"
  } else if (remain <= 0) {
    classRemain = "alert alert-danger"
  } else {
    classRemain = "alert alert-success"
  }

  return classRemain
}
