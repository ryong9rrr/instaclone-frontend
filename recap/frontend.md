git config --global core.autocrlf true

- react
- react-native > expo / CLI, CLI는 기업에서 쓰인다. 둘다 배울거임

---

## 📖 목차

### Front-End Setup

- #8.0 Create React App
- #8.0.1 delete index-file
- #8.1 Install Library
- #8.2 ~ 8.4 Router setup
- #8.5 Login logic
- #8.6 Reactive Variables
- #8.7 styled-components
- #8.8 styled-components Theme
- #8.9 styled-components GlobalStyles and styled-reset

### Login and Sign-up

- #10.1 Login UI
- #10.2.1 refactoring - using theme
- #10.2.2 SignUp page - router setting
- #10.3 Shared Components
- #10.4 SignUp UI
- #10.5 before react-hook-form
- #10.6 Helmet - title
- #10.7 ~ 10.8.1 react hook form 1
- #10.8.2 react hook form 2
- #10.9 Connecting Apollo client
- #10.10 ~ 10.11 Login
- check connecting server 1
- #10.12 create Account
- #10.13 Redirecting Users
- Redirecting UI 1
- #10.14 Dark Mode
- color edit...

### Feed

- #11.0.1 Header and Layout 1
- #11.0.2 Header and Layout 2
- code fix
- #11.1 ~ 11.2 Header
- #11.3 Avatar
- code fix
- #11.4 ~ 11.5 Photo Component

---

# Front-End Setup

## #8.0 Create React App

react quick start

📌 `npx create-react-app my-app`

typescript로 작업 시 뒤에 `--template typescript` 를 붙이자

## #8.0.1 delete index-file

`App.css` 등 index file 삭제..

## #8.1 Install Library

