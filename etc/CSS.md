# CSS

------

Css, html 연결 방법 inline, style, link // /**/

선택자를 이용, 하지만 태그별 적용 원하면 class, id 속성 사용함.

id는 태그별로 고유 값을 가져야함 (중복X), class는 여러 태그에 같은 class 가능

.id #class , 바로 아래 태그는 자식태그, 아래에 있는 모든 태그는 후손태그

Div > 자식, div > 후손, 태그가 여러개 있는 경우라면 뒤에서부터 좁혀나가며 찾음

Div.자식[속성] 으로도 적용 가능, 콤마 사용하여 두가지 동시에 적용 가능

------

## Box-Model

![img](https://cdn.filepicker.io/api/file/4XNqriWaTAqdsIo7hIWq)

Content : 보통 태그가 차지하는 공간, width, height

Padding : 여유공간, 스크롤바는 padding공간 안에 생성됨, 순서는 top right bottom left

Border : 테두리, width에 padding과 border는 포함되지 않음. 사이즈 계산하는게 귀찮다면 box-sizing:border-box를 주면 border까지 포함하여 계산할수 있음. (기본값은 box-sizing:content-box)

Margin : 다른 태그와의 거리를 나타냄, 무조건 width에는 불포함

------

## Position 

Defult ) Static  - 가장 기본 상태, 왼 -> 오, 위 -> 아래 로 쌓임

Relative - top, right, bottom, left 속성 사용 가능, static 기준 태그 안쪽 방향으로 주어진 픽셀만큼 이동함 (바깥쪽으로 이동하게 하고 싶으면 음수로 주면 됨), 보통 나중에 나온 태그가 더 위에 배치됨 (z-index로 조절 가능)

Absolute - static속성을 가지고 있지 않은 부모를 기준으로 움직임, 조상태그 중 relative, absolute, fixed가 없다면 가장 위의 태그가 기준이 됨. absolute가 되면 div여도 더는 width: 100%가 아님.

Fixed - 특정 위치에 항상 고정, div여도 width가 100%가 아님.

------

## 정렬

보통 부모태그에 text-align를 사용하면 자식태그도 정렬됨. (가로정렬)

세로정렬은 보통 vertical-align:middle 속성을 사용하나, 다른 태그를 기준으로 정렬됨 (옆의 다른 태그가 있어야 그 태그에 맞춰 정렬이 됨)

가장 쉬운 방법은..

```css
display: flex;
align-items: center;
```

이나 IE에서 문제가 있음...!!!! 해결방법은?

1.helper 태그를 쓴다 -> margin, padding 0을 줘도 간격이 발생함. Inline-block의 문제점

2.테이블 효과 (display:table, table-cell 이용) -> 정렬은 쉬우나 width, height 조절 어려움

3.position:realtive,top:50%,transform:translateY(-50%);->inline-block 간격 문제 발생 -> **display:inline-block 대신 float:left 사용하면 문제 해결!!**

4.float사용 -> 그 태그만 붕 떠버림 나머지 태그가 정렬됨. (없애려면 clear), 부모태그가 float속성의 자식태그 인식을 못함. 높이 0이 되어버림, 인식하게 하려면 overflow:auto, hidden을 주어야 정상적으로 높이를 인식함.

------

## CSS 적용 우선순위 :star:

- 기본적으로 뒤에 나오는 css가 우선순위가 높습니다. 
- !important > inline style attribute > id > class, 다른 attribute, 수도클래스(:first-child같은 것) > tag element, 수도엘레먼트(::before같은 것) 순으로 우선순위가 높습니다.
- 우선순위가 같다면 개수가 많은 css가 우선순위가 높습니다.

!important와 inline style attribute는 실무에서 사용 제한하는 경우 많음 (최후의 수단)

------

## Z-Index

일단 z-index는 position이 relative거나 absolute여야 동작합니다. 먼저 position이 static인 태그들이 나오는 순서대로 쌓이고, 그 위에 relative나 absolute인 태그들이 나오는 순서대로 쌓입니다.

- position 속성이 없는 태그들은 나오는 순서대로 쌓입니다. :star:
- position 속성이 있는 태그들은 없는 태그들보다 위에 나오는 순서대로 쌓입니다.
- position 속성에 z-index까지 있다면 z-index가 큰 태그가 위에 쌓입니다.
- 하지만 z-index가 아무리 크더라도 부모 태그의 z-index가 더 우선입니다. :star:

------

clear 속성은 보통 float 속성을 해제할 때 많이 사용합니다.

 

float은 블록요소를 강제로 좌우배치할 때 쓰이는데요,

하지만 float을 사용하게 되면 float이 설정된 요소는 브라우저가 높이 값을 인지하지 못하기 때문에

이때 clear을 사용해줍니다.

clear의 속성은 clear은 취소하다라는 의미를 가지고 있는 것에 걸맞게 float 값을 해제해주어 높이 값을 인식합니다.

 

\* float 해제하는 방법

