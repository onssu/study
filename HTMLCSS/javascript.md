# Java Script 

------

## 숫자

숫자는 자바와 동일하게 인식함. 따옴표가 없으면 숫자 있으면 문자

```javascript
Math.pow(3,2);       // 9,   3의 2승 
Math.round(10.6);    // 11,  10.6을 반올림
Math.ceil(10.2);     // 11,  10.2를 올림
Math.floor(10.6);    // 10,  10.6을 내림
Math.sqrt(9);        // 3,   3의 제곱근
Math.random();       // 0부터 1.0 사이의 랜덤한 숫자
```

------

## 문자

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

------

## 변수

```javascript
 var a = 1;
 var a = 'string';
```

------

## 주석, 줄바꿈과 여백

생략

------

## 연산자

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

------

## 조건문

생략

------

## boolean의 대체제

다음은 false와 0 외에 false로 간주되는 데이터형의 리스트다. if문의 조건으로 !(부정) 연산자를 사용했기 때문에 각 조건문의 첫번째 블록이 실행되는 것은 주어진 값이 false이기 때문이다.

```javascript
if(!''){
    alert('빈 문자열')
}
if(!undefined){
    alert('undefined');
}
var a;
if(!a){
    alert('값이 할당되지 않은 변수'); 
}
if(!null){
    alert('null');
}
if(!NaN){
    alert('NaN');
}
```

------

## 반복문

생략

------

## 함수

``` javascript
function 함수명( [인자...[,인자]] ){
   코드
   return 반환값
}

var numbering = function (){
    i = 0;
    while(i < 10){
        document.write(i);
        i += 1;
    }   
}
numbering();
```

------

## 배열

```javascript
var arr = [1, 2, 3, 4, 5];
alert(arr.length); // 결과 : 5

//추가
var li = ['a', 'b', 'c', 'd', 'e'];
li.push('f'); // a b c d e f

var li = ['a', 'b', 'c', 'd', 'e'];
li = li.concat(['f', 'g']); // a b c d e f g

var li = ['a', 'b', 'c', 'd', 'e'];
li.unshift('z'); // z a b c d e 

var li = ['a', 'b', 'c', 'd', 'e'];
li.splice(2, 0, 'B'); // a b B c d e 2번째 인자로부터 0개의 인자를 지우고 삽입함

//제거
var li = ['a', 'b', 'c', 'd', 'e'];
li.shift(); // b c d e

var li = ['a', 'b', 'c', 'd', 'e'];
li.pop(); // a b c d

//정렬
var li = ['c', 'e', 'a', 'b', 'd'];
li.sort(); // a b c d e

var li = ['c', 'e', 'a', 'b', 'd'];
li.reverse(); // e d c b a
```

------

## 객체

```javascript
//객체 만들기
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80}; 

var grades = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

var grades = new Object();
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

//객체 불러오기
alert(grades['sorialgi']);
alert(grades.sorialgi);

var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
for(key in grades) {
    document.write("key : "+key+" value : "+grades[key]+"<br />");
}

var grades = {
    'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
    'show' : function(){
        for(var name in this.list){
            document.write(name+':'+this.list[name]+"<br />");
        }
    }
};
grades.show();
```

------

## 모듈

**greeting.js**

```javascript
function welcome(){
    return 'Hello world';
}
```

**main.html**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <script src="greeting.js"></script> /* script 태그 추가함*/
</head>
<body>
    <script>
        alert(welcome());
    </script>
</body>
</html>
```

jQuery 홈페이지에서 파일을 다운로드 받는다. 

http://jquery.com/

jQuery 메뉴얼을 이용해서 사용법을 파악한다.

http://api.jquery.com/

```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
</head>
<body>
    <ul id="list">
        <li>empty</li>
        <li>empty</li>
        <li>empty</li>
        <li>empty</li>
    </ul>
    <input id="execute_btn" type="button" value="execute" />
    <script type="text/javascript">
     $('#execute_btn').click(function(){
        $('#list li').text('coding everybody');
     })
    </script>
</body>
</html>
```

------

## UI & API (Application Programming Interface)

##### 자바스크립트의 API

자바스크립트의 API는 크게 자바스크립트 자체의 API와 자바스크립트가 동작하는 호스트 환경의 API로 구분된다. 

##### 자바스크립트 API 문서

- [ECMAScript (표준문서)](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
- [자바스크립트 사전 (생활코딩)](http://opentutorials.org/course/50)
- [자바스크립트 레퍼런스 (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [jscript 레퍼런스 (MSDN)](http://msdn.microsoft.com/ko-kr/library/vstudio/z688wt03(v=vs.100).aspx)

##### 호스트 환경의 API 문서

- [웹브라우저 API](https://developer.mozilla.org/en-US/docs/Web/API)
- [Node.js API](http://nodejs.org/api/)
- [Google Apps Script API](https://developers.google.com/apps-script/)

------

## 정규표현식

컴파일 : 패턴을 찾는 것

실헹 : 어떠한 작업을 하는 것 

```javascript
var pattern = /a/; //정규표현식 리터럴
var pattern = new RegExp('a');//정규포현식 객채 생성자
```



### RegExp.exec()

```javascript
console.log(pattern.exec('abcdef')); // ["a"]
//실행결과는 문자열 a를 값으로 하는 배열을 리턴한다.

console.log(pattern.exec('bcdefg')); // null
//인자 'bcdef'에는 a가 없기 때문에 null을 리턴한다.
```

### RegExp.test()

test는 인자 안에 패턴에 해당되는 문자열이 있으면 true, 없으면 false를 리턴한다.

```javascript
console.log(pattern.test('abcdef')); // true
cnosole.log(pattern.test('bcdefg')); // false
```

### String.match()

RegExp.exec()와 비슷하다.

```javascript
console.log('abcdef'.match(pattern)); // ["a"]
console.log('bcdefg'.match(pattern)); // null
```

### String.replace()

문자열에서 패턴을 검색해서 이를 변경한 후에 변경된 값을 리턴한다.

```javascript
console.log('abcdef'.replace(pattern, 'A'));  // Abcdef
```



### i

i를 붙이면 대소문자를 구분하지 않는다.

```javascript
var xi = /a/;
console.log("Abcde".match(xi)); // null
var oi = /a/i;
console.log("Abcde".match(oi)); // ["A"];
```

### g

g를 붙이면 검색된 모든 결과를 리턴한다.

```javascript
var xg = /a/;
console.log("abcdea".match(xg));
var og = /a/g;
console.log("abcdea".match(og));
```



괄호안의 패턴은 마치 변수처럼 재사용할 수 있다. 이 때 기호 $를 사용하는데 아래 코드는 coding과 everybody의 순서를 역전시킨다.

```javascript
var pattern = /(\w+)\s(\w+)/;
var str = "coding everybody";
var result = str.replace(pattern, "$2, $1");
console.log(result);
```

### 치환

아래 코드는 본문 중의 URL을 링크 html 태그로 교체한다. 

```javascript
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result);

// 결과
생활코딩 : <a href="http://opentutorials.org/course/1">http://opentutorials.org/course/1</a> 입니다. 네이버 : <a href="http://naver.com">http://naver.com</a> 입니다.
```

------

