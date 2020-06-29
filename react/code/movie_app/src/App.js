import React from 'react';

function Food({fav}){
  return <h1>I Like {fav}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="라면" />
      <Food fav="햄버거" />
      <Food fav="피자" />
      <Food fav="치킨" />
    </div>
  );
}

export default App;
