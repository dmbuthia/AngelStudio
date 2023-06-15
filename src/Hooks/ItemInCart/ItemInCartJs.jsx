import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ItemInCartJs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount() {
    console.log('ItemInCartJs mounted');
  }

  componentWillUnmount() {
    console.log('ItemInCartJs will unmount');
  }

  componentDidCatch(error, info) {
    console.log('ItemInCartJs caught an error:', error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    
    return (
      <div className="ItemInCartJsWrapper">
        Test content
      </div>
    );
  }
}

ItemInCartJs.propTypes = {
  // bla: PropTypes.string,
};

ItemInCartJs.defaultProps = {
  // bla: 'test',
};

export default ItemInCartJs;
