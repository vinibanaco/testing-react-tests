import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputBox from '../components/InputBox/InputBox';

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      visible: true,
    };
  }

  componentDidMount() {
    const { name } = this.props;
    this.setState({ name });
  }

  toggleText = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
  }

  changeTitle = (text) => {
    this.setState({
      name: text,
    });
  }

  renderTitle = () => {
    const { visible, name } = this.state;

    if (visible) {
      return <h1>{name}</h1>;
    }

    return null;
  }

  render() {
    return (
      <>
        {this.renderTitle()}
        <button type="button" onClick={this.toggleText}>Toggle text</button>

        <InputBox style={{ marginTop: '40px' }} callback={this.changeTitle} />
      </>
    );
  }
}

export default Hello;

Hello.propTypes = {
  name: PropTypes.string,
};

Hello.defaultProps = {
  name: 'Vinícius',
};
