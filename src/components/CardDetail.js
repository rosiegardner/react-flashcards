import React from 'react';
import PropTypes from 'prop-types';

function CardDetail(props) {
  const { card } = props;

  return (
    <React.Fragment>
      <h1>Card Detail</h1>
      <h3>{card.catergory}</h3>
      <h4>{card.question}</h4>
      <p><em>{card.answer}</em></p>
      <button onClick={ props.editCard}>Edit Card</button>
      <button onClick={() => props.deleteCard(card.id)}>Delete Card</button>
    </React.Fragment>
  );
}

CardDetail.propTypes = {
  card: PropTypes.object
};

export default CardDetail;
