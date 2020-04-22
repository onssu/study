# REACT.js

> 페이스북으로부터 시작됨
>
> Vue, Angular -> framwork, 틀이 정해져있음
>
> React -> library, 내장된 것이 없기 때문에 자유도가 높다.



## Component 

- **함수형** : 간단함, 읽어오기만 가능, 자주 쓰임
- 클래스형 : 복잡함, 수정 가능함



## React 꼭 ! 규칙

- Html 같지만 JSX 이다.

- 컴포넌트 내에 코드들이 무조건 한 덩어리가 되게 감싸야 한다.

```jsx
<fragment></fragment>
<></>
//같은 용법이며 아무 기능 없이 감싸는 역할만 하고 싶을 때 사용한다.
```

### 삼항연산자

```jsx
const name = '유리';
{name}
//출력 결과 : 유리
삼항연산자
{name} === '유리' ? (<div>맞아용</div>) : (<div>틀렸어용</div>)
//출력 결과 : 맞아용
```

- class 아니고 classname 이다 !! 