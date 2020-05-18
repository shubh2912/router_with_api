import React from 'react';
import PropTypes from 'prop-types';


class Header extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      childValue: prop.valueProp
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      childValue: nextProps.valueProp 
    }
  }

  render() {
    const { childValue } = this.state;
    const { nameProp } = this.props;
    return (
      <div>
        {`Hi ${nameProp}`}
        <br />
        {`Value : ${childValue}`}
      </div >
    )
  }
}

Header.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}


export default Header;
