`git config --global core.autocrlf true`

- react
- react-native > expo / CLI, CLI는 기업에서 쓰인다. 둘다 배울거임

---

## 📖 목차

### Front-End Setup

- #8.0 Create React App
- #8.0.1 delete index-file
- #8.1 Install Library

---

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
