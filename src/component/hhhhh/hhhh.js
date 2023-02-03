import React, { Component } from "react";
import PropTypes from 'prop-types'
import lucky from ".";
class Profile extends Component {
  render() {
    return <div>
           {this.props.name} {this.props.age}

    </div>;
  }
}

Profile.propTypes={
  name:PropTypes.string,
  age:PropTypes.number,
  gender:PropTypes.oneOf(['male','female','others'])
}
export default lucky;