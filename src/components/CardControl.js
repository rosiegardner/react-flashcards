import React, { useState } from 'react';
import NewCardForm from './NewCardForm';
import CardList from './CardList';
import EditCardForm from './EditCardForm';
import CardDetail from './CardDetail';

function CardControl() {
  const [selectedCard, setSelectedCard] = useState(null);
  const[formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [editing, setEditing] = useState(false);
  const [mainCardList, setMainCardList] = useState([
    {
      category: "React",
      question: "What is React?",
      answer: "A JavaScript library",
      id: 1
    },
    {
      category: "Rails",
      question: "What is Rails?",
      answer: "A Ruby MVC Framework",
      id: 2
    },
  ]);

  const handleClick = () => {
    if (selectedCard != null) {
      setFormVisibleOnPage(false);
      setSelectedCard(null);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleDeletingCard = (id) => {
    const newMainCardList = mainCardList.filter(card => card.id !== id);
    setMainCardList(newMainCardList);
    setSelectedCard(null);
  }

  const handleEditClick = () => {
    setEditing(true)
  }

  const handleEditingCardInList = (cardToEdit) => {
    const editedMainCardList = mainCardList 
      .filter(card => card.id !== selectedCard.id)
      .concat(cardToEdit);
    setMainCardList(editedMainCardList);
    setEditing(false);
    setSelectedCard(null);

  }

  const handleAddingNewCardToList = (newCard) => {
    const newMainCardList = mainCardList.concat(newCard);
    setMainCardList(newMainCardList);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedCard = (id) => {
    const selection = mainCardList.filter(card => card.id === id)[0];
    setSelectedCard(selection);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (editing) {
    currentlyVisibleState = (
      <EditCardForm 
        card={selectedCard}
        editCard = {handleEditingCardInList} />
        )
      buttonText = 'Return to Card List';
   } else if (selectedCard != null) {
    currentlyVisibleState = (
      <CardDetail 
        card={selectedCard}
        deleteCard = {handleDeletingCard}
        editCard = {handleEditClick}
      />
    )
    buttonText = "Card List"
  } else if (formVisibleOnPage) {
    currentlyVisibleState = (
      <NewCardForm 
        addingNewCard={handleAddingNewCardToList}
      />
    )
    buttonText = "Card List"
  } else {
    currentlyVisibleState = 
    (<CardList
      onCardSelection={handleChangingSelectedCard}
      cardList={mainCardList}/>)
    buttonText = 'Add Card'
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <br/>
      <br/>
      <br/>
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}

export default CardControl;