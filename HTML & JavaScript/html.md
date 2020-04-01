# HTML



### HTML 기본 태그

** <! DOCTYPE html> : HTML5 임을 브라우저에게 지시하며 맨 첫줄에 선언.



### HTML5필수태그 

####  `<html>`, `<head>`, `<title>`,` <body>`

​	- HEAD : CSS스타일, 자바스크립트, 메타태그들이 위치

​	- BODY : 자바스크립트 코드를 포함 할 수 있으며 HTML 구조 및 내용

​	- TITLE : 웹페이지의 제목으로서 브라우저의 상단 바에 출력되며 HEAD내에 작성



### 주석문

<!-- HTML문서에서의 주석문 형식 --> : 브라우저에 출력되지 않음



### 본문 소제목 태그

`<h1></h1>` 부터 `<h6></h6>` 까지

본문 Tooltip 달기

 <h1 title = "h1태그"> h1 소제목 입니다.</h1>

 위 태그에 마우스를 올리면 tooltip이 출력되며 모든 태그는 title 속성을 가지나 생략가능하다.



### 단락 태그**

`<p></p>`paragraph의 p로 표현하며 스타일 태그를 사용해서 단락 단위로 본문 모양을 바꿀 수 있으며 단락 태그가 끝나면 자동으로 공백줄(Enter키)이 만들어진다.



### hr 태그**

 `<hr>` 수평선을 삽입 할 수 있으며 종료태그가 없어 닫지 않아도 된다.


 *XHTML에서는 `<hr/>`로 종료태그를 붙여야 한다.



### 엔터키, 줄 바꿈 하기**

 HTML 문서에는 엔터키를 수 차례 입력해도 하나의 공백으로만 표현되고 줄넘김이 되지 않으며 <br>태그를 사용해서 줄넘김을 표현한다.



### 특수문자 및 기호 입력 방법 (엔터티 코드)**

UTF-8 코드 체계로 작성해야 하며 '<' '>' 처럼 태그에 나오는 문자와 겹치는 경우 (HTML 예약어로 사용중) 에는 &ENTITY; 또는 &#CODE; 로 입력한다.

 ex) < 는 &lt; 및 &#60;으로 표현한다.

 [HTML entity code표 보기](http://entitycode.com/#common-content)



### 입력하는 그대로 출력하는 pre태그**

<pre></pre> 내부에 입력한 엔터키나 탭 및 기타 태그들을 개발자가 입력한 포맷 그대로 출력해준다.



### block tag, inline tag**

- 블록태그 : `<p>`, `<h1>`, `<div>`,` <ul>`

- 인라인태그 : `<strong>`, `<a>`, `<img>`,` <span>`

블록태그는 브라우저의 왼쪽 끝에서 오른쪽 끝까지 블록의 공간을 표현하고 인라인 태그는 블록안에 삽입 되서 본문의 일부를 표현하며, <div>와 <span> 을 가장 많이 사용한다. div는 특별한 의미를 가지고 있지 않고 태그를 묶어 하나의 컨테이너처럼 사용한다. span태그는 본문 일부에 스타일을 적용하고 JS로 텍스트 일부분을 제어하려고 할때 사용하기도 한다.



### 이미지 삽입 태그** 

 `<img>` 태그를 사용해서 웹사이트 이미지를 출력하며, src 속성에 다른 웹사이트의 링크롤 가져와 이미지를 불러올 수 도 있다. 

```html
<img src="이미지파일 소스 url" alt="이미지를 출력할 수 없을 때 출력되는 문자열(필수속성)" width="이미지의 가로 폭 px단위" height="이미지의 세로 높이 px단위">
```



### 목록 태그 `<ul>`,`<ol>` ,`<dl>` 

 데이터를 리스트화 해서 나타낼때 사용하며 다음과 같이 세가지 종류가 있다.

- `<ul></ul>` : 순서 없는 목록 (unordered list)

- `<ol></ol>` : 순서 있는 목록 (ordered list)

- `<dl></dl>` : 정의 목록 (definition list)

 css 스타일을 통해 마커스타일 type을 변경할 수 있고, 마커의 시작값을 start 속성을 통해 제어한다. 또 목록안의 다른 목록을 표현하는 중첩 리스트도 가능하다.



### 테이블 태그

- `<table>` : 테이블 컨테이너이며 테이블의 시작과 끝에 삽입

- `<caption>` : 표 제목

- `<thead>` : 테이블의 헤딩 셀 그룹

- ` <tbody>` : 테이블의 데이터가 들어가는 셀 그룹

-  `<tfoot>` : 테이블의 바닥 셀 그룹

- `<tr>` : 행 그룹. td와 th를 포함

- `<th>` : 제목 셀

- ` <td>` : 데이터 셀



### 하이퍼링크

`<a>`태그는 href 속성을 이용해 URL또는 HTML페이지 내의 앵커로 이동가능하다.

```html
<a href="url" 또는 "url#앵커이름" 또는 "#앵커이름" target="html페이지가 출력될 창 위치" download="클릭하면 파일 다운로드하게 설정">
텍스트를 누르면 이동합니다. </a>
```

만약 이미지에 하이퍼링크를 거는 경우,

```html
<a href="http://tbbrother.tistory.com" target="_black">

<img src="walle.png" alt="블로그"> </a>
```

로 해당주소로 새창으로 이동하도록 구현한다.

- 타겟속성

 _blank : 새 윈도우

 _self : 현재 윈도우

 _parent : 부모 윈도우

 _top : 브라우저 윈도우

- 앵커만들기

 HTML5에서는 이전버전과 달리 태그의 id 속성에 앵커이름을 지정하면 그 위치에 앵커가 만들어진다. 

 ex) 

