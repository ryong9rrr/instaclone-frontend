# instaclone frontend(React)

## ๐ค ์ถ๊ฐํ ๊ธฐ๋ฅ ์๊ฐํด๋ณด๊ธฐ

- `Footer.js`, `DownloadApp.js` ๋์ค์ ์์ ํด์ผํจ

- `Login.js`์์ ํ์ด์ค๋ถ์ผ๋ก ๋ก๊ทธ์ธ ๋งํฌ๋ก ๋ฐ๊ฟ ๊ฒ

- `Notification`์ด 5์ดํ์ ์ฌ๋ผ์ง๋๋ฐ, "ํ์ธ"๋ฒํผ์ ๋๋ฅด๋ฉด ๋ฐ๋ก ์ฌ๋ผ์ง๋๋ก ํ๋ฉด์ ๋ฆฌ๋ค์ด๋ ํ ์ํค๋ ๊ฒ์ ์ด๋ป๊ฒ ๊ตฌํํ ๊น?
  (์๊ฐํด๋ณธ๊ฒ: ์ซ์๊ฐ 0์ด๋๋ฉด ๋ฆฌ๋ค์ด๋ ํ๋๋๋ฐ ํ์ธ๋ฒํผ์ ๋๋ฅด๋ฉด ์ซ์๋ฅผ 0์ผ๋ก ๋ง๋๋...๋ก์ง)

- server error์ ์ด๋ป๊ฒ ์ฒ๋ฆฌ๋ฅผ ํด์ผํ๋...

- <del>`Navigation` position fix ํด์ผํจ.</del> (์๋ฃ)

- ๋ฒํผ(์์ด์ฝ ๋ฑ)์ ๊ฐ์ข ๊ธฐ๋ฅ ์ถ๊ฐํด์ผํจ.

- ๋ก๊ทธ์์ํ๊ณ  ๋ก๊ทธ์ธํ๋ฉด ์  ๊ณ์ ์ ์บ์๊ฐ ๋จ์์์..(์ข์์ ๋ฌธ์  ๋ฑ) ์๋ก๊ณ ์นจ์ ํ๋ฉด ๋ค์ ์บ์๊ฐ ์ด๊ธฐํ ๋๋๊น ๊ด์ฐฎ์๋ฐ.. ํด๊ฒฐ๋ฐฉ์์ ์๊ฐํด๋ณด์.

- Feed์์ comments 2๊ฐ์ฉ ๋ณด์ด๋๋ก ํ๊ธฐ

- "ํ๋กํ ํธ์ง"์ ๋๋ฅด๋ฉด ๋ด ํ๋กํ์ ํธ์งํ  ์ ์๋๋ก ํด์ผ ํ๋๋ฐ... ๋จ์ํ useParams๊ฐ ์๋ authorization์ด ํ์ํ๋ค... ์ด๋ป๊ฒ ํด์ผํ ๊น?

- `Edit screen` - ์ถํ `Layout`๊ณผ `Navigation`์ ํฌํจํ์ฌ ์คํฌ๋ฆฐ์ ๋์ฐ๋๋ก ํด์ผํ  ๊ฒ + ์ถ๊ฐ์ ์ธ ๋ด๋ถ ๋ผ์ฐํฐ ์ค์  (๋ด๋ถ์ ์ค์์น๋ฅผ ํด์ค์ "/", "...", "..." ํ๋ฉด ๋ ๋ฏ?)

---

## ๐ ๋ชฉ์ฐจ

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
- #11.6 isLiked
- #11.7 prop-types, Liking Photos
- #11.8 refetchQueries
- #11.9 ~ 11.10.1 updating cache, method 1
- #11.10.2 updating cache, method 2
- code fix
- #11.11 ~ 11.12 Comments
- #11.13 Parsing Hashtags 1
- #11.14 Parsing Hashtags 2
- #11.15 cache Modify
- Timelag
- PushComment CSS
- #11.16 PushComment Form
- #11.17 ~ 18 PushComment cache update
- CommentModal
- #11.19 DeleteComment
- networkerror, RestrictRoute

### Profile

- #12.0 useParams
- #12.1 Queries and Fragments
- #12.2 apollo keyFields
- Profile screen Header + react img
- Profile screen Header 2
- Profile NavLink
- Profile NavLink, Footer, grid ์์์ค...
- Profile Grid
- Profile Grid + media query
- Profile Card
- Profile Card hover
- Card Icon, clean-up bug
- #12.3 ~ 12.4 Follow - UnFollow ViewButton
- #12.5 Follow-unFollow refetchQuery
- #12.6 ~ 12.8 Follow-unFollow cache update
- NavModal : z-index, overflow:hidden
- NavModal UI, FaIcons, Edit screen
- NavModal toggle
- Profile Followers Followings Box - Router & UI 1
- Navigation Header fix(postion sticky)

---

# Front-End Setup

## #8.0 Create React App

react quick start

๐ `npx create-react-app my-app`

typescript๋ก ์์ ์ ๋ค์ `--template typescript` ๋ฅผ ๋ถ์ด์

## #8.0.1 delete index-file

`App.css` ๋ฑ index file ์ญ์ ..

## #8.1 Install Library