float을 해제하는 방법은 총 6가지 방법이 있습니다.

\1. float된 요소의 부모태그에 강제로 높이 값을 지정해줍니다. (단점 : 반응형시 자동 높이 값 설정 불가)

\2. float된 요소의 부모태그에 overflow:hidden을 적용해줍니다. (단점 : 해당 요소 안의 컨텐츠를 박스 외부로 표현해줄 수 없음)

\3. float된 요소의 부모태그에 overflow:auto를 적용해줍니다. (단점 : 특정 브라우저에서 스크롤 바가 표시 됨)

\4. float된 요소의 부모태그에 float을 또 설정해줍니다. (단점 : 가운데 배치 불가능)

\5. float된 요소의 다음에 나오는 태그에 clear:both를 지정합니다.(단점 : clear:both가 적용된 요소에는 margin-top 적용 불가)

\6. float된 요소의 부모태그에 가상요소를 만들고 해당 요소에 clear:both를 지정해줍니다. **권장

 

\* clear 속성

clear:none // 기본 값으로 clear를 설정하지 않은 것과 같습니다.

clear:left // 왼쪽으로 붙는 float 정렬을 취소합니다.

clear:right // 오른쪽으로 붙는 float 정렬을 취소합니다.

clear:both // 오른쪽 왼쪽 모두 붙는 float 정렬을 취소합니다.

 

\* 가상요소

가상요소 ::after를 사용해줍니다.

float된 요소의 부모태그::after{

  content:'';

  display:block;

  clear:both;

}

------

## Flex (Flexible Box, Flexbox)

레이아웃 배치 전용 기능으로 고안됨, float와 inline-block을 이용한 방식보다 강력하고 편함 !!! 

Grid가 구현이 어려운 경우도 있고, IE에서는 Grid의 lagacy버전만 지원하기 때문에 둘 다 알아둬야 함

IE 10은 자기만의 독자적인 스펙을 지원하고 11은 그래도 표준 스펙을 지원함. -> 11이라면 Flex적극적으로 사용해도 된다 !! 버그 <<<<<< 편리함

