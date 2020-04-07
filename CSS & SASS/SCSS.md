# SCSS

> SCSS = SASS + CSS
> SASS 컴퍼일러로 SCSS 파일이 CSS 파일이됨

## 1. 기본문법

- 기본틀은 CSS 문법과 동일 EX) `.sec { margin: 0;}`
- nested block(넥스팅) 을 적용 
- `//` 을 이용해서 라인 단위로 주석처리 

## 2. 네스팅(nesting)

- 네스팅이란 서브루틴 중에 다른 서브루틴을 짜 넣는것.

### 셀렉터 네스팅

- div 안에 있는 p 처럼 하위구조를 가지고 있을 경우, div의 속성 정의 블록 안에 하위에 있는 p가 들어갈 수 있다.

```null
//scss
.div {
	p {
   		color: #f00;
     }
}

//css
.div p { color: #f00;}
```

### 속성 네스팅

- 축양형으로 묶일 수 있는 속성들 끼리도 네스팅이 가능하다.

```null
 .div {
	p {
          font: {
              family: "Malgum Gothic", sans-serif;
              size : 14px;
              weight: 700;
          }
	}
 }
```

### 상위요소 치환

- &을 사용하면 현재 블럭이 적용되는 셀렉터를 참조,치환

```null
//scss
a {
  text-decoration: none
  &:hover { text-decroation: underline; }
}

//css
a { text-decoration: none; }
a:hover { text-decoratino: underline; }
```

- '글자'를 이어서 써서 선택자 클래스명 이름을 완성할 수도 있다.

```null
//scss
.btn {
   display:inline-block; padding:3px 10px; border:1px solid #000;
   &_blue { background-color:blue; border:0; }
   &_yellow { background-color:yellow; border:0; }
}

//css
.btn { display:inline-block; padding:3px 10px; border:1px solid #000; }
.btn_blue { background-color:blue; border:0; }
.btn_yellow { background-color:yellow; border:0; }
```

## 3. 변수와 연산자

- 색상이나 선 스타일, 폰트 패밀리등은 대체로 사이트 내에서 공통적으로 정의해놓은 값을 쓰는 경우가 많다.
  이들을 매번 지정하지 않고 변수로 들어서 사용하면 변경 시점에 변수의 내용만 수정하여 모든 곳의 값을 공통적으로 바꿀 수 있을 것이다.

### 변수 타입

- 숫자값 : 숫자 리터럴로 쓰인 값은 숫자로 판단한다. 크기를 나타내는 단위가 붙은 경우도 숫자로 취급한다.
  ex) 12px, 1.534rem
- 문자열 : 문자의 경우 기본적으로 따옴표 여부에 상관없이 문자열로 취급한다.
- 색상값 : 색상명이나 색상리터럴로 표기된 값은 색으로 인식한다.
  ex) blue, #aa33cc, rgba(255,0,0,0.6)
- 블리언 : true, false
- 널 : null
- 리스트 : 리스트 내 원소는 동일 타입일 필요는 없으며, 괄호 속에 컴마나 공백으로 구분된 값을 리스트로 본다.
- 맵 : 괄호 속에서 `:`으로 키:값을 구분하여 쓴다.

> 숫자값의 경우에는 사칙 연산 및 산술 연삼 함수의 적용이 가능하다.
> 예외 : 나눗셈 (나눗셈은 원래 CSS에서도 존재하여 SASS컴파일러는 해당 표기를 연산이라 판단하지 않는다. 수식을 괄호로 묶으면 강제로 연산으로 처리된다. 그외에도 덧셈등의 다른 연산자와 같이 쓰인 경우에도 나눗셈 연산으로 처리된다.)

### 문자열의 치환 및 내삽(interpolation)

- `#{...}` 을 사용하면 문자열 내에 표현식의 결과를 내삽하거나, 다른 변수의 내용으로 치환하는 것이 가능하다. 이는 속성값의 일부 혹은 전체 뿐만 아니라 속성명이나 셀렉터에 대해서도 적용 가능하다.

```null
//scss
$foo: bar;
$fontsize: 12px;
$lineheight: 30p;

p {
  font: #{$fontsize}/#{$lineheight};
  &.#{$foo} { color: red; }
}

//css
p { font: 12px/30px; }
p.bar { color: red; }
```

## 4. 임포트 (@import)

- `@import` 지시어를 이용해서 다른 css 파일을 임포트할 수 있다.
  사실 이 기능은 css의 원래 기능이다. 대신 css 파일이 아닌 scss, sass 파일을 임포트할 수 있다.

## 5. 확장 (@extend)

- 확장은 이미 정의해둔 다른 셀렉터의 속성에 현재 셀렉터가 얹어가는 효과를 낼 수 있다.
  따라서 특정한 클래스군에 대해서 베이스 클래스에서 공통 속성을 지정하여, 다른 클래스들이 베이스 클래스를 상속받는 효과를 낼 수 있다.
  확장 문법은 `@extend` 최상위셀렉터의 형태로 사용한다.

```null
// SCSS
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}
```

## 6. 믹스인 (@mixin)

- 공통적으로 많이 쓰이는 CSS 선언값들을 묶어서 믹스인으로 만들어 재사용이 가능하게끔 할 수 있다. 변수는 단일 값을 담을 수 있는 것에 비해, 믹스인은 여러 속성의 정의 및 셀렉터에 대한 속성 전체등 블럭 단위로 재사용할 수 있다.
- 믹스인을 정의할 때에는 파라미터를 받아 파라미터 값에 따른 가변적 속성 집합을 만들 수 있다. 다음 예는 둥근 외곽선을 지정할 때 벤더별로 다른 접두어가 붙는 속성들을 매번 반복해서 쓰지 않도록 하는 테크닉이다.
- 믹스인은 @mixin 키워드를 이용해서 이름과 인자를 선언한다. 인자가 필요없는 믹스인은 ($인자) 부분을 생략할 수 있다. 인자는 일반 변수처럼 정의한다.
- 믹스인을 사용할 때에는 @include 지시어를 사용한다.

