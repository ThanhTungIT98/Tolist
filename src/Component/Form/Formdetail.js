import React from 'react'

const Formdetail = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.tel}</div>
      <div>{props.age}</div>
      <div>{props.year}</div>
      <div>{props.email}</div>
    </div>
  )
}

export default Formdetail