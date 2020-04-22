import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class app extends React.Component{
  render() {
    const name = '순민';

    return(
      <div className="divwrap">
        {name === '유리' ? (<div>바보</div>) : (<div>멍청이</div>)}
      </div>
    )
  }
}

export default app;