import React from 'react'
// import PropTypes from 'prop-types'
import Select from 'react-select'

function ReusableForm(props) {

  const categories = [
    { value: "React", label: "React"},
    { value: "Ruby", label: "Ruby"},
  ];



  return (
    <div>
      <form onSubmit={props.formSubmissionHandler}>
        <Select name="category"
          value={categories.value}
          options={categories}
        />
        <input
          type='text'
          name='question'
          placeholder='Question' />
          <br/>
        <input
          type='text'
          name='answer'
          placeholder='Answer' />
          <br/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </div>
  )
}

ReusableForm.propTypes = {}

export default ReusableForm;
