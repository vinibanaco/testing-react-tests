import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import InputBox from '../components/InputBox/InputBox';

function Hello({ name }) {
  const [userName, setUserName] = useState('');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setUserName(name);
  }, [name]);

  function toggleText() {
    setVisible(!visible);
  }

  function changeTitle(text) {
    setUserName(text);
  }

  function renderTitle() {
    if (visible) {
      return <h1>{userName || name}</h1>;
    }

    return null;
  }

  return (
    <>
      {renderTitle()}
      <button type="button" onClick={toggleText}>Toggle text</button>

      <InputBox style={{ marginTop: '40px' }} callback={changeTitle} />
    </>
  );
}

export default Hello;

Hello.propTypes = {
  name: PropTypes.string,
};

Hello.defaultProps = {
  name: 'Vinícius',
};
