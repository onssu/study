Webpack

## Webpack을 왜 사용할까?

위에서 살펴보았듯 코드의 재사용성, 쉬운 유지보수 등을 위해서는 모듈 별로 코드를 관리하는 것이 중요하다. 코드의 양이 방대해지면 이의 중요성을 더더욱 커진다.

하지만 javascript는 이를 지원하는 모듈 시스템이 없다. 그렇다면 개발자가 일일이 수작업으로 관리해주어야 할까?

다행히 이런 한계를 극복하기 위해 개발된 도구들이 다양하게 존재한다. 그리고 그 중 하나가 바로 *Webpack*이라는 것이다!

## Webpack이 뭘까

Webpack은 한마디로 **자바스크립트 어플리케이션을 위한 정적 \**모듈 번들러**라고 설명할 수 있다. 즉, 여러 의존 관계에 있는 모듈들을 하나의 js 파일로 번들링하는 역할을 수행한다.

플러그인을 끼우면 번들링 뿐만 아니라 훨씬 확장적인 기능을 사용할 수도 있다.

![img](https://miro.medium.com/max/60/0*gGeQBiVcZpWzlb1y.png?q=20)

![img](https://miro.medium.com/max/2136/0*gGeQBiVcZpWzlb1y.png)

Webpack은 컴파일 과정을 통해 의존관계에 있는 모듈을 엮어서 하나의 번들 파일로 반환한다

** Webpack에 대해 찾아보면 ‘모듈 번들러’라는 단어가 계속적으로 나오는데 번들링이란 여러 개의 파일을 하나의 파일로 만들어주는 작업을 의미한다.



## 장점

Webpack을 사용함으로써 우리가 얻을 수 있는 이점은 다음과 같다.

- 의존 모듈이 하나의 파일로 번들링되기 때문에 별도의 모듈 로더가 필요 없다.
- html 파일에서 script 태그로 다수의 자바스크립트 파일을 로드해야 하는 번거로움을 줄일 수 있다.

![img](https://miro.medium.com/max/60/0*JdMQHipXH_LMLnT_.png?q=20)

![img](https://miro.medium.com/max/1624/0*JdMQHipXH_LMLnT_.png)

지난 프로젝트의 한 html 파일의 스크립트 태그… 모든 페이지에 일일이 필요한 파일들을 하드코딩했다

- 모듈 시스템 관리
- 로더 사용
- 빠른 컴파일

## Webpack의 핵심 개념

[Webpack 공식 사이트](https://webpack.js.org/)는 불친절하게도 자신의 서비스에 대해 제공하는 정보가 그렇게 풍부하지는 않다. 하지만 이것만은 꼭 알아야 하는지 핵심 개념이라며 6가지 개념을 소개하고 있다.*(실습해보니 중요하긴 하다)*

1. **Entry**

내부적인 의존성 그래프의 빌드를 시작하기 위해 webpack이 어디를 향해야 하는지 설정한다.

```
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

\2. **Output**

Webpack이 만들어낸 번들을 저장할 위치, 이름을 설정한다.

아래의 예시대로 한다면 `./dist`라는 경로에 번들링된 모듈이 `my-first-webpack.bundle.js`이라는 이름으로 저장된다.

```
const path = require('path');module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```

\3. **Loaders**

Webpack이 이해할 수 있는 건 자바스크립트, Json 파일 뿐이다.

따라서 loader 설정을 통해 (1)다른 타입의 파일을 처리하고 (2)어플리케이션이 사용할 수 있는 형태로 변환하고 (3)의존성 그래프에 추가하는 역할을 수행시킬 수 있다.

```
const path = require('path');module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```

로더 종류 → https://github.com/webpack/webpack#loaders

\4. **Plugins**

말그대로 플러그인이라 딱히 설명할 게 없었다… 플러그인 기능을 통해서 기능을 확장시킬 수 있다는 것!

```
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in pluginsmodule.exports = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```

\5. **Mode**

`development`, `production`, `none`으로 설정함으로써 webpack을 각 환경에 맞게 일치시킬 수 있다.

- development: 개발용
- production: 배포용. 이 경우에는 알아서 최적화가 적용됨

```
module.exports = {
  mode: 'production'
};
```

\6. **Browser Compatibility**

크롬이나 파이어폭스 등 요즘 웬만한 브라우저들은 **사용자의 업데이트와 관계없이 자바스크립트의 버전을 지원한다. 하지만 IE는 그렇지 않다.

요즘 누가 IE를 쓰냐만은 어쨌든 완전히 0에 수렴하진 않기 때문에 최신 버전의 ES를 지원하지 않는 브라우저에게는 서비스하지 않거나 최신의 기술을 사용하지 못할 수도 있다. 아니면 모든 경우를 고려해 코드를 작성하거나.

Webpack은 ES5-compliant한 브라우저에서도 ES6 스펙의 자바스크립트 코드가 호환 가능하도록 도와준다.

** 이런 브라우저를 에버그린(Evergreen)브라우저라고 부른다고 한다!

# 3. Webpack을 사용해보자

이 포스트에서는 개괄적인 Webpack 사용방법만 훑을 것이다. (블로그에 올라갈 용도로 내용을 수정하다보니 기력이 떨어져서…) 다음 포스트에서 실습 내용을 올릴 예정이다.

Webpack은 기본적으로 Node.js가 설치된 환경에서 사용할 수 있다.

1. `**webpack**`**,** `**webpack-cli**` **모듈 설치**

- `webpack`: webpack의 핵심적인 패키지
- `webpack-cli`: 터미널에서 `webpack` 커맨드를 사용할 수 있게 하는 커맨드라인 도구

```
npm install --save-dev webpack webpack-cli
```

\2. **config 설정**

파일 이름은 기본값이 `webpack.config.js`이다. 만약 다른 이름으로 사용하고 싶다면 조금의 설정이 필요하다.

위에서 보았던 6가지 핵심 개념이 여기에서 사용된다.

`module` 옆에 적힌 babel이라는 것은 에버그린하지 않은 브라우저에서도 최신 자바스크립트가 동작할 수 있도록 도와주는 트랜스파일러의 이름이다.

```
const webpack = require('webpack');  module.exports = {
     mode: 'development',
     entry: {
         app: '...', // 결과물이 app.js로 나옴
     },
     output: {
         path: '...',
         filename: '...', // 옵션으로는 [name].js, [hash].js, [chunkhash].js가 있음
         publicPath: '...',
     },
     module: {}, // 여기에 babel 설정
     plugins: [],
     optimization: {},
     // resolve: 웹팩이 알아서 경로나 확장자를 처리할 수 있게 도와주는 옵션
     resolve: {
         modules: ['node_modules'],
         extensions: ['.js', '.json', '.jsx', '.css'],
     }, 
};
```

\3. **배포용으로 컴파일하기**

아래와 같이 컴파일을 실행시키면 번들 파일이 생성된다!

```
#  컴파일 돼서 output으로 설정한 경로에 컴파일된 파일이 생성됨
npm webpack
```

\4. **html 파일에 번들링된 js 파일 적용하기**

이제, 생성된 번들 파일을 html파일에 적용하기만 하면 된다 :D

# 참고 사이트

1. [모듈](https://tjsdudkim.tistory.com/89)
2. [Webpack](https://webpack.js.org/)
3. [Babel과 Webpack을 이용한 ES6 환경 구축](https://poiemaweb.com/es6-babel-webpack-2)
4. [JavaScript 모듈화 도구, webpack](https://d2.naver.com/helloworld/0239818)
5. [웹팩4(Webpack) 설정하기](https://www.zerocho.com/category/Webpack/post/58aa916d745ca90018e5301d)
6. [Webpack과 Babel로 최신 JavaScript 웹프론트 개발환경 만들기](https://beomi.github.io/2017/10/18/Setup-Babel-with-webpack/)
7. https://medium.com/@hgenie14/%EC%9B%B9%ED%8C%A9-webpack-%EC%9D%84-%EC%95%84%EC%A3%BC-%EA%B1%B0%EC%8B%9C%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%B4%EB%B3%B4%EC%9E%90-d80cc2632af8