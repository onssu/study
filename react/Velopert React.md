# velopert react.js

------

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
```

import 한다는것은, 무엇을 불러온다는것입니다. 첫번째 코드는 리액트와 그 내부의 Component 를 불러옵니다. 파일에서 JSX 를 사용하려면, 꼭 React 를 import 해주어야 합니다.

그 아래에서는 같은 디렉토리에 있는 파일 logo.svg 과 App.css 파일을 불러왔습니다.

이렇게, import 를 하는 것은, 우리가 webpack 을 사용하기에 가능한 작업입니다. 이렇게 불러오고나면 나중에 프로젝트를 빌드하게 됐을 때 웹팩에서 파일의 확장자에 따라 다른 작업을 하게 됩니다. CSS 파일을 불러오게되면, 나중에 프로젝트에서 사용한 프로젝트를 한 파일에 모두 결합해주는 작업을 진행하고, 자바스크립트 파일을 불러오게되면 모든 코드들이 제대로 로딩되게끔 순서를 설정하고 하나의 파일로 합쳐주죠. (나중에 다뤄볼 얘기지만 규칙에 따라 여러 파일로 분리해서 저장하는것도 가능합니다.) 그리고, svg 처럼 사전에 따로 설정을 되지 않은 확장자의 경우, 그냥 파일로서 불러온다음에 나중에 특정 경로에 사본을 만들어주게되고, 해당 사본의 경로를 텍스트로 받아오게 됩니다.

```javascript
class App extends Component {
  ...
}
```

컴포넌트를 만드는 방법은 두가지가 있습니다. 그 중 하나는 위처럼 클래스를 통해서 만드는 것입니다. 또 다른 방법은 함수를 통하여 컴포넌트를 만드는 것인데요, 이에 대해서는 나중에 알아보겠습니다.

```javascript
render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
```

클래스형태로 만들어진 컴포넌트에는 꼭, render 함수가 있어야 하구요, 그리고 그 내부에서는 JSX 를 return 해주어야 합니다. 위에 보이는 HTML 같은 코드가 바로, JSX 입니다.

마지막 줄에 있는 해당 코드는:

```javascript
export default App;
```

우리가 작성한 컴포넌트를 다른 곳에서 불러와서 사용 할 수 있도록 내보내기를 해줍니다.

index.js 파일을 보면, 다음 코드가 있는데요,

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

우리가 만든 컴포넌트를 불러올 때는 이렇게 import 를 사용해서 불러와줍니다

```javascript
import App from './App';
```

그리고 브라우저 상에 우리의 리액트 컴포넌트를 보여주기 위해서는 `ReactDOM.render` 함수를 사용합니다. 첫번째 파라미터는 렌더링 할 결과물이고, 두번째 파라미터는 컴포넌트를 어떤 DOM 에 그릴지 정해줍니다.

id 가 root 인 DOM 을 찾아서 그리도록 설정이 되어있는데요, 해당 DOM 은 public/index.html 파일에서 찾아보실 수 있습니다.

해당 파일 안에 있는

```html
<div id="root"></div>
```

를 찿아서 렌더링해주게 되는것이죠.

- JSX



