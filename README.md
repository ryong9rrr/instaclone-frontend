# instaclone frontend

git config --global core.autocrlf true

- react
- react-native > expo / CLI, CLI는 기업에서 쓰인다. 둘다 배울거임

## 추가해야할 작업

- `Footer.js`, `DownloadApp.js` 나중에 수정해야함

- `Login.js`에서 페이스북으로 로그인 링크로 바꿀 것

- `Notification`이 5초후에 사라지는데, "확인"버튼을 누르면 바로 사라지도록 하면서 리다이렉팅 시키는 것은 어떻게 구현할까?
  (생각해본것: 숫자가 0이되면 리다이렉팅되는데 확인버튼을 누르면 숫자를 0으로 만드는...로직)

- server error시 어떻게 처리를 해야하누...

- `Navigation` position fix 해야함.

- 버튼(아이콘 등)에 각종 기능 추가해야함.

- 로그아웃하고 로그인하면 전 계정의 캐시가 남아있음..(좋아요 문제 등) 새로고침을 하면 다시 캐시가 초기화 되니까 괜찮은데.. 해결방안을 생각해보자.

- Feed에서 comments 2개씩 보이도록 하기

- "프로필 편집"을 누르면 내 프로필을 편집할 수 있도록 해야 하는데... 단순한 useParams가 아닌 authorization이 필요하다... 어떻게 해야할까?

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

## #11.6 isLiked

내가 좋아요를 눌렀는지 아닌지 판단하는 스키마를 백엔드에서 추가하고 프론트엔드에서 적용함.

- fontawesome은 `<svg>` 태그임. 나중에 css에서 써먹자.

- fontawesome에서 style 적용하기.

## #11.7 prop-types, Liking Photos

- prop-types

  (타입스크립트가 아니라면) 백엔드에서 data를 받아오거나 넘겨주는 경우 type-checking을 잘 해야함. 따라서 data를 한꺼번에 받는 `Post.js` 컴포넌트를 생성, 여기서 type체크를 하고 하위 컴포넌트(`PostHeader` 나 `PostIcons`)로 넘겨준다.

- Liking Photos

  `photo`의 id에 접근(props로 넘겨줌)해서 `useMutation`. 작동은 한다. 하지만 실시간으로 변화를 감지하려면 어떻게 해야할까? 새로고침을 하지 않고도 컴포넌트가 변화하도록. 예전에 jsp로 to-do list를 만들었을때도 똑같은 상황이 있었음. 그때는 수동으로 html과 css를 조작했었다.

## #11.8 refetchQueries

> https://www.apollographql.com/docs/react/data/mutations/#updating-local-data

좋아요 UI를 해결할 수 있는 방법 중 하나.. 하지만 고작 좋아요 누르는거에 Feed 전체를 refetch하는 쿼리를 불러오는 것은 딱봐도 넘 비효율적(jsp-todolist할 때 써먹어봤던 방법들 중 하나였지..). 쿼리의 규모가 작다면 좋은 방법이겠지만 여기서는 아님. 다음에 써먹을 수도 있으니 일단 알아만 두자.

## #11.9 ~ 11.10.1 updating cache, method 1

> https://www.apollographql.com/docs/react/data/mutations/#updating-the-cache-directly

props를 온전히 전달받아서 apollo client의 캐시를 직접적으로 업데이트하기

## #11.10.2 updating cache, method 2

> https://www.apollographql.com/docs/react/caching/cache-interaction/#readfragment

props를 전달받지 못한 경우, `readFragment`로 캐시를 읽어들인 후, 직접 찾아서 `writeFragment`로 업데이트.

## code fix

- `Post`안에 사진과 아이콘들을 포함하는 `PhotoBox`를 만들고 컴포넌트를 옮김.

- `Post`안에 좋아요, 캡션을 포함하는 `PhotoInfo`를 만들고 컴포넌트를 옮김.

- `PostIcons`에 margin 10px을 주고 `PhotoInfo - <div className="photoInfoContainer" style={{ margin: "10px" }}>` 하여 의도적으로 collapse을 일으켰음.

## #11.11 ~ 11.12 Comments

- `Icon.js`에서 마우스 갖다댔을때 font 커지는것을 삭제함.

- 컴포넌트 아키텍처 수정

  - `PhotoBox` 에는 사진, icons, 좋아요가 포함된다.
  - `PhotoInfo` 에는 `username : caption` 만 포함된다.
  - 따라서 `Comments`를 분리해놨다. (Comments에서 map(comment..))

- 추가적으로 약간의 css 수정...

## #11.13 Parsing Hashtags 1

- text에 html태그를 제어하도록 하는 라이브러리

  📌`npm i sanitize-html`

  그리고 `dangerouslySetInnerHTML`를 이용하여 react안에 html을 생성한다.

- caption이나 payload에서 hashtag를 찾아내는 함수 `markHashtags`를 만들었음.

- caption과 payload가 공통으로 사용하는 컴포넌트 `HashtagText`를 만들었음.

## #11.14 Parsing Hashtags 2

- `sanitize-html` 삭제했음, hashtag 로직변경.

