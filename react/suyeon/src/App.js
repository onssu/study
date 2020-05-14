import React, { Fragment } from 'react';
import Test from './Test';

class app extends React.Component{
  render() {

    const num = 6;

    return(
      <div id="container">
      <div class="js-clock">
        <h1>00:00</h1>
      </div>
      <script src="clock.js"></script>
      </div>
    )
  }
}

export default app;