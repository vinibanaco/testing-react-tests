import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputBox({ callback }) {
  const [text, setText] = useState('');

  function handleTextChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    return callback(text);
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input type="text" name="text" onChange={handleTextChange} required />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default InputBox;

InputBox.propTypes = {
  callback: PropTypes.func.isRequired,
};
