# Styled Component

------

CSS in JS 라는 기술입니다. 이 문구가 뜻하는 그대로, 이 기술은 JS 안에 CSS 를 작성하는 것을 의미하는데요, 우리는 이번 튜토리얼에서 해당 기술을 사용하는 라이브러리인 [styled-components](https://www.styled-components.com/) 를 다뤄볼 것입니다.

styled-components 는 현존하는 CSS in JS 관련 리액트 라이브러리 중에서 가장 인기 있는 라이브러리입니다. 이에 대한 대안으로는 [emotion](https://github.com/emotion-js/emotion) 와 [styled-jsx](https://github.com/zeit/styled-jsx)가 있습니다.



### Tagged Template Literal

styled-components 를 사용하기 전에, Tagged Template Literal 이라는 문법에 대하여 짚고 넘어가면, styled-components 가 내부적으로 어떻게 작동하는지 이해 할 수 있습니다. 참고로 이번에 다룰 내용은 조금 이해하기 어려울 수도 있는데요, 완벽히 이해하지 않아도 앞으로 styled-components 를 사용하는데 전혀 지장이 가지 않으니 가볍게 읽고 넘어가 주셔도 됩니다.

아마, [Template Literal](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals) 에 대해서는 익숙하실 것입니다. 문자열 조합을 더욱 쉽게 할 수 있게 해주는 ES6 문법이죠.

```javascript
const name = 'react';
const message = `hello ${name}`;

console.log(message);
// "hello react"
```



만약에, 우리가 Template Literal 을 사용 할 때 `${}` 안에 일반 문자열 / 숫자가 아닌 객체를 넣는다면 어떻게 될까요?

```javascript
const object = { a: 1 };
const text = `${object}`
console.log(text);
// "[object Object]"
```

아니면, 만약에 함수를 넣는다면 어떻게 될까요?

```javascript
const fn = () => true
const msg = `${fn}`;
console.log(msg);
// "() => true"
```

만약에, 우리가 Template Literal 을 사용하면서도, 그 내부에 넣은 자바스크립트 값을 조회하고 싶을 땐 Tagged Template Literal 문법을 사용 할 수 있습니다.

```javascript
const red = '빨간색';
const blue = '파란색';
function favoriteColors(texts, ...values) {
  console.log(texts);
  console.log(values);
}
favoriteColors`제가 좋아하는 색은 ${red}과 ${blue}입니다.`
```

![img](https://i.imgur.com/869yKxk.png)

> 여기서 함수 파라미터쪽에서는 [파라미터의 rest 문법](https://learnjs.vlpt.us/useful/07-spread-and-rest.html#함수-파라미터에서의-rest)이 사용되었습니다. 우리가 입력한 문자열이 모두 분해되어서, 우리가 넣어준 텍스트와 `${}` 를 통해 넣어준 자바스크립트 값을 따로 따로 볼 수 있는데요 이 값들을 조합하여 우리는 이런 작업을 할 수 있습니다.

```javascript
const red = '빨간색';
const blue = '파란색';
function favoriteColors(texts, ...values) {
   return texts.reduce((result, text, i) => `${result}${text}${values[i] ? `<b>${values[i]}</b>` : ''}`, '');
}
favoriteColors`제가 좋아하는 색은 ${red}과 ${blue}입니다.`
// 제가 좋아하는 색은 <b>빨간색</b>과 <b>파란색</b>입니다.
```

코드가 좀 복잡하지요? 우리가 앞으로 개발하면서 `favoriteColors` 같은 함수를 작성할 일은 없으니 이해가기 어려워도 너무 걱정할 필요는 없습니다. 지금은 그냥 저런 문법이 있구나, 정도로 알아두기만헤도 충분합니다.

styled-components 에서는 이런 문법을 사용해서 컴포넌트의 props 를 읽어오기도 하는데요, 지금은 맛보기로만 한번 확인해보세요.

```javascript
const StyledDiv = styled`
  background: ${props => props.color};
`;
```

Tagged Template Literal 을 사용하면 만약 `${}` 을 통하여 함수를 넣어줬다면, 해당 함수를 사용해줄 수도 있답니다.

얘시 코드를 한번 확인해볼까요?

```javascript
function sample(texts, ...fns) {
  const mockProps = {
    title: '안녕하세요',
    body: '내용은 내용내용 입니다.'
  };
  return texts.reduce((result, text, i) => `${result}${text}${fns[i] ? fns[i](mockProps) : ''}`, '');
}
sample`
  제목: ${props => props.title}
  내용: ${props => props.body}
`
/*
"
  제목: 안녕하세요
  내용: 내용은 내용내용 입니다.
"
*/
```

