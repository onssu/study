# JavaScript ES6

------

## 기존의 Hoisting

```javascript
console.log(a);
var a = 10;
```

호이스팅 후 =>

```javascript
var a;
console.log(a); // undefinded
a = 10;
```

호이스팅이 적용된 코드는 위와 같고 따라서 undefinded가 출력된다.

## let, const의 Hoisting

```javascript
console.log(a);
let a = 10;
```

이렇게 let으로 바꾼다면 결과는

```shell
Uncaught ReferenceError: a is not defined
```

위와 같은 a가 정의되지 않았다는 레퍼런스 에러가 발생한다,
결국 a 변수 선언이 위로 호이스팅되지 않았다는 이야기가 된다.

하지만 그렇지 않다. 아래 예제를 보면 호이스팅이 안되는게 아니라는 것을 알 수 있다.

```javascript
let a = 10;

{
  console.log(a);
}
```

위 예제는 당연하게도 `10`이 출력된다. 이제 아래 예제를 보자

```javascript
let a = 10;
{
  console.log(a);
  let a = 20;
}
```

호이스팅이 되지 않는다면 위 코드 그대로 실행되어 10이 출력되는 것이 정상일 것이다.
그러나 여기서는 아래와 같이 에러가 출력된다.

```shell
Uncaught ReferenceError: a is not defined
```

결국 let, const와 같이 ES6 선언도 호이스팅의 대상이기 때문에 위에서는 두번째 let의 블록 스코프안에서 호이스팅이 이뤄서 console.log에서 에러가 발생하게 된 것이다.

그렇다면 이러한 에러가 발생하는 이유는 무엇일까,

우선 var 키워드의 경우를 살펴보자,

```javascript
var a = 10;
```

var로 선언된 변수는
[선언 - 초기화 - 할당] 의 단계 중
[선언 - 초기화]가 한번에 이루어지고 다음에 [할당]이 되게 된다.

1. [선언 - 초기화]
2. [할당]

그에 반해 let/const 키워드는 다르게 실행된다.
선언, 초기화, 할당이 따로 이루어지고 **TDZ(Temporal Dead Zone)**라는 것이 개입한다.

과정은 아래와 같다.

1. [선언]
2. [TDZ]
3. [초기화]
4. [할당]

초기화(변수가 메모리에 할당되며 undefined로 초기화되는 과정)가 되기 전에 변수에 접근하려 한다면 **TDZ**에 의해서 에러가 발생하게 된다.

```javascript
var a;
console.log(a);
a = 10;
let a;
console.log(a);
a = 10;
```

위처럼 호이스팅 된 코드를 보면 변수에 접근하는 데 있어
기존 var 키워드는 선언과 초기화가 함께 되었으므로 접근하여도 정상적으로 undefined가 출력된다.
하지만 let/const 키워드는 선언만 호이스팅 되고 그것은 초기화 이전이므로 접근하려 한다면 TDZ에 의해서 에러가 발생하는 것이라고 볼 수 있다.

### 요약

- Hoisting은 선언 끌올!
- let, const 는 초기화 되기 전까지 TDZ에서 대기!
- let/const는 스윽보면 hoisting이 안되는 것 같지만 오래보면 hoisting 되는 것

------

