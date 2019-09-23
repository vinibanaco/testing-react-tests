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
      <input
        type="text"
        name="text"
        onChange={handleTextChange}
        required
        style={{
          border: '1px solid #999',
          borderRadius: '4px 0 0 4px',
          fontSize: '16px',
          padding: '7px',
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: '#e0e0e0',
          border: '1px solid #999',
          borderRadius: '0 4px 4px 0',
          fontSize: '14px',
          /**
           * 6px de padding desejado + 2 * 1px para
           * compensar o tamanho da fonte
           */
          padding: '8px 14px',
          marginLeft: '-1px',
        }}
      >
        Enviar
      </button>
    </form>
  );
}

export default InputBox;

InputBox.propTypes = {
  callback: PropTypes.func.isRequired,
};
