import React, { Fragment } from 'react';

class Test extends React.Component{

  render() {
    return(
      <div className="divwrap">
        {this.props.number}
      </div>
    )
  }
}

export default Test;