- text(caption, payload..)에서 해쉬태그word와 그냥 word를 분리하는 `extractHashtags()` 함수 만들었음. 처음에는 아래와 같이 만들었는데 이렇게 하면 잘 되긴하지만 F12하면 띄어쓰기가.. 좀 거슬렸다. (어떻게해야 깔끔한 코드일까 ㅠㅠ)

  ```js
  condition(word) ? (
    <React.Fragment key={index}>
      <Link to={`/explore/tags/${word}`}>{word}</Link>{" "}
    </React.Fragment>
  ) : (
    `${word} `
  );
  ```

- caption이나 payload를 담당하는 컴포넌트 `CaptionOrPayload`를 만들고 공통으로 사용.

## #11.15 cache Modify

`readFragment`, `writeFragment`말고 다른 방식으로 캐시 update하기

## Timelag

`createdAt`에서 `Date.now`를 통해 얼마 전인지 계산한 후 초, 분, 시간 등으로 리턴하는 함수와 컴포넌트를 만들었음.

## PushComment CSS

`pushComment`를 만들고 `Post` 부분 css를 좀 수정했음.

## #11.16 PushComment Form

- `useForm`을 사용해서 댓글을 단다. 하지만 새로고침을 해야 댓글이 보이게 됨.

- `mode: onChange`를 통해 push버튼 `disable` 구현.

## #11.17 ~ 18 PushComment cache update

- 알게 된 ES6문법 : 기존 배열에 값 추가하기

```js
//그동안 push를 사용해서 추가했는데... 이게되네

const arr = [1, 2, 3];

[...arr, 4];
//arr = [1,2,3,4]
```

- cache를 조작하기 위해 fake로 캐시를 만들었음. 그래서 `me`에서 id를 추가로 가져왔다.

- comment 캐시를 따로 만듬.

## CommentModal

- hashtag 한글추가

- 나의 댓글일때, 삭제할 수 있는 모달버튼, 모달창 추가(너무 힘들었다..)

## #11.19 DeleteComment

- comment 삭제, 캐시삭제

- comment를 삭제할 때 photo의 캐쉬데이터인 commentsNumber를 -1 하기 위해 photoId를 꺼내왔다.

## networkerror, RestrictRoute

- networkerror 처리를 어떻게 할지 삽질... 어떻게 처리를 해야 좋을까.

  1. `throw error`
  2. `window.location.href`를 이용한 리다이렉팅.. 이거는 정상적으로 서버연결이 된 상태에도 보여지게 되는데...이 문제는 또 어떻게 할까..

- `<RestrictRoute>`
  커스텀 라우트, 로그인한 상태에서 sign-up화면으로 가려하면 home으로 리다이렉팅 시킨다. 이때, props로 `isLoggedIn`을 주게 되므로 `Route`안에서는 isLoggedIn 조건문을 삭제했다.

## #12.0 useParams

- `client`를 다시 `index.js`로 옮김.

- (처음부터) `App`에서 로그인한 유저 데이터(`useUser` 실행)를 받아와서 Header로 보낸다.

- `Username` 컴포넌트를 만들어서 PostHeader, PhotoInfo, Comment에 재활용하고 그 안에 `<Link to...>`를 추가(누르면 프로필화면으로 갈 수 있도록).

- `App`에서 profile로 가는 Route 작업을 하고 `useParams`를 활용한 `<Profile>`화면을 만들었음.

즉 우리가 평소에 보는 프로필 화면은 그 링크에 데이터가 처음부터 있는 것이 아니라 링크를 통해 해당 데이터의 id 등을 확인하고 그것을 통해서 data를 fetch하는 것.

## #12.1 Queries and Fragments

중복되는 스키마를 Fragment로 묶기.

- `Profile`을 `Layout`로 감쌈.

- `Navigation`에 가입하기 버튼 추가.

## #12.2 apollo keyFields

apollo cache에서 유니크한 필드를 따로 관리한다.

## Profile screen Header + react img

- Profile화면의 `UserHeader`작업중...

- react 이미지 불러오기(`Avatar.js`)

  avatar가 없다면 `public > img`폴더안의 `noneUser.png`를 불러온다.

## Profile screen Header 2

Profile 화면 작업중...

- box-sizing 선언위치에 따라서 적용이 달라짐.

```
* {
      box-sizing: border-box;
  }

의 선언 위치에 따라 적용되는 것이 달라짐 (body 전에 선언하면 Feed의 comment가 무너짐)
```

- `Icon`안에 보통 fontawesome icon을 넣는데, 가운데 정렬을 위해 `display: inline-flex; align-items: center;` 을 적용.

- `NormalButton`을 추가,(기존 Button은 파란색바탕에 흰색글씨) 두 버튼의 가로방향 padding을 조절하는 props를 추가했음.

- `Button`의 이름을 바꾸고 싶지만... 그냥 내비둠. 본래 `input`이었지만 `button`으로 변경, 그에 따라 다른 screen들 수정.

다음으로 할 것

- Profile에서 가운데 버튼들은 Link버튼이다. 내부에 작은 라우터를 설정해줘야 할듯?

- Navigation에서 모달창 추가해보기

## Profile NavLink

- 없는 유저를 주소창에 검색한 경우 `NotFound`를 리턴한다.

Router 설정

- `NavLink`를 이용하여 `NavLink`의 주소와 설정된 주소가 같다면 css를 추가 할 수 있도록 하였음.
- `App.js`에서 profile에 exact를 해제, 마찬가지로 Profile 내부 라우터에서도 게시물(첫화면)은 exact를 해제.