- [styled-components](https://styled-components.com/) : React์์ css ์์ํ๊ธฐ์ ํธ๋ฆฌํจ.

- [react-hook-form](https://react-hook-form.com/)

- [react-router](https://reactrouter.com/)

- [Apollo client - React](https://www.apollographql.com/docs/react/) : ๋ฐฑ์๋๋ก graphql์ ์ฌ์ฉํ๊ณ  ์๊ณ , apollo-server๋ฅผ ํตํด ์์ํ ๊ฑฐ๋๊น...

- [react-helmet-async](https://www.npmjs.com/package/react-helmet-async) : ๋ฌธ์์ `<header>` ๊ด๋ฆฌ๋ฅผ ์ํด, react-helmet ๋ณด๋ค react-helmet-async ๋ฅผ ๋ ๋ง์ด์ฐ๋๋ฏ([npm trends](https://www.npmtrends.com/react-head-vs-react-helmet-vs-react-helmet-async))

๐ `npm install styled-components react-hook-form react-router-dom @apollo/client graphql react-helmet-async`

- [react-fontawesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react) : ์์ด์ฝ!

๐

```
npm i @fortawesome/fontawesome-svg-core

npm install @fortawesome/free-solid-svg-icons

npm install @fortawesome/react-fontawesome


//๋ฌด๋ฃ์ ๊ณต
npm install @fortawesome/free-brands-svg-icons

npm install @fortawesome/free-regular-svg-icons

```

## #8.2 ~ 8.4 Router setup

์ฒ์ app์ ๊ตฌ์ฑ์ ์ด๋ป๊ฒ ํ  ๊ฒ์ธ์ง.. ์ํคํ์ฒ๋ฅผ ์ด๋ป๊ฒ ์ค๊ณํ  ๊ฒ์ธ์ง... ๋ฑ์ ๊น์ ๊ณ ๋ฏผ์ด ๋งค์ฐ ์ค์ํ๋ค. (ex. dark-mode, router ๋ฑ..)

๋ชจ๋  path ์กฐ๊ฑด์ ํ์ธํ ํ `<NotFound />`๊ฐ ์คํ๋  ๊ฒ์ด๋ฏ๋ก ๊ฐ์ฅ ์๋์ ๋ฌ์ผํจ.

- Virtual DOM

  `fucntion.. ์ด๋ const..` ๋ชจ์์ผ๋ก ๋ง๋ค ์ ์์.

- redirect

  `<Redirect to= .. >` ํ  ์๋ ์์ง๋ง ๋ฒ๊ทธ์ฒดํฌ์ ํ๋ค ์ ์์, ์ค์  ์ธ์คํ๊ทธ๋จ์ ๋ฆฌ๋ค์ด๋ ํธ ํ์ง ์์, router ๊ณ ๋ ค์ฌํญ์ด๋ฏ๋ก ํ์ํ  ๋ ๊ณ ๋ คํด๋ณด์.

## #8.5 Login logic

๊ฐ๋จํ ์๊ฐํ๋ฉด ์ด๋ฌํ ๋ก์ง์ด์ง๋ง `isLoggedIn`์ ๊ฐ์ `<Home />` ์๋๋ก ๊ณ์ props๋ฅผ ๋ชจ๋  resolver๋ก ๋ณด๋ด์ค์ผํ๋ค... ์ด ์ ๊ทผ์ ๋๋ฌด ๋นํจ์จ์ ์.

๋ฐ๋ผ์ Apollo-client๋ฅผ ์ด์ฉํด๋ณด์.

## #8.6 Reactive Variables

๊ณ์ํด์ props๋ฅผ ๋ณด๋ด์ง์๊ณ  ๋ก๊ทธ์ธ ๋ก๊ทธ์์๋ฑ์ ํ  ์ ์๋ ๋ก์ง > Apollo client์ reactive variables

## #8.7 styled-components

(๋์ถฉ styled components ์ฌ์ฉํ๋ ๋ด์ฉ)

## #8.8 styled-components Theme

๋์ถฉ styled-components ์ Theme๊ณผ reactive variables๋ฅผ ์ด์ฉํ ๋คํฌ๋ชจ๋ ๋ก์ง๊ตฌํ.

(ํ์ง๋ง ์๋ก๊ณ ์นจ์ ํ๊ฑฐ๋ ํ๋ฉด ์ํ๊ฐ์ด ์ฌ๋ผ์ง๊ธฐ ๋๋ฌธ์ ๋์ค์ ๋ก์ปฌ์คํ ๋ฆฌ์ง๋ฅผ ์ด์ฉํด์ ์์ ์ข ๋ณผ ๊ฒ์)

## #8.9 styled-components GlobalStyles and styled-reset

- GlobalStyles๋ฅผ ์ด์ฉํด์ ์ ์ญ์ ์ผ๋ก css๋ฅผ ๊ด๋ฆฌํ๋ค.

- `reset.css`๊ฐ ์๋ `styled-reset` ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ด์ฉํด์ css๋ฅผ 0์ผ๋ก ๋ง๋ ๋ค.

  ๐ `npm i styled-reset`

---

# Login and Sign-up

## #10.1 Login UI

Login UI

## #10.2.1 refactoring - using theme

์ํํ darkmode ๊ตฌํ์ ์ํด `color`๋ theme์ ๋ฃ์.

## #10.2.2 SignUp page - router setting

sign-up page ์ธํ, ๋ก๊ทธ์ธ ์ํ๋ฉด ์ฃผ์์ฐฝ์ ์๋ ฅํด๋ null์ด ๋จ๋๋ก.

`<Route path="๊ฒฝ๋ก">`์ `<Link to="๊ฒฝ๋ก">` ์ ๊ฒฝ๋ก๋ฅผ ๋์ผํ๊ฒ ํด์ค์ผํจ.

## #10.3 Shared Components

- route๋ฅผ ๋ณ๋๋ก ๊ด๋ฆฌํ๋ค.

- ์์ฃผ์ฐ๋ components๋ค์ ๋๋๋ค.

## #10.4 SignUp UI

- signUp UI css

- prop type ์ ํจ์ฑ ๊ฒ์ฌ๋ฅผ ์ํ ๋ชจ๋์ค์น

`๐ npm install --save prop-types`

## #10.5 before react-hook-form

> https://velog.io/@ryong9rrr/React-react-hook-form-%EC%98%88%EC%A0%9C

## #10.6 Helmet - title

Helmet component๋ฅผ ์ด์ฉํด์ `header` ์ ์ดํ๊ธฐ

## #10.7 ~ 10.8.1 react hook form 1

react hook form ์๊ฐ

> https://velog.io/@ryong9rrr/React-react-hook-form-%EC%98%88%EC%A0%9C

## #10.8.2 react hook form 2

error๋ฅผ UI๋ก ๋ณด์ฌ์ฃผ๊ธฐ

## #10.9 Connecting Apollo client

Apollo client - Apollo-server ์ฐ๊ฒฐํ๊ธฐ (Apollo DOCS ์ฐธ๊ณ )

## #10.10 ~ 10.11 Login

login mutation ์ด์ฉํด์ ๋ฐ์ดํฐ๋ฒ ์ด์ค์ ์ฐ๊ฒฐํ๊ธฐ, ๋ก๊ทธ์ธ์ ์ฑ๊ณต ์ ์ป์ด๋ธ token์ localstorage์ด์ฉํด์ ๋ก๊ทธ์ธ, ๋ก๊ทธ์์๊น์ง ๊ตฌํ

## check connecting server 1

๋ฐฑ์ค๋ ์๋ฒ์ ์ฐ๊ฒฐ์ฒดํฌ

> https://www.apollographql.com/docs/react/api/link/introduction/

## #10.12 create Account

- mutation createAccount... ์ดํ ๋ฆฌ๋ค์ด๋ ํ์ ์ด๋ป๊ฒํ ๊น?

## #10.13 Redirecting Users

1. `useHistory, useLocation`์ ์ด์ฉํด์ ํ์๊ฐ์ ์๋ฃ ์ message์ ํจ๊ป id, pw๋ฅผ input์ ๋ด์๋ , message๋ `<Notification>`์ด๋ผ๋ ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค์ด์ ๋์ ์.

2. `useHistory, useLocation`์ ์ด์ฉํด์ ๋ก๊ทธ์ธ ์ id, pw๋ฅผ ๋ด์๋ฌ์ ๋ก๊ทธ์์ํด๋ id์ pw๊ฐ input์ ๋จ์์์

- `useLocation`์ url์ด ๋ฐ๋๋ฉด ์ฆ๋ฐํ๊ธฐ๋๋ฌธ์ id,pw๊ฐ ์ ์ฅ๋ ์ํ์์ ํ์๊ฐ์ํ์ด์ง๋ก ๋์ด๊ฐ๋ค๊ฐ ๋ค์ ๋์์ค๋ฉด ๊ฐ์ด ์ฆ๋ฐํจ.

## Redirecting UI 1

ํ์๊ฐ์ ์ฑ๊ณต์, ํ์๊ฐ์์ ์ฑ๊ณตํ๋ค๋ ๋ฉ์ธ์ง๋ฅผ 2์ด๊ฐ ๋ณด์ฌ์ค๋ค Loginํ๋ฉด์ผ๋ก ๋ฆฌ๋ค์ด๋ ํ

-> ๋จ์ : ์ฑ์ง์ด ๊ธํ ์ฌ๋๋ค์ 2์ด๋ ๊ธฐ๋ค๋ฆฌ๊ธฐ ์ซ์ดํ  ์ ์์.

## #10.14 Dark Mode

`styled component` ์ `theme`๊ณผ `makeVar`๋ฅผ ์ด์ฉํ ๋คํฌ๋ชจ๋ ๋ก์ง ๊ตฌํ

๋ค์์ ํ  ๊ฒ์ ๋คํฌ๋ชจ๋ ์์ color ์์ ํด์ผํจ

## color edit 1

๋ผ์ดํธ๋ชจ๋ - ๋คํฌ๋ชจ๋์ ์ํํ ์์๊ด๋ฆฌ๋ฅผ ์ํ ์ฝ๋์์ 

- ๋คํฌ๋ชจ๋์์๋ ๋จ์ํ ์์๊ตฌ์ฑ์ด ๋ ๋ซ๋ค.
- `BaseBox`์์๋ ํฐ์-๊ฒ์์ ์์ ๊ณ ์ 
- ๊ฑฐ์ ๋ชจ๋  ๊ฒฝ์ฐ์์ (basebox๊ฐ์ ๊ฒฝ์ฐ๋ฅผ ์ ์ธํ) **์์**์ `styles.js`์์ ๊ด๋ฆฌํ  ์ ์๋๋ก ํ๋ค.

## color edit 2

- ์์ ์ปดํฌ๋ํธ์์ ๋คํฌ๋ชจ๋์ font-color๋ ํ์์์ผ๋ก ๋ณ๊ฒฝ์์ผฐ๋๋ฐ `input` ๋ฐฐ๊ฒฝ์์ ํ์์์ ์ ์งํ๋ฏ๋ก ๊ธ์๊ฐ ๋ณด์ด์ง ์์์. ๋ฐ๋ผ์ `input`์ font-color๋ black์ผ๋ก ๊ณ ์ ์์ผฐ๋ค.

## ๋ฌด์จ ๋ฌธ์ ๋ผ๋?

Boolean(localStorage.getItem(DARK_MODE))๋ ๋๋๋;

```js
export const darkModeVar = makeVar(
  Boolean(localStorage.getItem(DARK_MODE) === "enabled")
);
```

# Feed

## #11.0.1 Header and Layout 1

๋ Header๋ฅผ Navigation์ด๋ผ๊ณ  ํ ๊ฑฐ์. ๋ด์๋๋ก layout ์ง๋์ค...

## #11.0.2 Header and Layout 2

- Navigation layout ์ง๊ธฐ

- ์ฝ๋ ๋ฆฌํฉํ ๋ง : ์ต์ํ์ ๊ณตํต์ปดํฌ๋ํธ๋ก ์ถ์์์ผ์ ์ฌํ์ฉ์ฑ์ ๋์ฑ ๋์์, margin, width, height, padding ๋ฑ ์ํฉ์ ๋ฐ๋ผ ๋ฐ๋ ์ ์๋ ์์๋ ๊ทธ ์คํฌ๋ฆฐ์์ ์ง์  ๋ฐ๊พธ๋๋ก.

## code fix

- ๋คํฌ๋ชจ๋๋ฅผ ์ปดํฌ๋ํธ๋ก ๋ง๋ค์ด์ ์ฌ์ฌ์ฉ์ด ๊ฐ๋ฅํ๊ฒ๋ ๋ถ๋ฆฌํ์์.

- `instagram` text์ ๊ฐ์ธ๋ ์ปดํฌ๋ํธ์ ์ด๋ฆ์ ๋ฐ๊ฟ.

- Home ํ๋ฉด์ Logo๋ฅผ ์ปดํฌ๋ํธ๋ก ๋ง๋ค์์

- ๋ก๊ณ  ํด๋ฆญ ์ Homeํ๋ฉด์ผ๋ก ๊ฐ๋๋ก Link๋ฅผ ๊ฑธ์์.

- ๋ก๊ณ  ์์ ๋คํฌ๋ชจ๋๋ฒํผ์ ์ถ๊ฐํ์์.

## #11.1 ~ 11.2 Header

- `Navigation`์ Logo, Search, Icons๋ก ๋๋ด์.

- `apollo.js` > token์ header์ ๋ด์์ผํจ.

- hook `useUser`

1. token์ด ์์ผ๋ฉด hook์ ์คํํ์ง์์

2. token์ด ์์ผ๋ฉด ๋ฐฑ์๋์์ ํ์ธ(Query-me)

3. token์ด ์ด์ํ๋ฉด(if me===null) ๊ฐ์ ๋ก๊ทธ์์ ์งํ.

> Apollo client authentication
> https://www.apollographql.com/docs/react/networking/authentication/

> Apollo link
> https://www.apollographql.com/docs/react/api/link/introduction/

## #11.3 Avatar

- feed ์ avatar ์ถ๊ฐ(img๊ฐ ์๋ค๋ฉด ๋์ฐ์ง ์์.)

- ์์ด์ฝ์ ๊ฐ๋จํ css์ถ๊ฐ(hover)

- `Img` ์ปดํฌ๋ํธ ๋ง๋ค์์.

  ๊ฐ์์์๋ ๋ญ `<SAvatar><Img ..></SAvatar>` ์ด๋ฐ์์ผ๋ก ํ๋๋ฐ ์ด๊ฒ๋ณด๋ค๋ ๊ทธ๋ฅ Img ์ปดํฌ๋ํธ ํ๋๋ก. (ํด๊ฒฐ๊ฐ๋ฅ + ์ปดํฌ๋ํธ ์ฌ์ฌ์ฉ ์์ํด ๋ณด์.)

์๋ ๊ทผ๋ฐ.. `Avatar`์ ์ง๊ธ widht,height๊ฐ 25px๋ก ๊ณ ์ ์ด ๋์ด์๋๋ฐ ์ด๊ฑธ ๋์ค์ ์ด๋ป๊ฒ ์ฌ์ฌ์ฉํ๋?

## code fix

๋ถํ์ํ ์ฝ๋ ์ ๋ฆฌ

- `AvatarImg`์ width,height props๋ฅผ ํตํด ์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฌ์ฉํ๋ค.

- `Symbol`์ props๋ก color์ง์ 

## #11.4 ~ 11.5 Photo Component

`Feed` ์์์ค ... > `PhotoHeader`, `img`, `Icons`, `Likes` ๊น์ง ์๋ฃ.

- ์์ฃผ์ฐ๋ ์ปดํฌ๋ํธ `AvatarImg`์ width, height๋ ์ด์ฐจํผ ๋์ผํ ๊ฐ(circle ์ด๋๊น)์ด๋ฏ๋ก `size`๋ props๋ก ๊ด๋ฆฌํ๋ค.

- `Icon`์๋ ๋งํฌ ๋ฑ ์ถํ ํ์ํ ์์์ด ๋ง์ ๊ฒ์ผ๋ก ์๊ฐ๋๋ ๋ฐ๋ก ๋นผ๋ฒ๋ ธ์(๋์ค์ const๊ฐ ์๋ function์ผ๋ก ๋ง๋ค์ด์ผํ ๋ฏ)

- `BaseBox`๋ฅผ props๋ฅผ ์ด์ฉํด์ ์กฐ๊ธ ๋ ์ธ๋ชจ์๊ฒ > `thickBorder`๋ผ๋ props๋ฅผ ์ถ๊ฐํ๋ฉด border๊ฐ 2px๋ก.(์ํ๋ฉด 1px์.)

- ์์ฃผ ์ฌ์ฉํ  ๊ฒ ๊ฐ์ `FatText`๋ฅผ span์ผ๋ก ๋ง๋ค์์.

## #11.6 isLiked

๋ด๊ฐ ์ข์์๋ฅผ ๋๋ ๋์ง ์๋์ง ํ๋จํ๋ ์คํค๋ง๋ฅผ ๋ฐฑ์๋์์ ์ถ๊ฐํ๊ณ  ํ๋ก ํธ์๋์์ ์ ์ฉํจ.

- fontawesome์ `<svg>` ํ๊ทธ์. ๋์ค์ css์์ ์จ๋จน์.

- fontawesome์์ style ์ ์ฉํ๊ธฐ.

## #11.7 prop-types, Liking Photos

- prop-types

  (ํ์์คํฌ๋ฆฝํธ๊ฐ ์๋๋ผ๋ฉด) ๋ฐฑ์๋์์ data๋ฅผ ๋ฐ์์ค๊ฑฐ๋ ๋๊ฒจ์ฃผ๋ ๊ฒฝ์ฐ type-checking์ ์ ํด์ผํจ. ๋ฐ๋ผ์ data๋ฅผ ํ๊บผ๋ฒ์ ๋ฐ๋ `Post.js` ์ปดํฌ๋ํธ๋ฅผ ์์ฑ, ์ฌ๊ธฐ์ type์ฒดํฌ๋ฅผ ํ๊ณ  ํ์ ์ปดํฌ๋ํธ(`PostHeader` ๋ `PostIcons`)๋ก ๋๊ฒจ์ค๋ค.

- Liking Photos

  `photo`์ id์ ์ ๊ทผ(props๋ก ๋๊ฒจ์ค)ํด์ `useMutation`. ์๋์ ํ๋ค. ํ์ง๋ง ์ค์๊ฐ์ผ๋ก ๋ณํ๋ฅผ ๊ฐ์งํ๋ ค๋ฉด ์ด๋ป๊ฒ ํด์ผํ ๊น? ์๋ก๊ณ ์นจ์ ํ์ง ์๊ณ ๋ ์ปดํฌ๋ํธ๊ฐ ๋ณํํ๋๋ก. ์์ ์ jsp๋ก to-do list๋ฅผ ๋ง๋ค์์๋๋ ๋๊ฐ์ ์ํฉ์ด ์์์. ๊ทธ๋๋ ์๋์ผ๋ก html๊ณผ css๋ฅผ ์กฐ์ํ์๋ค.

## #11.8 refetchQueries

> https://www.apollographql.com/docs/react/data/mutations/#updating-local-data

์ข์์ UI๋ฅผ ํด๊ฒฐํ  ์ ์๋ ๋ฐฉ๋ฒ ์ค ํ๋.. ํ์ง๋ง ๊ณ ์ ์ข์์ ๋๋ฅด๋๊ฑฐ์ Feed ์ ์ฒด๋ฅผ refetchํ๋ ์ฟผ๋ฆฌ๋ฅผ ๋ถ๋ฌ์ค๋ ๊ฒ์ ๋ฑ๋ด๋ ๋ ๋นํจ์จ์ (jsp-todolistํ  ๋ ์จ๋จน์ด๋ดค๋ ๋ฐฉ๋ฒ๋ค ์ค ํ๋์์ง..). ์ฟผ๋ฆฌ์ ๊ท๋ชจ๊ฐ ์๋ค๋ฉด ์ข์ ๋ฐฉ๋ฒ์ด๊ฒ ์ง๋ง ์ฌ๊ธฐ์๋ ์๋. ๋ค์์ ์จ๋จน์ ์๋ ์์ผ๋ ์ผ๋จ ์์๋ง ๋์.

## #11.9 ~ 11.10.1 updating cache, method 1

> https://www.apollographql.com/docs/react/data/mutations/#updating-the-cache-directly

props๋ฅผ ์จ์ ํ ์ ๋ฌ๋ฐ์์ apollo client์ ์บ์๋ฅผ ์ง์ ์ ์ผ๋ก ์๋ฐ์ดํธํ๊ธฐ

## #11.10.2 updating cache, method 2

> https://www.apollographql.com/docs/react/caching/cache-interaction/#readfragment

props๋ฅผ ์ ๋ฌ๋ฐ์ง ๋ชปํ ๊ฒฝ์ฐ, `readFragment`๋ก ์บ์๋ฅผ ์ฝ์ด๋ค์ธ ํ, ์ง์  ์ฐพ์์ `writeFragment`๋ก ์๋ฐ์ดํธ.

## code fix

- `Post`์์ ์ฌ์ง๊ณผ ์์ด์ฝ๋ค์ ํฌํจํ๋ `PhotoBox`๋ฅผ ๋ง๋ค๊ณ  ์ปดํฌ๋ํธ๋ฅผ ์ฎ๊น.

- `Post`์์ ์ข์์, ์บก์์ ํฌํจํ๋ `PhotoInfo`๋ฅผ ๋ง๋ค๊ณ  ์ปดํฌ๋ํธ๋ฅผ ์ฎ๊น.

- `PostIcons`์ margin 10px์ ์ฃผ๊ณ  `PhotoInfo - <div className="photoInfoContainer" style={{ margin: "10px" }}>` ํ์ฌ ์๋์ ์ผ๋ก collapse์ ์ผ์ผ์ผฐ์.

## #11.11 ~ 11.12 Comments

- `Icon.js`์์ ๋ง์ฐ์ค ๊ฐ๋ค๋์๋ font ์ปค์ง๋๊ฒ์ ์ญ์ ํจ.

- ์ปดํฌ๋ํธ ์ํคํ์ฒ ์์ 

  - `PhotoBox` ์๋ ์ฌ์ง, icons, ์ข์์๊ฐ ํฌํจ๋๋ค.
  - `PhotoInfo` ์๋ `username : caption` ๋ง ํฌํจ๋๋ค.
  - ๋ฐ๋ผ์ `Comments`๋ฅผ ๋ถ๋ฆฌํด๋จ๋ค. (Comments์์ map(comment..))

- ์ถ๊ฐ์ ์ผ๋ก ์ฝ๊ฐ์ css ์์ ...

## #11.13 Parsing Hashtags 1

- text์ htmlํ๊ทธ๋ฅผ ์ ์ดํ๋๋ก ํ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ

  ๐`npm i sanitize-html`

  ๊ทธ๋ฆฌ๊ณ  `dangerouslySetInnerHTML`๋ฅผ ์ด์ฉํ์ฌ react์์ html์ ์์ฑํ๋ค.

- caption์ด๋ payload์์ hashtag๋ฅผ ์ฐพ์๋ด๋ ํจ์ `markHashtags`๋ฅผ ๋ง๋ค์์.

- caption๊ณผ payload๊ฐ ๊ณตํต์ผ๋ก ์ฌ์ฉํ๋ ์ปดํฌ๋ํธ `HashtagText`๋ฅผ ๋ง๋ค์์.

## #11.14 Parsing Hashtags 2

- `sanitize-html` ์ญ์ ํ์, hashtag ๋ก์ง๋ณ๊ฒฝ.

- text(caption, payload..)์์ ํด์ฌํ๊ทธword์ ๊ทธ๋ฅ word๋ฅผ ๋ถ๋ฆฌํ๋ `extractHashtags()` ํจ์ ๋ง๋ค์์. ์ฒ์์๋ ์๋์ ๊ฐ์ด ๋ง๋ค์๋๋ฐ ์ด๋ ๊ฒ ํ๋ฉด ์ ๋๊ธดํ์ง๋ง F12ํ๋ฉด ๋์ด์ฐ๊ธฐ๊ฐ.. ์ข ๊ฑฐ์ฌ๋ ธ๋ค. (์ด๋ป๊ฒํด์ผ ๊น๋ํ ์ฝ๋์ผ๊น ใ ใ )

  ```js
  condition(word) ? (
    <React.Fragment key={index}>
      <Link to={`/explore/tags/${word}`}>{word}</Link>{" "}
    </React.Fragment>
  ) : (
    `${word} `
  );
  ```

- caption์ด๋ payload๋ฅผ ๋ด๋นํ๋ ์ปดํฌ๋ํธ `CaptionOrPayload`๋ฅผ ๋ง๋ค๊ณ  ๊ณตํต์ผ๋ก ์ฌ์ฉ.

## #11.15 cache Modify

`readFragment`, `writeFragment`๋ง๊ณ  ๋ค๋ฅธ ๋ฐฉ์์ผ๋ก ์บ์ updateํ๊ธฐ

## Timelag

`createdAt`์์ `Date.now`๋ฅผ ํตํด ์ผ๋ง ์ ์ธ์ง ๊ณ์ฐํ ํ ์ด, ๋ถ, ์๊ฐ ๋ฑ์ผ๋ก ๋ฆฌํดํ๋ ํจ์์ ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค์์.

## PushComment CSS

`pushComment`๋ฅผ ๋ง๋ค๊ณ  `Post` ๋ถ๋ถ css๋ฅผ ์ข ์์ ํ์.

## #11.16 PushComment Form

- `useForm`์ ์ฌ์ฉํด์ ๋๊ธ์ ๋จ๋ค. ํ์ง๋ง ์๋ก๊ณ ์นจ์ ํด์ผ ๋๊ธ์ด ๋ณด์ด๊ฒ ๋จ.

- `mode: onChange`๋ฅผ ํตํด push๋ฒํผ `disable` ๊ตฌํ.

## #11.17 ~ 18 PushComment cache update

- ์๊ฒ ๋ ES6๋ฌธ๋ฒ : ๊ธฐ์กด ๋ฐฐ์ด์ ๊ฐ ์ถ๊ฐํ๊ธฐ

```js
//๊ทธ๋์ push๋ฅผ ์ฌ์ฉํด์ ์ถ๊ฐํ๋๋ฐ... ์ด๊ฒ๋๋ค

const arr = [1, 2, 3];

[...arr, 4];
//arr = [1,2,3,4]
```

- cache๋ฅผ ์กฐ์ํ๊ธฐ ์ํด fake๋ก ์บ์๋ฅผ ๋ง๋ค์์. ๊ทธ๋์ `me`์์ id๋ฅผ ์ถ๊ฐ๋ก ๊ฐ์ ธ์๋ค.

- comment ์บ์๋ฅผ ๋ฐ๋ก ๋ง๋ฌ.

## CommentModal

- hashtag ํ๊ธ์ถ๊ฐ

- ๋์ ๋๊ธ์ผ๋, ์ญ์ ํ  ์ ์๋ ๋ชจ๋ฌ๋ฒํผ, ๋ชจ๋ฌ์ฐฝ ์ถ๊ฐ(๋๋ฌด ํ๋ค์๋ค..)

## #11.19 DeleteComment

- comment ์ญ์ , ์บ์์ญ์ 

- comment๋ฅผ ์ญ์ ํ  ๋ photo์ ์บ์ฌ๋ฐ์ดํฐ์ธ commentsNumber๋ฅผ -1 ํ๊ธฐ ์ํด photoId๋ฅผ ๊บผ๋ด์๋ค.

## networkerror, RestrictRoute

- networkerror ์ฒ๋ฆฌ๋ฅผ ์ด๋ป๊ฒ ํ ์ง ์ฝ์ง... ์ด๋ป๊ฒ ์ฒ๋ฆฌ๋ฅผ ํด์ผ ์ข์๊น.

  1. `throw error`
  2. `window.location.href`๋ฅผ ์ด์ฉํ ๋ฆฌ๋ค์ด๋ ํ.. ์ด๊ฑฐ๋ ์ ์์ ์ผ๋ก ์๋ฒ์ฐ๊ฒฐ์ด ๋ ์ํ์๋ ๋ณด์ฌ์ง๊ฒ ๋๋๋ฐ...์ด ๋ฌธ์ ๋ ๋ ์ด๋ป๊ฒ ํ ๊น..

- `<RestrictRoute>`
  ์ปค์คํ ๋ผ์ฐํธ, ๋ก๊ทธ์ธํ ์ํ์์ sign-upํ๋ฉด์ผ๋ก ๊ฐ๋ คํ๋ฉด home์ผ๋ก ๋ฆฌ๋ค์ด๋ ํ ์ํจ๋ค. ์ด๋, props๋ก `isLoggedIn`์ ์ฃผ๊ฒ ๋๋ฏ๋ก `Route`์์์๋ isLoggedIn ์กฐ๊ฑด๋ฌธ์ ์ญ์ ํ๋ค.

## #12.0 useParams

- `client`๋ฅผ ๋ค์ `index.js`๋ก ์ฎ๊น.

- (์ฒ์๋ถํฐ) `App`์์ ๋ก๊ทธ์ธํ ์ ์  ๋ฐ์ดํฐ(`useUser` ์คํ)๋ฅผ ๋ฐ์์์ Header๋ก ๋ณด๋ธ๋ค.

- `Username` ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค์ด์ PostHeader, PhotoInfo, Comment์ ์ฌํ์ฉํ๊ณ  ๊ทธ ์์ `<Link to...>`๋ฅผ ์ถ๊ฐ(๋๋ฅด๋ฉด ํ๋กํํ๋ฉด์ผ๋ก ๊ฐ ์ ์๋๋ก).

- `App`์์ profile๋ก ๊ฐ๋ Route ์์์ ํ๊ณ  `useParams`๋ฅผ ํ์ฉํ `<Profile>`ํ๋ฉด์ ๋ง๋ค์์.

์ฆ ์ฐ๋ฆฌ๊ฐ ํ์์ ๋ณด๋ ํ๋กํ ํ๋ฉด์ ๊ทธ ๋งํฌ์ ๋ฐ์ดํฐ๊ฐ ์ฒ์๋ถํฐ ์๋ ๊ฒ์ด ์๋๋ผ ๋งํฌ๋ฅผ ํตํด ํด๋น ๋ฐ์ดํฐ์ id ๋ฑ์ ํ์ธํ๊ณ  ๊ทธ๊ฒ์ ํตํด์ data๋ฅผ fetchํ๋ ๊ฒ.

## #12.1 Queries and Fragments

์ค๋ณต๋๋ ์คํค๋ง๋ฅผ Fragment๋ก ๋ฌถ๊ธฐ.

- `Profile`์ `Layout`๋ก ๊ฐ์.

- `Navigation`์ ๊ฐ์ํ๊ธฐ ๋ฒํผ ์ถ๊ฐ.

## #12.2 apollo keyFields

apollo cache์์ ์ ๋ํฌํ ํ๋๋ฅผ ๋ฐ๋ก ๊ด๋ฆฌํ๋ค.

## Profile screen Header + react img

- Profileํ๋ฉด์ `UserHeader`์์์ค...

- react ์ด๋ฏธ์ง ๋ถ๋ฌ์ค๊ธฐ(`Avatar.js`)

  avatar๊ฐ ์๋ค๋ฉด `public > img`ํด๋์์ `noneUser.png`๋ฅผ ๋ถ๋ฌ์จ๋ค.

## Profile screen Header 2

Profile ํ๋ฉด ์์์ค...

- box-sizing ์ ์ธ์์น์ ๋ฐ๋ผ์ ์ ์ฉ์ด ๋ฌ๋ผ์ง.

```
* {
      box-sizing: border-box;
  }

์ ์ ์ธ ์์น์ ๋ฐ๋ผ ์ ์ฉ๋๋ ๊ฒ์ด ๋ฌ๋ผ์ง (body ์ ์ ์ ์ธํ๋ฉด Feed์ comment๊ฐ ๋ฌด๋์ง)
```

- `Icon`์์ ๋ณดํต fontawesome icon์ ๋ฃ๋๋ฐ, ๊ฐ์ด๋ฐ ์ ๋ ฌ์ ์ํด `display: inline-flex; align-items: center;` ์ ์ ์ฉ.

- `NormalButton`์ ์ถ๊ฐ,(๊ธฐ์กด Button์ ํ๋์๋ฐํ์ ํฐ์๊ธ์จ) ๋ ๋ฒํผ์ ๊ฐ๋ก๋ฐฉํฅ padding์ ์กฐ์ ํ๋ props๋ฅผ ์ถ๊ฐํ์.

- `Button`์ ์ด๋ฆ์ ๋ฐ๊พธ๊ณ  ์ถ์ง๋ง... ๊ทธ๋ฅ ๋ด๋น๋ . ๋ณธ๋ `input`์ด์์ง๋ง `button`์ผ๋ก ๋ณ๊ฒฝ, ๊ทธ์ ๋ฐ๋ผ ๋ค๋ฅธ screen๋ค ์์ .

๋ค์์ผ๋ก ํ  ๊ฒ

- Profile์์ ๊ฐ์ด๋ฐ ๋ฒํผ๋ค์ Link๋ฒํผ์ด๋ค. ๋ด๋ถ์ ์์ ๋ผ์ฐํฐ๋ฅผ ์ค์ ํด์ค์ผ ํ ๋ฏ?

- Navigation์์ ๋ชจ๋ฌ์ฐฝ ์ถ๊ฐํด๋ณด๊ธฐ

## Profile NavLink

- ์๋ ์ ์ ๋ฅผ ์ฃผ์์ฐฝ์ ๊ฒ์ํ ๊ฒฝ์ฐ `NotFound`๋ฅผ ๋ฆฌํดํ๋ค.

Router ์ค์ 

- `NavLink`๋ฅผ ์ด์ฉํ์ฌ `NavLink`์ ์ฃผ์์ ์ค์ ๋ ์ฃผ์๊ฐ ๊ฐ๋ค๋ฉด css๋ฅผ ์ถ๊ฐ ํ  ์ ์๋๋ก ํ์์.
- `App.js`์์ profile์ exact๋ฅผ ํด์ , ๋ง์ฐฌ๊ฐ์ง๋ก Profile ๋ด๋ถ ๋ผ์ฐํฐ์์๋ ๊ฒ์๋ฌผ(์ฒซํ๋ฉด)์ exact๋ฅผ ํด์ .
- profile์์ ์ด์ํ ์ฃผ์๋ฅผ ์๋ ฅํ  ๋ ํ๋ฉด ์ ์ฒด๋ก `NotFound`๋ฅผ ๋์ฐ๋ ค๋ฉด `Router`์์๋ค๊ฐ `ProfileHeader, Link..`๋ฅผ ๋ค ๋ณต๋ถํด์ผํ๋๋ฐ ๊ทธ๊ฑด ๋๋ฌด ๊ตฌ๋ ค์ ๊ทธ๋ฅ ๋งํฌ๋ฒํผ ์๋์๋ง ๋์ฐ๋ ๊ฑธ๋ก..

## Profile NavLink, Footer, grid ์์์ค...

- Profile์์ NavLink ๋ง๋ค์์.

- Footer๋ฅผ ์กฐ๊ธ ๋ ๊ตฌ์ฒด์ ์ผ๋ก ๋ง๋ค์์.

- Profile - `UserPosts.js`์์ ์ฌ์ง์ด ๋ณด์ฌ์ง๋ ๊ฒ์ grid๋ก ํ ์ง..flex-box๋ก ํ ์ง ๊ณ ๋ฏผ์ค..

## Profile Grid

- CSS grid๋ฅผ ์ด์ฉํ์ฌ ๋ฐ๋ํ์ ๋ฐฐ์ด ๋ํ๋ด๊ธฐ(๋ฐ์ํ)

## Profile Grid + media query

- media query๋ฅผ ์ด์ฉํ์ฌ ํ๋ฉด์ด ์์์ก์ ๋ grid์ gap์ ์ถ์.

## Profile Card

- `UserPosts`์์ `GridContainer`, `Card`๋ฅผ ๋ถ๋ฆฌํ์์.

**Card**

- file์ด http..๋ก ์์ํ์ง ์๋๋ค๋ฉด `noneImage.jpg`๊ฐ ๋จ๋๋ก ํ์์.

- `Card`์ `useState`๋ฅผ ์ด์ฉํ hover๊ธฐ๋ฅ์ ๋ฃ์์. ๊ธฐ์กด์ ๋๋ hover๋ฅผ ์ ์ฉ์ํฌ๋ `onMouseOver, onMouseOut`์ ์ฌ์ฉํด์ hover๋ถ๋ถ์ด ๊น๋นก์ด๋ ํ์์ด ์์๋๋ฐ ์ด 2๊ฐ์ง ์ด๋ฒคํธ๋ ๊ณ์ํด์ ์คํ๋๊ธฐ ๋๋ฌธ์ด์์. ๋ฐ๋ผ์ hover๋ฅผ ์ ์ฉ์ํฌ ๋๋ `onMouseEnter, onMouseLeave`๋ฅผ ์ฌ์ฉํด์ผํ๋ค.

## Profile Card hover

- `useState`๋ฅผ ์ฌ์ฉํ์ง ์๊ณ  ๋จ์ํ ๊ตฌํํ๊ธฐ. `useState`๋ฅผ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ๊ณผ ๋จ์ํ ๊ตฌํํ๋ ๋ฒ 2๊ฐ์ง๋ฅผ ์ ์ ํ ์ฌ์ฉํด๋ณด์.

## Card Icon, clean-up bug

- Card Icon ๋ถ๋ถ ์๋ฐ์ดํธํจ.

- <img src="public/img/cleanup.png" /> ๋ผ๋ ๋ฒ๊ทธ ๋ฐ์... `Feed`์์ ์ข์์๋ฅผ ๋๋ฅด๊ฑฐ๋ ์ฝ๋ฉํธ๋ฅผ ๋ค๋ ๋ฑ์ data๋ฅผ ๋ณ๊ฒฝํ๊ณ  ํ๋กํ์ ๊ฐ๋ค๊ฐ ๋ค์ ์ข์์๋ฅผ ๋๋ฅด๊ฑฐ๋ ์ฝ๋ฉํธ๋ฅผ ๋ฌ๋ฉด ๋ฐ์... ์์ธ์ ๋์ถฉ ์๊ฒ ๋๋ฐ ์ด๋ป๊ฒ ํด๊ฒฐ์ ํด์ผํ๋...

## #12.3 ~ 12.4 Follow - UnFollow ViewButton

- `styled-component` ํ๊ทธ ๋ฐ๊พธ๊ธฐ. ์ด๋ฏธ ๋ง๋ค์ด๋์ ์ปดํฌ๋ํธ๋ฅผ ์์ด๋งํ ๋, ๋ง๋ค์ด๋์ ์ปดํฌ๋ํธ๊ฐ `div`์ธ๋ฐ ์ด๊ฑฐ๋ฅผ `section`์ผ๋ก ์ฐ๊ณ ์ถ๋ค๋ฉด, `attr`๋ฉ์๋๋ฅผ ์ด์ฉํ์ฌ ํ๊ทธ๋ฅผ ๋ฐ๊ฟ ์ ์์.

- `UserBox` - `ViewButton()` ์ ์ํ ์ฌ๋์ด "๋"๋ผ๋ฉด `EditButton`์ ๋ณด์ฌ์ฃผ๊ณ , ๋ ํ๋ก์ฐ ์ฌ๋ถ์ ๋ฐ๋ผ ๊ฐ๊ธฐ ๋ค๋ฅธ ๋ฒํผ์ ๋ณด์ฌ์ฃผ๊ณ  ์ถ์ ๋, ์ผํญ์ฐ์ฐ์ ์์ ์ผํญ์ฐ์ฐ์๋ฅผ ๋ ๋ฃ๊ณ  ํ๋ ๊ฒ์ ์ข ๊ฐ๋์ฑ์ด ์ข์ง ์๋ค. ๋ฐ๋ผ์ ์ปดํฌ๋ํธ๋ฅผ ๋ฐ๋ก ๋ถ๋ฆฌํด๋๊ณ  ํจ์๋ฅผ ์ด์ฉํ์ฌ ๊ฐ๊ธฐ ๋ค๋ฅธ ๋ฒํผ์ ๋ฆฌํดํ๊ฒ ํ๋ ๋ฐฉ๋ฒ.

## #12.5 Follow-unFollow refetchQuery

ํ๋ก์ฐ/์ธํ๋ก์ฐ๋ฅผ ํ์ ๋ `seeProfile`์ฟผ๋ฆฌ๋ฅผ ๋ค์ ๋ถ๋ฌ์์ ํ๋ฉด ์๋ฐ์ดํธ ํ๊ธฐ. ๋ง์ ์์ ๋ฐ์ดํฐ๋ฅผ ๋ถ๋ฌ์์ผํ๋ค๋ฉด refetchQuery๋ ๊ทธ๋ค์ง ์ข์ ๋ฐฉ๋ฒ์ด ๋์ง ์์ ์ ์๋ค.

`useUser`์ `me`์ฟผ๋ฆฌ๋ฅผ exportํด์ ํ๋ก์ฐ/์ธํ๋ก์ฐ๋ฅผ ํ๊ณ  "๋ด ํ๋กํ"์ ๋ค์ด๊ฐ์ ๋ ํ๋ก์/ํ๋ก์ ์๊ฐ ์ ์ฉ๋๋๋ก ํจ. ๋ฐ๋ผ์ `me`์ฟผ๋ฆฌ์ `totalFollowers, totalFollowing` ํ๋๋ฅผ ์ถ๊ฐํ์.

๋ด ํ๋กํ ์๋ฐ์ดํธ ๋ฐฉ๋ฒ 2๊ฐ์ง ๐ `FollowButton`์์ 2๊ฐ์ง mutation์ refetchQueries์ ํ๋๋ `seeProfile`์ฟผ๋ฆฌ๋ฅผ ๋ถ๋ฌ์์ ๋ด ํ๋กํ์ ์๋ฐ์ดํธํ๊ณ , ํ๋๋ ํ๋๋ฅผ ์ถ๊ฐํ `me`์ฟผ๋ฆฌ๋ฅผ ์ด์ฉํด์ ๋ด ํ๋กํ์ ์๋ฐ์ดํธ ์์ผฐ์.

## #12.6 ~ 12.8 Follow-unFollow cache update

`update`์ `onCompleted` 2๊ฐ์ง๋ฅผ ์ด์ฉํด cache๋ฅผ ์๋ฐ์ดํธํ๊ธฐ. `oncompleted`์์๋ `useApolloClient`๋ฅผ ์ด์ฉํด cache๋ฅผ ๋ถ๋ฌ์์ผํ๋ค.

## NavModal : z-index, overflow:hidden

NavModal ์์์ค...

- `z-index`๋ฅผ ํตํด ์ปดํฌ๋ํธ์ ์์ ์ ํ๊ธฐ

- `overflow:hidden`์ผ๋ก ๋ถ๋ชจ ์ปดํฌ๋ํธ์ ๋ชจ์๋ฆฌ๋ฅผ ๋ฅ๊ธ๊ฒ ๋ง๋ค์์ ๋ ์์ ์ปดํฌ๋ํธ์ ๋ชจ์๋ฆฌ๊ฐ ํ์ด๋์ค์ง ์๋๋ก ํ์์.

## NavModal UI, FaIcons, Edit screen

NavModal UI ์์์ค..

- icon์ ์์์ด ์ ๋ง์ง ์์ margin์ props๋ก ์ค์ ์กฐ์ ํ๋๋กํจ (์ผ์ชฝ์์ ๋๋ฆฐ๋งํผ ์ค๋ฅธ์ชฝ์์ ์ค์)

- `fontawesome`์์ ์์ด์ฝ์ ์ฝ์ผํ ๋ "๊ทธ ์์ด์ฝ์ด ๋ญ์์ง...?" ํ๋ฉฐ ์๊พธ ๋ค์ ์ฐพ๋๊ฒ ์ซ์ด์ `FaIcons`๋ผ๋ ์์ด์ฝ ํตํฉ ํ์ผ์ ์์ฑํจ.

- Edit screen

  - `NavModal`์ ์์ฑํ๋ฉด์ "์ค์ "๋ฒํผ์ ๋๋ฅด๋ฉด Edit screen์ผ๋ก ๊ฐ์ง๋๋ก ํ์์

  - `App.js`์ `Edit screen`์ผ๋ก ๊ฐ์ง๋๋ก ํ๋ `router` ์ถ๊ฐ, `RestrictRoute`๋ฅผ ์ด์ฉํ์ฌ ๋ก๊ทธ์ธํ์ง ์์์ ๋๋ "ํํ๋ฉด" ์ฆ, "๋ก๊ทธ์ธ"ํ๋ฉด์ผ๋ก ๋ฆฌ๋ค์ด๋ ํ ์ํค๋๋ก ํจ.

  - ์ถํ, `Layout`๊ณผ `Navigation`์ ํฌํจํ์ฌ ์คํฌ๋ฆฐ์ ๋์ฐ๋๋ก ํด์ผํ  ๊ฒ + ์ถ๊ฐ์ ์ธ ๋ด๋ถ ๋ผ์ฐํฐ ์ค์ 

## NavModal toggle

- `useState(prev)`๋ฅผ ์ด์ฉํ open, close toggle ๊ตฌํ

- ๋ชจ๋ฌ์ ์ด๊ณ  "ํ๋กํ"์ด๋ "์ ์ฅ๋จ" ๋ฑ ๋งํฌ๊ฐ ๋ฐ๋ ๋ ๋ชจ๋ฌ์ด ๋ซํ์ง ์๋ ์ด์๋ฅผ 2๊ฐ์ง ๋ฐฉ๋ฒ์ผ๋ก ํด๊ฒฐ.
  1. ๋งํฌ๊ฐ ๋ฐ๋๋๋ง๋ค `useEffect`์ ํด๋ฆฐ์์ ์ฌ์ฉํ๊ฑฐ๋...
  2. ๊ทธ๋ฅ `toggleModal`์ `ModalOverlay`๋ฟ๋ง ์๋๋ผ `Button`์ ๋ถ๋ชจ์ปดํฌ๋ํธ์๋ `onClick`์ ์ฉ.

## Profile Followers Followings Box - Router & UI 1

- `ModalContainer`์ `overlay, wrapper, contents` ๋ฅผ ๋ชจ๋ ํตํฉ.

- `CommentModal` ๋ด๋ถ์ ์๋ `state`๋ฅผ ์ ๊ฑฐ, ์ปดํฌ๋ํธ ์์ state๋ฅผ ๋๋ ๊ฒ์ ๋ณ๋ก ์ข์ง ์์ ๊ฒ ๊ฐ์๊ธฐ ๋๋ฌธ.

- `utills.js` - `handleToggleModal` : `setState`๋ฅผ ํ๋ผ๋ฏธํฐ๋ก ๋ฐ์ toggle๋ฒํผ์ ์์ฑํ๋ ํจ์

- ํ๋กํ์์ "ํ๋ก์ฐ", "ํ๋ก์" ๋ฒํผ์ ๋๋ฅด๋ฉด ์น๊ตฌ๋ค์ด ๋ณด์ด๋ ๊ฒ์ `router`๋ก ๊ตฌํ.

- `FollowBox` : "ํ๋ก์ฐ", "ํ๋ก์" ํ๋ฉด์์ ๊ณตํต์ ์ผ๋ก ๊ฐ์ธ์ฃผ๋ ์ปดํฌ๋ํธ

## Navigation Header fix(postion sticky)

`postion: sticky`๋ฅผ ํตํด ๊ฐ๋จํ๊ฒ ํด๊ฒฐ. (๋ณต์กํ๊ฒ ํ  ๊ฒ ์์ด `Layout`์์ ์ปดํฌ๋ํธ ๋ ์ด์์์ ๋ชจ๋ ๊ด๋ฆฌ)