`<p id="앵커1"></p>`

   <a href="#앵커1"> 앵커1로 가기 </a>



### **인라인 프레임  태그**

 아이프레임 태그는 html 페이지 내에 내장 윈도우를 만들어 다른 html을 출력케하는 태그이며 그 창을 인라인프레임이라고 부른다.

ex) `<iframd src="인라인프레임.html" width="200" height="150"></iframe>`

​	***src="URL"***

​	***srcdoc="HTML문서"***

​	***name="윈도우이름"***

​	***width="폭"***

​	**height="높이"**

iframe 태그를 출력하지 않는 브라우저에서 출력되는 부분

 인라인태그는 `<body>`태그 내에서만 사용되며, 인라인 프레임안에 또 다른 인라인 프레임을 추가할 수 있다.

------

## .hide()

.hide()는 선택한 요소를 사라지게 합니다.

### 문법 1

<table><tr><td>1</td><td>.hide()</td></tr></table>

선택한 요소를 즉시 사라지게 합니다.

### 문법 2

<table><tr><td>1</td><td>.hide( duration [, easing ] [, complete ] )</td></tr></table>

- duration : 사라지는 데 걸리는 시간입니다. slow, fast, 숫자를 넣을 수 있습니다. 숫자의 단위는 1000분의 1초입니다. 기본값은 400입니다.
- easing : 사라지는 방식입니다. swing과 linear가 가능합니다. 기본값은 swing입니다.
- complete : 사라진 다음 실행할 함수를 넣을 수 있습니다.

### 예제

버튼을 클릭하면 회색 박스가 사라집니다.

- 첫번째 버튼 : 바로 사라집니다.
- 두번째 버튼 : 1초 동안 swing 방식으로 사라집니다.
- 세번째 버튼 : 1초 동안 linear 방식으로 사라집니다.
- 네번째 버튼 : 사라졌다가 다시 나타납니다.

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <title>jQuery</title>
    <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
    <style>
      div.box {
        height: 50px;
        border: 1px solid #bcbcbc;
        background-color: #dadada;
      }
    </style>
    <script>
      $( document ).ready( function() {
        $( 'button.hide1' ).click( function() {
          $( '.box1' ).hide();
        } );
        $( 'button.hide2' ).click( function() {
          $( '.box2' ).hide( 1000 );
        } );
        $( 'button.hide3' ).click( function() {
          $( '.box3' ).hide( 1000, 'linear' );
        } );
        $( 'button.hide4' ).click( function() {
          $( '.box4' ).hide( 1000, 'linear', function() {
            $( this ).show( 1000 );
          } );
        } );
      } );
    </script>
  </head>
  <body>
    <p><button class="hide1">Hide</button></p>
    <p><code>.hide();</code></p>
    <div class="box box1"></div>
    <p><button class="hide2">Hide</button></p>
    <p><code>.hide( 1000 );</code></p>
    <div class="box box2"></div>
    <p><button class="hide3">Hide</button></p>
    <p><code>.hide( 1000, 'linear' );</code></p>
    <div class="box box3"></div>
    <p><button class="hide4">Hide</button></p>
    <p><code>.hide( 1000, 'linear', function() { $( this ).show( 1000 ); } );</code></p>
    <div class="box box4"></div>
  </body>
</html>
```

![img](https://www.codingfactory.net/wp-content/uploads/jquery-hide-01.png)

------

## 특수문자 찾아주는 사이트

마크업을 할 때나 글을 작성할 때 “<” 와 같은 특수문자를 표시하기 위해선 &lt; 와 같이 코드로 입력해야한다.
아래 사이트를 방문해 원하는 특수문자의 코드를 찾아 사용하면 된다.

https://dev.w3.org/html5/html-author/charref

------

https://www.w3schools.com/html/

기초문법 익히는 사이트 

https://poiemaweb.com/html5-syntax

html5추가된 사항 정리해놓은 사이트