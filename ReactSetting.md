# 리액트 프로젝트 세팅

## 설치
### 리액트 프로젝트 만들기 
```
yarn create react-app 프로젝트 이름
ex) yarn create react-app namelist
```
### 프로젝트 실행
```
cd 프로젝트 이름
yarn start
ex) cd namelist
     yarn start
```
   
## 폴더 정리 및 폴더 구성
### node_modules
- CRA를 구성하는 모든 패키지 소스 코드가 존재하는 폴더
- 리액트 프로젝트 진행하면서 그냥 없는 폴더라고 생각하기
  
### public
- index.html
- data (mock data관리)
- index.html 세팅
```JavaScrupt
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>React 출석부</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```
   
### src
- assets
  - 프로젝트에서 사용할 이미지, 비디오, json파일 등 미디어 파일 저장
- components
  - 공통 컴포넌트 관리 (Header, Footer, Nav 등)
- pages
  - 페이지 단위의 컴포넌트 폴더로 구성
  - ex) Login - Login.js, Login.scss / Main - Main.js, Main.scss
     
🔥 components vs pages
  - 여러 페이지에서 동시에 사용되는 컴포넌트의 경우 components 폴더에서 관리
  - 페이지 컴포넌트의 경우 pages 폴더에서 관리
  - 해당 페이지 내에서만 사용하는 컴포넌트의 경우 해당 페이지 폴더 하위에서 관리하는 것이 좋음!


### 참고
- [근영님 TIL](https://github.com/yyeonggg/TIL/blob/master/React/setting.md)
- [벨로그](https://velog.io/@_seeul/React-%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%EC%A7%84%ED%96%89%ED%95%A0%EB%95%8C-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0%EB%A5%BC-%EC%9E%A1%EB%8A%94%EA%B2%83%EC%9D%B4-%EC%A2%8B%EC%9D%84%EA%B9%8C)
