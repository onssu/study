# prettier

------

##### prettier.printWidth (default: 80)

한줄 내에서 코드를 맞춥니다. 한 줄이 이 글자수를 넘게 되면 줄바꿈되어 코드가 정리됩니다.
한줄로 표현되는 코드가 2줄이 되어버려서 저는 보기가 좋지 않아서 보통 200이상 잡습니다.

##### prettier.tabWidth (default: 2)

텝을 눌렀을 때 몇칸이 띄어지는지를 설정합니다. 저는 보통 4를 놓고 씁니다.

##### prettier.singleQuote (default: false)

홑따옴표를 쓸건지 설정합니다. 기본값은 쌍따옴표가 기본입니다. 코딩을 하면서 홑따옴표를 썼다면 강제로 쌍따옴표로 변경해 버립니다.

##### prettier.trailingComma (default: 'none')

객체, 배열, 함수 등의 후행에 쉼표를 찍을지 제어합니다.

"`none`" - 쉼표를 붙히지 않음
"`es5`" - ES5에서 유효한 후행 쉼표 붙힘 (객체, 배열 등)
"`all`" - 가능하면 후행 쉼표를 붙힘 (함수 인수)

##### prettier.bracketSpacing (default: true)

객체 리터럴 내부의 공백을 제어합니다

##### prettier.jsxBracketSameLine (default: false)

jsx 요소의 마지막 다음 줄에 닫기 `>`를 표시합니다.

##### prettier.parser (default: 'babylon') - JavaScript only

javascript에서 사용되며 파서를 설정합니다. 파서는 'flow'및 'babylon' 2가지만 지원합니다.

##### prettier.semi (default: true)

문장 뒤에 세미콜론을 붙힐지 뺄지를 설정합니다.

##### prettier.useTabs (default: false)

참이면 탭이있는 줄을 들여 쓰기 합니다.

##### prettier.proseWrap (default: 'preserve')

마크 다운은 공백 및 줄박꿈 같은 것이 중요한 요소이므로 여러 줄에 걸쳐 산문을 랩핑합니다.

##### prettier.arrowParens (default: 'avoid')

단독 화살표 함수의 매개 변수 주위에 괄호를 자동으로 붙힘

##### prettier.jsxSingleQuote (default: false)

JSX에서는 큰 따옴표 대신 작은 따옴표를 사용하십시오.

##### prettier.htmlWhitespaceSensitivity (default: 'css')

HTML 파일의 전역 공백 감도를 지정할 수 있습니다. (뭔~ 이야기인지 모르겠네요)

##### prettier.endOfLine (default: 'auto')

이 설정도 무슨말인지 잘 모르겠어요.. 그냥 기본값으로 놓고 씁니다.

##### prettier.quoteProps (default: 'as-needed')

객체의 속성이 인용 될 때 변경합니다.

##### prettier.requireConfig (default: false)

prettierconfig파일을 적용할지를 선택하는 것 같아요

##### prettier.ignorePath (default: .prettierignore)

`.gitignore`처럼 prettier이 적용되지 않게 하려면 `.prettierignore`에 파일명을 기록하면 그 파일은 무시를 합니다
또한 파일 뿐만 아니고 코드내에서 주석으로 `// prettier-ignore`라고 작성하면 해당 코드만 무시합니다.

> html에서는 `<!-- prettier-ignore -->`
> js에서는 `// prettier-ignore`

##### prettier.disableLanguages (default: ["vue"])

이 확장 기능을 비활성화 할 언어 ID 목록입니다.



출처: https://uxgjs.tistory.com/150 [UX 공작소]