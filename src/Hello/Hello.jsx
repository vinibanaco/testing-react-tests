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
    let hidden = {};
    if (!visible) {
      hidden = { opacity: 0 };
    }

    return (
      <h1
        style={{
          fontSize: '28px',
          fontWeight: 'normal',
          margin: 0,
          ...hidden,
        }}
      >
        Olá,&nbsp;
        {userName || name}
      </h1>
    );
  }

  return (
    <section style={{ margin: '40px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '35px',
        }}
      >
        <button
          type="button"
          onClick={toggleText}
          style={{
            backgroundColor: '#e0e0e0',
            border: '1px solid #888',
            borderRadius: '4px',
            fontSize: '14px',
            padding: '10px 16px',
            marginRight: '15px',
          }}
        >
          Esconder
        </button>
        {renderTitle()}
      </div>

      <section
        style={{
          display: 'inline-block',
          padding: '15px',
          border: '1px solid #888888',
          borderRadius: '4px',
        }}
      >
        <h2 style={{ fontSize: '18px', margin: '0 0 20px' }}>Altere o seu nome</h2>
        <InputBox style={{ marginTop: '40px' }} callback={changeTitle} />
      </section>
    </section>
  );
}

export default Hello;

Hello.propTypes = {
  name: PropTypes.string,
};

Hello.defaultProps = {
  name: 'anônimo',
};
