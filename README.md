# Project_SmartEmulator


## 0. 프로젝트 실행

```
  1. 클론 이후 npm install 명령으로 http-server 모듈 설치
  2. 터미널에서 npm start 명령
```


스마트폰 에뮬레이션

## 1. 프로그램 구조

![image](https://user-images.githubusercontent.com/49035066/130367084-caf52de5-4f5e-4d43-9cea-d47b4e2dd1d4.png)

- MVC패턴과 유사하게 구현하였습니다.

### 1-1. Controller(Home, Alarm, Image, Memo)

- 각 페이지에서 Event가 발생했을 때 여기서 처리하도록 합니다.
- Home.js : 홈 화면을 구성합니다.
- Alarm.js : 알람 화면을 구성합니다. 알람을 추가하거나 삭제할 때 여기서 model을 조작하여 수행하도록 합니다.
- Memo.js : 메모 화면을 구성합니다. 메모를 추가하면 model에 메모를 추가합니다.
- Image.js : 이미지 화면을 구성합니다. 이미지를 클릭하였을 때 ImageView를 변경하는 작업을 수행합니다.

## 1-2. View(Header...)

- 모든 View 컴포넌트들은 View.js를 상속받습니다.
- Header부터 Alarm, Image, Memo까지 화면에 보여지는 부분을 컴포넌트화 하였습니다.

## 1-3. Model(Storage)

- Storage에서 앱, 메모, 알람, 이미지들을 보관합니다.

## 1-4. router.js

- 라우터는 url이 변경될때마다 적절한 Controller를 불러오도록 합니다.
