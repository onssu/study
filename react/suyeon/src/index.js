import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 현재 시간을 DOM에 뿌려줄 tick함수
function tick()
{
  const element = (
  <div>
    <h2>It is {new Date().toLocaleTimeString()}</h2>
  </div>
  );
 
  ReactDOM.render(element, document.getElementById("root"));
}
 
// 1초마다 tick함수를 갱신하기 위한 함수
setInterval(tick, 1000)
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
