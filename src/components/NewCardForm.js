import React from 'react'
import { v4 } from 'uuid';
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'

function NewCardForm(props) {
  function handleNewCard(event) {
    event.preventDefault();
    props.addingNewCard({
      category: event.target.category.value,
      question: event.target.question.value,
      answer: event.target.answer.value,
      id: v4(),
    });
  }


  return (
    <div>
      <h1>NewCardForm</h1>
      <ReusableForm 
        formSubmissionHandler={handleNewCard}
        buttonText='Add Card!'
      />
    </div>
  );
}

NewCardForm.propTypes = {
  addingNewCard: PropTypes.func
};

export default NewCardForm;
