import React, { Fragment } from 'react';
import Test from './Test';

class app extends React.Component{
  render() {

    const num = 6;

    return(
      <div id="container">
        <Test number={num}/>
      </div>
    )
  }
}

export default app;