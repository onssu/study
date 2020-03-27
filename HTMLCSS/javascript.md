# Java Script 

------

### 숫자

숫자는 자바와 동일하게 인식함. 따옴표가 없으면 숫자 있으면 문자

```javascript
Math.pow(3,2);       // 9,   3의 2승 
Math.round(10.6);    // 11,  10.6을 반올림
Math.ceil(10.2);     // 11,  10.2를 올림
Math.floor(10.6);    // 10,  10.6을 내림
Math.sqrt(9);        // 3,   3의 제곱근
Math.random();       // 0부터 1.0 사이의 랜덤한 숫자
```

### 문자

문자는 "(큰 따옴표) 혹은 '(작은 따옴표) 중의 하나로 감싸야 한다. 큰 따옴표로 시작하면 큰 따옴표로 끝나야하고, 작은 따옴표로 시작하면 작은 따옴표로 끝나야 한다. String이라고 한다.

```javascript
alert("coding everybody");
alert('coding everybody');

alert(typeof "1") // 결과 : string 
alert(typeof 1) // 결과 : number

alert('egoing\'s javascript\n') //'를 출력하고 싶다면 /를 추가하자. (escape 기법)

alert("coding"+" everybody"); // 결과 : coding everybody
alert("coding everybody".length) // 결과 : 16
```

### 변수

```javascript
 var a = 1;
 var a = 'string';
```

### 주석, 줄바꿈과 여백

생략

### 연산자

```javascript
alert(1=='1');              //true
alert(1==='1');             //false
```

위의 결과는 이상하다. '==='는 숫자 1과 문자 1을 다르게 인식한다. 반면에 '=='는 양쪽의 값을 같다고 판단한다. 바로 이것이 '정확'의 의미다. 즉 ===는 서로 같은 수를 표현하고 있더라도 데이터 형이 같은 경우에만 같다고 판단하기 때문이다. 결론부터 말하면 == 연산자 대신 === 연산자를 쓰는 것을 강력하게 권한다.

```javascript
alert(null == undefined);       //true
alert(null === undefined);      //false
alert(true == 1);               //true
alert(true === 1);              //false
alert(true == '1');             //true
alert(true === '1');            //false
 
alert(0 === -0);                //true
alert(NaN === NaN);             //false
```

null과 undefined는 값이 없다는 의미의 데이터 형이다. null은 값이 없음을 명시적으로 표시한 것이고, undefined는 그냥 값이 없는 상태라고 생각하자.

NaN은 0/0과 같은 연산의 결과로 만들어지는 특수한 데이터 형인데 숫자가 아니라는 뜻이다.

### 조건문

