```html
<!-- HTML주석 -->
```

```javascript
// JavaScript  주석

/*

Java Script & CSS 주석

*/
```

margin padding 차이는?**

margin은 정의된 요소 주위에  공간 여백을 늘리는 반면, padding은 컨텐츠를 기점으로 공간이 생긴다고 보시면 되는데, 

이는 쉽게 생각해서, **위로 공간이 생기는 것이 margin, 아래에 공간이 생기는 것이 padding이라고 생각하시면 됩니다.** 

#### - **margin**

[기본 값]

```css
margin: length|auto|inherit;
```

length : px, pt, cm,%와 같은 수치값을 입력 시킬 수 있습니다.

auto:  수평을 기점으로 자동으로 양옆 속성을 맞춰줍니다.

inherit: 부모 요소를 상속받습니다.

[복합 속성]

```css
p { margin: 25px 50px 75px 100px;}
```

[개별 속성]

```css
p {  margin-top: 100px;  margin-bottom: 100px;  margin-right: 150px;  margin-left: 80px; }
```

- 개별 속성의 top(상단), bottom(하단),right(오른쪽),left(왼쪽) 을 복합으로 묶어놓은 속성은 알아보기 쉽게 각각의 위치에 맞는 수치값을 넣어 마진과 패딩 값을 적용시켜주면 되는데, 복합 속성은 지원하는 수치값이 각각 다르다는 점이 있습니다. 

**복합 속성은 우리가 흔히 알고 있는 4개의 수치값이 상, 하, 좌, 우로 되어있는 것이** **아닌 시계방향으로 이루어져 있습니다.**

**즉 상, 우, 하, 좌로 이루어져 있기 때문에****, (top, right, bottom, left 순서)** 4속성을 사용할 때에는 0시부터 12시까지 시계가 돌아가는 모양을 생각하시면서 작업하면 편리합니다 

- 동시에 적용될 경우는 큰 값만 적용됨

- 상위 요소에 margin 값이 들어있을 경우 하위 요소에 속성을 inherit 으로 설정하여 상속받을 수 있음

* Auto 속성 지정하면 중앙정렬

#### - **padding**

**컨텐츠와 컨테이너 사이에 공간감을 부여하는 padding(패딩) 값은** **margin과 동일한 수치값을 적용하되** **auto 값만 없다고 생각하면 됩니다.**

단, 밀어내는 margin 값과는 다르게 본문을 부풀리는 효과의 padding은 수치가 벗어나는 것을 잡아주는 별도의 기능을 사용할 수 있는데, 그 속성은 box-sizing입니다.

- padding 은 margin과 달리 동시에 값이 적용될 때 합산한 값이 적용된다.

- box-sizing: border-box; 속성을 사용하여 제한해두면 영역이 벗어나지 않고 유지된다.

------

Background-size : background-image 적용 시 이미지 크기 맞춰서 조절가능 그냥 width height 조절과는 다르다

letter-spacing : 글자 간격 양수일수록 넓어짐

text-shadow는 글자에 그림자 효과를 주는 속성입니다.

- 기본값 : none
- 상속 : Yes
- 애니메이션 : Yes
- 버전 : CSS Level 3

### 문법



| 1    | text-shadow: offset-x offset-y blur-radius color \| none \| initial \| inherit |
| ---- | ------------------------------------------------------------ |
|      |                                                              |



- offset-x : 그림자의 수평 거리를 정합니다. (필수)
- offset-y : 그림자의 수직 거리를 정합니다. (필수)
- blur-radius : 흐림 정도를 정합니다. (선택 : 값을 정하지 않으면 0)
- color : 색을 정합니다. (선택 : 값을 정하지 않으면 브라우저 기본값)
- none : 글림자 효과를 없앱니다.
- initial : 기본값으로 설정합니다.
- inherit : 부모 요소의 속성값을 상속받습니다.



**속성 강제 적용 !important 선언**

 !important는 위의 모든 순서를 무시하고, !important을 선언한 속성에 가장 먼저 우선 순위를 부여합니다.

같은 요소에 !important를 한 번 이상 선언하면, 원래의 순서로 되돌아 갑니다.

주의할 점은 !important는 전체 스타일이 아닌 개별 속성에 적용하며 IE6 이전 버전에서 인식되지 않을 수 있습니다

꼭 필요한 경우가 아니라면 되도록 사용하지 않는 게 좋습니다. !important 는 스타일의 자연스런 흐름들 방해하고

  !important를 사용하지 않는다는 것은 css를 제대로 이해하고 있다는 의미입니다.

 **사용 방법:** 선택자 { 속성: 속성값 !important; }

**스타일시트 중복적용 안하려면**
.style not(class name) 

**웹 폰트 적용방법**

- https://moolgogiheart.tistory.com/89

- https://medium.com/@hyunalee419/feconf-korea-웹폰트의-사용과-최적화-이상진-58c210fa77c4

**Mouse position 관련 효과**

* 마우스를 올리고 있는 동안 : hover

\* 마우스를 클릭하고 있는 동안 : active

\* 마우스를 한번 클릭 한 이후 : visited

```css
/* 마우스 오버(마우스 올렸을때) */
   a:hover{
      background-color: chocolate;
   }

/* 마우스 클릭하고있을때 */
   a:active{
     background-color: aqua;
   }

/* 마우스 한번클릭후 */
   a:visited{
     color: white;
   }


```

​    

**색상표**

https://html-color-codes.info/Korean/

 **스타일시트 우선순위**

https://engkimbs.tistory.com/913
들어가서 읽고 정리해두기



\1. 사용자 스타일 시트, 중요 

\2. 제작자 스타일 시트, 중요 

\3. 제작자 스타일 시트, 일반 

\4. 사용자 스타일 시트 일반 

\5. 브라우저 스타일 시트



\1. 속성값 뒤의 !important 

\2. 태그에 inline으로 style 속성 지정

\3. 선택자가 #id

\4. 선택자가 .class 및 pseudo 클래스(:hover같은 것)

\5. 선택자가 tag 이름



```css
* {

} /* a=0 b=0 c=0 d=0 => 0점 */

ul {
} /* a=0 b=0 c=0 d=1 => 1점 (태그)*/

li:first-child {
} /* a=0 b=0 c=1 d=1 => 11점 (pseudo-class, 태그)*/

ul li {
} /* a=0 b=0 c=0 d=2 => 2점 (2태그)*/

ul ol .red-tag {
} /* a=0 b=0 c=1 d=2 => 12점 (1클래스 2태그) */

#blue-tag {
} /* a=0 b=1 c=0 d=0 => 100점 (1아이디)*/
```

