import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'

function EditCardForm(props) {
  const {card } = props;

  function handleEditCardForm(event) {
    event.preventDefault();
    props.editCard({
      category: event.target.category.value,
      question: event.target.question.value,
      answer: event.target.answer.value,
      id: card.id
    });
  }
  return (
    <React.Fragment>
    <div>
      <h1>EditCardForm</h1>
      <ReusableForm 
        formSubmissionHandler={handleEditCardForm}
        buttonText='Edit Card' />
    </div>
    </React.Fragment>
  )
}

EditCardForm.propTypes = {
  editCard: PropTypes.func,
  card: PropTypes.object
};

export default EditCardForm;