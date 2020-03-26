https://soooprmx.com/archives/7948

참조 .. 정리해놓기 

https://velog.io/@psm8873/SCSS

------

## SCSS STUDY by 수연

```css
div p {
 color: red;
}

div span {
 color: blue;
}
```

기존 CSS는 이렇게 쓰이는 반면에, SCSS는 SCC에서도 구조를 알 수 있게 함

```SCSS
div {
  
 p {
   color: red;
 }
  
 span {
  color: blue;
 }
  
}
```

계속 반복되는 색상이나 크기 같은걸 미리 변수처럼 저장할수 있어 한번 설정해주면 나머지도 다 바뀜

```SCSS
$fontsize(이건 변수명 아무렇게나 원하는대로 설정가능): 12px; 

p {
  font-size: $fontsize;
} //이렇게 변수 형태로 설정 가능. 모든 값 바뀜
```

#### mixin

함수랑 비슷한 기능, css를 재사용하게 함

```scss
//예를들면 flex로 하자
@import 'styles/root.scss';

div {
 display: flex;
 flex-direction: row;
}
//매 번 이렇게 치기 귀찮으니깐

@mixin flexRow() {
 display: flex;
 flex-direction: row;
}
//이렇게 만들고 여기저기서

@inlcude flexRow();
//이렇게만 치면 mixin으로 만든게 적용!

```

#### &

```scss
.sideWrap { ... }

.sideWrpa: hover { ... }
//원래의 이런 형태를

.sideWrap {
...
&:hover { ...}
}
//이렇게 중복을 방지하는 용으로 & 사용 
```



------