```null
// SCSS
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

.box { @include border-radius(10px); 
```

### 믹스인의 인자값

- 믹스인의 인자는 선언하는 만큼 사용할 수 있다. 만약 인자값에 디폴트를 적용하고 싶다면, 변수 선언과 같은 문법으로 인자변수의 초기값을 설정해 줄 수 있다.

```null
@mixin dashed-box($color, $width: 2px) { .. }
```

- @include 구문에서 인자값은 선언된 순서대로 쓸 수 있으며, 보다 명확한 구분을 위해서 인자의 이름을 직접 기입할 수 있다. 인자의 각 이름을 명시한 경우에는 순서가 바뀌어도 상관없다.

```null
.box { @incluxe dashed-box($width: 3px, $color: #eee) }
```

### 리스트 인자

- 인자명에 ... 을 붙이면 단일 값이 아닌 리스트로 인자를 받는 다는 의미이다. 이는 일련의 연속값을 속성으로 사용하는 경우에 활용할 수 있다.

```null
@mixin box-shadow($shadows...) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}

.shadows { @include box-shadows(0px 4px 5px #666, 2px 6px 10px #999); }
```

- ... 표현은 리스트나, 맵을 개별 인자들로 분해해서 함수나 믹스인에 전달할 때 사용될 수 있다.

```null
@mixin colors($text, $background, $border) {
  color: $text;
  background-color: $background;
  border-color: $border;
}

$values: #ff0000, #00ff00, #0000ff;
.primary { @include colors($values...); }
```

### 블럭을 믹스인에 넘기기

- 흔한 케이스는 아니지만, 블럭 자체를 믹스인에 넘겨줄 수 있다. 믹스인내에서 @content 지시어를 쓴 부분이 넘겨받은 블럭으로 치환된다.

```null
@mixin code-inline {
  code {
    background-color: #cecece;
    padding: 2px;
    border-radius: @include border-raidus(4px);
    font-family: monospaces;
    @content
  }
}

p {
  @include code-inline {
    color: #33ccff;
    font-size: .8em;
  }
}
```

## 7. 커스텀 함수

- css 속성 정의의 모듈화와 재사용은 믹스인을 통해서 처리하면 된다. 함수는 어떤 값들을 사용해서 하나의 리턴값을 생성하는 용도로 사용하는 것이 좋다. 함수의 정의는 @function 지시어를 통해서 정의하며, 내부에서는 @return 지시어를 통해서 값을 내보낸다. 다음 예는 그리드 시스템에서 개별 셀과 여백의 크기를 통해서 n칸짜리 요소의 폭을 계산하는 함수이다.
- 함수 역시 믹스인과 마찬가지로 복수 인자 및 인자 분해 등을 적용해서 사용할 수 있다. 또한 SASS 내에서는 여러 기본 함수들이 내장되어 있다.

```null
/ SCSS
$grid-width: 40px; 
$gutter-width: 10px; 
@function grid-width($n) {
   @return $n * $grid-width + ($n -1 ) * $gutter-width; 
} 
#sidebar { width: grid-width(5); } // 믹스인과 달리 @include를 쓰지 않는다.
```

## 8. 흐름제어

- 함수나 믹스인을 작성할 때 특정 조건에 따른 분기나, 조건 혹은 연속열 (리스트 나 맵)의 각 원소에 대해 반복하는 등 흐름 제어와 관련된 기능을 사용해야 할 필요가 있다. 이 때 흐름제어 지시어들을 사용할 수 있다.

### 분기분

- 분기구문은 `@if` 절을 이용하여 작성한다. `@if 표현식 { ... } @else if 표현식 { ... } @else { ... }` 식으로 연결되는 다중 분기를 만들 수 있다.

```null
@mixin hcolor($n) {
  @if $n % 2 == 0 { color: white; }
  @else { color: blue; } 
}
.row-3 { @include hcolor(3); } 

@function text-color($brightness) {
  @if $brightness < 128 { @return #333; }
  @return #ccc; 
}
code { color: text-color(200);
```

### 반복문

1. @for : n ~ m 까지의 숫자 범위에 대해 각 정수값에 대해 순회한다.
2. @each : 주어진 리스트나 맵의 각 원소에 대해 순회한다.
3. @while : 주어진 조건을 만족하는 동안 반복한다.

```null
@for $i from 1 through 3 { // 1, 2, 3,에 대해 반복
  .time-#{$i} { width: 2em * $i; } 
} 

// 리스트 내 각 문자열 원소에 대해서... 
@each $animal in puma, sea-slug, egret, alamander {
  .#{$animal}-icon {
    background-image: url('/image/#{$animal}.png');   
  }
}

// 6, 4, 2번 아이템에 대해서 
$i : 6; 
@while $i > 0 {
  .item-#{$i} { width: 2em * $i }
  $i: $i - 2; 
}
```

- [!https://soooprmx.com/archives/7948!] 참고사이트 
- [http://blog.naver.com/PostView.nhn?blogId=kira4195&logNo=221262057145&parentCategoryNo=&categoryNo=29&viewDate=&isShowPopularPosts=false&from=postView][SCSS] SCSS문법 정리 네스팅 변수 @import @mixin @include @for @each @while|작성자 웹퍼블리셔 비비각시