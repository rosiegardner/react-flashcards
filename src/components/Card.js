import React from 'react'

export default function Card(props) {
  return (
    <div onClick = {() => props.whenCardClicked(props.id)}>
      <h3>Category - {props.category}</h3>
      <h4>Question - {props.question}</h4>
      {/* <h4>Answer - {props.answer}</h4> */}
      <hr/>
    </div>
  )
}
