import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputBox({ callback }) {
  const [text, setText] = useState('');

  function handleTextChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function handleClick() {
    return callback(text);
  }

  return (
    <section>
      <label htmlFor="text">
        Texto:
        <input type="text" id="text" name="Text" onChange={handleTextChange} required />
      </label>
      <button type="button" onClick={handleClick}>Enviar</button>
    </section>
  );
}

export default InputBox;

InputBox.propTypes = {
  callback: PropTypes.func.isRequired,
};
