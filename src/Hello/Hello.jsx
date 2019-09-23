import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  toggleText = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
  }

  renderTitle = () => {
    const { visible } = this.state;
    const { name } = this.props;

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
