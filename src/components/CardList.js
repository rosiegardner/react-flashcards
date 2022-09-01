import React from 'react'
import Card from './Card'

export default function CardList(props) {
  console.log(props);
  return (
    <React.Fragment>
      <h1>Card List</h1>

      <hr/>
      {props.cardList.map((card) => 
      <Card
        whenCardClicked={props.onCardSelection}
        category={card.category}
        question={card.question}
        answer={card.answer}
        id={card.id}
        key={card.id}
      />
      )}
      
    </React.Fragment>
  )
}


