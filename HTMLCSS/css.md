Style sheet 내부, 외부 적용방법 익숙해지기



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

**스타일시트 중복 안하려면**
.style not(class name) 이런 형식으로 해준다.