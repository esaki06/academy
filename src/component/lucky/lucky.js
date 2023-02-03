import React, { Component } from "react";
import PropTypes from 'prop-types'
class Lucky extends Component {
  render() {
    return <div>
           {this.props.name} - {this.props.age} - {this.props.gender} 
            

    </div>;
  }
}

Lucky.propTypes={
  name:PropTypes.string,
  age:PropTypes.number,
  gender:PropTypes.oneOf(['male','female','others'])
}
export default Lucky;