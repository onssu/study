# React Life Cycle

------

## 라이프 사이클 이벤트란

React의 컴포너트는 생명주기(Life cycle)을 가진다. 생명주기란 컴포넌트가 생성되고 사용되고 소멸될 때 까지 일련의 과정을 말한다.
이러한 생명주기 안에서는 특정 시점에 자동으로 호출되는 메서드가 있는데, 이를 **라이프 사이클 이벤트**라고 한다.

![img](https://user-images.githubusercontent.com/6733004/45586846-2a131180-b938-11e8-9655-c9dd20f74ef5.png)

```js
class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }
  componentWillReceiveProps(nextProps) {    
    console.log('Component WILL RECIEVE PROPS!')
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }
  render() {
    return (
        <div>
          <h1>{this.props.sentDigit}</h1>
        </div>
    );
  }
}
```

### constructor

```js
constructor(props){
  super(props);
}
```

생성자 메소드로 컴포넌트가 생성될 때 *단 한번*만 실행된다.
이 메소드에서만 `state`를 설정할 수 있다.

### componentWillMount()

```js
componentWillMount(){
  console.log("componentWillMount");
}
```

React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출되는 메소드다.
DOM이 생성되지 않았으므로 DOM을 조작할 수 없고, `render`가 호출되기 전이기 때문에 **`setState`를 사용해도 `render`가 호출하지 않는다.**

### render()

컴포넌트 렌더링을 담당한다.

### componentDidMount()

```js
componentDidMount(){
  console.log("componentDidMount");
}
```

컴포넌트가 만들어지고 `render`가 호출된 이후에 호출되는 메소드다.
AJAX나 타이머를 생성하는 코드를 작성하는 부분이다.

### componentWillReceiveProps(nextProps)

```js
componentWillReceiveProps(nextProps){
  console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
}
```

컴포넌트 생성후에 첫 렌더링을 마친 후 호출되는 메서드다.
**컴포넌트가 처음 마운트 되는 시점에서는 호출되지 않는다.**
`props`를 받아서 `state`를 변경해야 하는 경우 유용하다.
**이 메소드 내부에서 `setState`를 사용해도 추가적인 렌더링이 발생하지 않는다.**

### shouldComponentUpdate(nextProps, nextState)

```js
shouldComponentUpdate(nextProps, nextState){
  console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
  return true;
}
```

컴포넌트 업데이트 직전에 호출되는 메소드다.
`props` 또는 `state`가 변경되었을 때, 재랜더링을 여부를 return 값으로 결정한다.

### componentWillUpdate(nextProps, nextState)

```js
componentWillUpdate(nextProps, nextState){
  console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
}
```

`shouldComponentUpdate`가 불린 이후에 컴포넌트 업데이트 직전에서 호출되는 메소드다.
새로운 props 또는 state가 반영되기 직전 새로운 값들을 받는다.
이 메서드 안에서 **this.setState()를 사용하면 무한 루프가 일어나게 되므로** 사용하면 안된다.

### componentDidUpdate(prevProps, prevState)

```js
componentDidUpdate(prevProps, prevState){
  console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
}
```

컴포넌트 업데이트 직후에 호출되는 메소드다.

### componentWillUnmount()

```js
componentWillUnmount(){
  console.log("componentWillUnmount");
}
```

컴포넌트가 소멸된 시점에(DOM에서 삭제된 후) 실행되는 메소드다.
컴포넌트 내부에서 타이머나 비동기 API를 사용하고 있을 때, 이를 제거하기에 유용하다.

> 



## 참고

https://velog.io/@kyusung/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B5%90%EA%B3%BC%EC%84%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%EC%9D%B4%EB%B2%A4%ED%8A%B8