- [styled-components](https://styled-components.com/) : React에서 css 작업하기에 편리함.

- [react-hook-form](https://react-hook-form.com/)

- [react-router](https://reactrouter.com/)

- [Apollo client - React](https://www.apollographql.com/docs/react/) : 백엔드로 graphql을 사용하고 있고, apollo-server를 통해 작업할거니까...

- [react-helmet-async](https://www.npmjs.com/package/react-helmet-async) : 문서의 `<header>` 관리를 위해, react-helmet 보다 react-helmet-async 를 더 많이쓰는듯([npm trends](https://www.npmtrends.com/react-head-vs-react-helmet-vs-react-helmet-async))

📌 `npm install styled-components react-hook-form react-router-dom @apollo/client graphql react-helmet-async`

- [react-fontawesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react) : 아이콘!

📌

```
npm i @fortawesome/fontawesome-svg-core

npm install @fortawesome/free-solid-svg-icons

npm install @fortawesome/react-fontawesome


//무료제공
npm install @fortawesome/free-brands-svg-icons

npm install @fortawesome/free-regular-svg-icons

```

## #8.2 ~ 8.4 Router setup

처음 app의 구성을 어떻게 할 것인지.. 아키텍처를 어떻게 설계할 것인지... 등의 깊은 고민이 매우 중요하다. (ex. dark-mode, router 등..)

모든 path 조건을 확인한 후 `<NotFound />`가 실행될 것이므로 가장 아래에 둬야함.

- Virtual DOM

  `fucntion.. 이나 const..` 모양으로 만들 수 있음.

- redirect

  `<Redirect to= .. >` 할 수도 있지만 버그체크에 힘들 수 있음, 실제 인스타그램은 리다이렉트 하지 않음, router 고려사항이므로 필요할 때 고려해보자.

## #8.5 Login logic

간단히 생각하면 이러한 로직이지만 `isLoggedIn`의 값을 `<Home />` 아래로 계속 props를 모든 resolver로 보내줘야한다... 이 접근은 너무 비효율적임.

따라서 Apollo-client를 이용해보자.

## #8.6 Reactive Variables

계속해서 props를 보내지않고 로그인 로그아웃등을 할 수 있는 로직 > Apollo client의 reactive variables

## #8.7 styled-components

(대충 styled components 사용하는 내용)

## #8.8 styled-components Theme

대충 styled-components 의 Theme과 reactive variables를 이용한 다크모드 로직구현.

(하지만 새로고침을 하거나 하면 상태값이 사라지기 때문에 나중에 로컬스토리지를 이용해서 손을 좀 볼 것임)

## #8.9 styled-components GlobalStyles and styled-reset

- GlobalStyles를 이용해서 전역적으로 css를 관리한다.

- `reset.css`가 아닌 `styled-reset` 라이브러리를 이용해서 css를 0으로 만든다.

  📌 `npm i styled-reset`

---

# Login and Sign-up

## #10.1 Login UI

Login UI

## #10.2.1 refactoring - using theme

원활한 darkmode 구현을 위해 `color`는 theme에 넣자.

## #10.2.2 SignUp page - router setting

sign-up page 세팅, 로그인 상태면 주소창에 입력해도 null이 뜨도록.

`<Route path="경로">`와 `<Link to="경로">` 의 경로를 동일하게 해줘야함.

## #10.3 Shared Components

- route를 별도로 관리한다.

- 자주쓰는 components들을 나눈다.

## #10.4 SignUp UI

- signUp UI css

- prop type 유효성 검사를 위한 모듈설치

`📌 npm install --save prop-types`

## #10.5 before react-hook-form

> https://velog.io/@ryong9rrr/React-react-hook-form-%EC%98%88%EC%A0%9C

## #10.6 Helmet - title

Helmet component를 이용해서 `header` 제어하기

## #10.7 ~ 10.8.1 react hook form 1

react hook form 소개

> https://velog.io/@ryong9rrr/React-react-hook-form-%EC%98%88%EC%A0%9C

## #10.8.2 react hook form 2

error를 UI로 보여주기

## #10.9 Connecting Apollo client

Apollo client - Apollo-server 연결하기 (Apollo DOCS 참고)

## #10.10 ~ 10.11 Login

login mutation 이용해서 데이터베이스에 연결하기, 로그인에 성공 시 얻어낸 token을 localstorage이용해서 로그인, 로그아웃까지 구현

## check connecting server 1

백앤드 서버에 연결체크

> https://www.apollographql.com/docs/react/api/link/introduction/

## #10.12 create Account

- mutation createAccount... 이후 리다이렉팅은 어떻게할까?

## #10.13 Redirecting Users

1. `useHistory, useLocation`을 이용해서 회원가입 완료 시 message와 함께 id, pw를 input에 담아둠, message는 `<Notification>`이라는 컴포넌트를 만들어서 띄웠음.

2. `useHistory, useLocation`을 이용해서 로그인 시 id, pw를 담아둬서 로그아웃해도 id와 pw가 input에 남아있음

- `useLocation`은 url이 바뀌면 증발하기때문에 id,pw가 저장된 상태에서 회원가입페이지로 넘어갔다가 다시 돌아오면 값이 증발함.

## Redirecting UI 1

회원가입 성공시, 회원가입에 성공했다는 메세지를 2초간 보여준뒤 Login화면으로 리다이렉팅

-> 단점: 성질이 급한 사람들은 2초도 기다리기 싫어할 수 있음.

## #10.14 Dark Mode

`styled component` 의 `theme`과 `makeVar`를 이용한 다크모드 로직 구현

다음에 할 것은 다크모드 시의 color 수정해야함

## color edit 1

라이트모드 - 다크모드의 원활한 색상관리를 위한 코드수정

- 다크모드에서는 단순한 색상구성이 더 낫다.
- `BaseBox`에서는 흰색-검은색 색상 고정
- 거의 모든 경우에서 (basebox같은 경우를 제외한) **색상**은 `styles.js`에서 관리할 수 있도록 한다.

## color edit 2

- 상위 컴포넌트에서 다크모드시 font-color는 하얀색으로 변경시켰는데 `input` 배경색은 하얀색을 유지하므로 글자가 보이지 않았음. 따라서 `input`의 font-color는 black으로 고정시켰다.

## 무슨 문제라도?

Boolean(localStorage.getItem(DARK_MODE))도 되는뎅;

```js
export const darkModeVar = makeVar(
  Boolean(localStorage.getItem(DARK_MODE) === "enabled")
);
```

# Feed

## #11.0.1 Header and Layout 1

난 Header를 Navigation이라고 할거임. 내식대로 layout 짜는중...

## #11.0.2 Header and Layout 2

- Navigation layout 짜기

- 코드 리팩토링 : 최소한의 공통컴포넌트로 축소시켜서 재활용성을 더욱 높였음, margin, width, height, padding 등 상황에 따라 바뀔 수 있는 요소는 그 스크린에서 직접 바꾸도록.

## code fix

- 다크모드를 컴포넌트로 만들어서 재사용이 가능하게끔 분리하였음.

- `instagram` text와 감싸는 컴포넌트의 이름을 바꿈.

- Home 화면의 Logo를 컴포넌트로 만들었음

- 로고 클릭 시 Home화면으로 가도록 Link를 걸었음.

- 로고 옆에 다크모드버튼을 추가하였음.

## #11.1 ~ 11.2 Header

- `Navigation`을 Logo, Search, Icons로 나눴음.

- `apollo.js` > token을 header에 담아야함.

- hook `useUser`

1. token이 없으면 hook을 실행하지않음

2. token이 있으면 백엔드에서 확인(Query-me)

3. token이 이상하면(if me===null) 강제로그아웃 집행.

> Apollo client authentication
> https://www.apollographql.com/docs/react/networking/authentication/

> Apollo link
> https://www.apollographql.com/docs/react/api/link/introduction/

## #11.3 Avatar

- feed 에 avatar 추가(img가 없다면 띄우지 않음.)

- 아이콘에 간단한 css추가(hover)

- `Img` 컴포넌트 만들었음.

  강의에서는 뭐 `<SAvatar><Img ..></SAvatar>` 이런식으로 했는데 이것보다는 그냥 Img 컴포넌트 하나로. (해결가능 + 컴포넌트 재사용 수월해 보임.)

아니 근데.. `Avatar`에 지금 widht,height가 25px로 고정이 되어있는데 이걸 나중에 어떻게 재사용하나?

## code fix

불필요한 코드 정리

- `AvatarImg`에 width,height props를 통해 컴포넌트를 재사용한다.

- `Symbol`에 props로 color지정

## #11.4 ~ 11.5 Photo Component

`Feed` 작업중 ... > `PhotoHeader`, `img`, `Icons`, `Likes` 까지 완료.

- 자주쓰는 컴포넌트 `AvatarImg`의 width, height는 어차피 동일한 값(circle 이니까)이므로 `size`란 props로 관리한다.

- `Icon`에는 링크 등 추후 필요한 작업이 많을 것으로 생각되니 따로 빼버렸음(나중에 const가 아닌 function으로 만들어야할듯)

- `BaseBox`를 props를 이용해서 조금 더 쓸모있게 > `thickBorder`라는 props를 추가하면 border가 2px로.(안하면 1px임.)

- 자주 사용할 것 같은 `FatText`를 span으로 만들었음.
