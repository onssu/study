## .hide()

.hide()는 선택한 요소를 사라지게 합니다.

### 문법 1



| 1    | .hide() |
| ---- | ------- |
|      |         |



선택한 요소를 즉시 사라지게 합니다.

### 문법 2



| 1    | .hide( duration [, easing ] [, complete ] ) |
| ---- | ------------------------------------------- |
|      |                                             |



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