![img](https://studiomeal.com/wp-content/uploads/2020/01/02.jpg)

Flex의 속성은 두 가지로 나뉨

- 컨테이너에 적용하는 속성
- 아이템에 적용하는 속성

### display:flex;

![img](https://studiomeal.com/wp-content/uploads/2020/01/03.jpg)

![img](https://studiomeal.com/wp-content/uploads/2020/01/07-1.jpg)

자신이 가진 내용물 만큼의 width를 차지함 (마치 inline요소처럼)

![img](https://studiomeal.com/wp-content/uploads/2020/01/08-1.jpg)

inline-flex는 block과 inline-block의 관계를 생각하면 된다. 배치보다는 컨테이너가 주변 요소들과 어떻게 어우러질지 결정하는 값이다. (inline-block처럼 동작함)

![img](https://studiomeal.com/wp-content/uploads/2020/01/04-1.jpg)

### flex-direction

아이템이 배치되는 축의 방향을 결정하는 속성. 오뎅꼬지 방향을 어디로 할건지 정하는 것.

row, column, row-reverse, column-reverse 4가지 속성이 있음.

![img](https://studiomeal.com/wp-content/uploads/2020/01/05-1.jpg)

### Flex-wrap

컨테이너가 아이템들을 한 줄에 담을 여유 공간이 없을 때 줄바꿈을 어떻게 할 것인가를 결정하는 속성

nowrap(default), wrap, wrap-reverse 3가지가 있음

![img](https://studiomeal.com/wp-content/uploads/2020/01/06-1.jpg)

### flex-flow (flex-directionr과 flex-wrap을 한꺼번에)

ex) Flex-flow: row wrap;

![img](https://studiomeal.com/wp-content/uploads/2020/01/09-1.jpg)

정렬, justify 메인축 방향으로 정렬, align은 수직축 방향으로 정렬

### justify-content 메인축 방향 정렬

Flex-start(default), flex-end, center, space-between, space-around, space-evenly

![img](https://studiomeal.com/wp-content/uploads/2020/01/10-1.jpg)

### align-items 수직축 방향 정렬

Stretch(default), flex-start, flex-end, center, baseline

![img](https://studiomeal.com/wp-content/uploads/2020/01/11.jpg)

justify-content: center;
align-item: center; 을 해주면 ! 

![img](https://studiomeal.com/wp-content/uploads/2020/01/12.jpg)

### Align-content 여러 행 정렬

Flex-wrap:wrap;이 설정 된 상태에서, 아이템들의 행이 2줄 이상 되었을 때의 수직축 방향 정렬을 결정

Stretch(default), flex-start, flex-end, center, space-between, space-around, space-evenly

<-- 여기서부터는 flex 아이템에 적용하는 속성들 -->

### Flex-basis 유연한 박스의 기본 영역

Flex 아이템의 기본 크기를 설정함. (flex-direction이 row일 때는 너비, column일 때는 높이)

각종 단위의 수가 들어갈 수 있고, auto(default)는 해당 아이템의 width값을 사용.(따로 설정하지 않았다면 content의 크기), content는 컨텐츠의 크기로, width를 따로 설정하지 않은 경우와 같음

Flex-basis:100px; width:100px; width는 모두 일정하게 100px로 늘어나는 반면에 flex-basis는 100보다 작은 아이템만 늘어났다.

### flex-grow 유연하게 늘리기

flex-basis의 값보다 커질 수 있는지를 결정하는 속성

0보다 크면 flexible박스로 변하고 원래의 크기보다 커지며 빈 공간을 메우게 된다.

flex-grow에 들어가는 숫자의 의미는, 아이템들의 flex-basis를 제외한 **여백** 부분을 **flex-grow에 지정된 숫자의 비율**로 나누어 가진다고 생각하면 된다.

![img](https://studiomeal.com/wp-content/uploads/2020/01/13-1.jpg)

### Flex-shrink 유연하게 줄이기 :star:

flex-grow와 쌍을 이루는 속성, flex-basis의 값보다 작아질 수 있는지를 결정함.

flex-shrink에는 숫자값이 들어가는데, 몇이든 일단 0보다 큰 값이 세팅이 되면 해당 아이템이 유연한(Flexible) 박스로 변하고 flex-basis보다 작아짐.
기본값이 1이기 때문에 따로 세팅하지 않았어도 아이템이 flex-basis보다 작아질 수 있음.

### flex (flex-grow, flex-shrink, flex-basis를 한 번에)

```css
flex: 1 1 auto;
	/* flex-grow: 1; flex-shrink: 1; flex-basis: auto; */
flex: 1 500px;
	/* flex-grow: 1; flex-shrink: 1; flex-basis: 500px; */
flex: 1 1 40%;
```

### Align-self 수직축으로 아이템 정렬

Align-items의 아이템 버전. align-items가 전체 아이템의 수직축 방향 정렬이라면, align-self는 해당 아이템의 수직축 방향 정렬. 개별 설정이 더 우선임 ~

auto(default, align-items 설정을 상속받음), flex-start, flex-end, center, baseline 

### order 배치 순서

각 아이템들의 "시작적" 나열 순서를 결정하는 속성. 실제 구조를 바꾸는 것은 아님. 시각 장애인분들이 사용하는 스크린리더로 화면을 읽을때에 order로 바꾼것은 의미가 없음.

------

## Grid

flex는 한방향 레이아웃 시스템 (1차원), grid는 두 방향 레이아웃 시스템 (2차원)

![img](https://studiomeal.com/wp-content/uploads/2020/01/01-1.jpg)



------

## Display: block, inline, inline-block

우선, html의 태그들은 크게 block 요소와 inline 요소로 나눌 수 있다.

- **block 요소**

```html
<address>, <article>, <aside>, <blockgquote>, <canvas>, <dd>, <div>, <dl>, <hr>, <header>, <form>,<h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <table>, <pre>, <ul>, <p>, <ol>, <video>
```

- **inline 요소**

```html
<a>, <i>, <span>, <abbr>, <img>, <strong>, <b>, <input>, <sub>, <br>, <code>, <em>, <small>, <tt>, <map>, <textarea>, <label>, <sup>, <q>, <button>, <cite>
```

등등 .. ( 둘 다 더 많음 )

![img](https://t1.daumcdn.net/cfile/tistory/99C0353C5B6286C702)

**block**

block은 한 영역을 차지 하는 박스형태을 가지는 성질입니다. 그렇기 때문에 기본적으로 block은 width값이 100%가 됩니다. 그리고 라인이 새로 추가된다는 것을 알 수 있습니다. 

- block은 height와 width 값을 지정 할 수 있다.
- block은 margin과 padding을 지정 할 수 있다.

**inline**

inline은 주로 텍스트를 주입 할 때 사용 되는 형태입니다. 그렇기 때문에 기본적으로 block처럼 width값이 100%가 아닌 컨텐츠 영역 만큼 자동으로 잡히게 되며 라인이 새로 추가 되지 않습니다. 높이 또한 폰트의 크기만큼 잡힙니다.(line-height로 설정이 가능 하긴 합니다.)

- width와 height를 명시 할 수 없다.
- margin은 위아래엔 적용 되지 않는다.
- padding은 좌우는 공간과 시각적인 부분이 모두 적용 되지만 위아래는 시각적으로는 추가되지만 공간을 차지 하지는 않는다.

**inline-block**

inline-block 은 말그대로 inline의 특징과 block의 특징을 모두 가진 요소입니다. inline-block의 특징은 다음과 같습니다.

- 줄바꿈이 이루어지지 않는다.
- block처럼 width와 height를 지정 할 수 있다.
- 만약 width와 height를 지정하지 않을 경우, inline과 같이 컨텐츠만큼 영역이 잡힌다.

------

