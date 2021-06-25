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
