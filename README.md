# Basic Todo App with React

## 📝 프로젝트 실행 방법

```bash
  # 패키지매니저를 변경하려면 yarn.lock을 삭제 후 npm install & npm start 등을 실행한다.
  $ yarn && yarn dev
```

## 배포 링크

## 🚀 학습 목표

> 다수의 컴포넌트를 페이지로 구성하고 복잡해진 상태를 관리하기

- ✔️ `데스크탑 타겟`의 웹 앱을 구현
- ✔️ 상태 관리를 위해 `Recoil` 활용
- ✔️ `Router`를 활용한 여러 페이지 전환
- ✔️ `React-query`를 활용한 서버와의 통신 구현
- ✔️ `Jest` 이용한 테스트 코드 작성

## ✅ 필수 구현 요구 사항

### Auth

- [x] 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현
  - [x] 이메일 조건: @ 포함
  - [x] 비밀번호 조건: 8자 이상
- [x] 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동
- [x] 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동
  - [x] 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답
  - [x] 응답받은 JWT는 로컬 스토리지에 저장
- [x] 로그인 여부에 따른 리다이렉트 처리를 구현
  - [x] 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트
  - [x] 로컬 스토리지에 토큰이 없는 상태로 `/todo` 페이지에 접속한다면 `/signin` 경로로 리다이렉트

### TODO LIST

- [x] `/todo `경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 하기
  - [x] 목록에서는 TODO의 내용과 완료 여부 표시
  - [x] TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현
  - [x] TODO는 `<li>` tag를 이용해 감싸주기
- [ ] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button 생성
  - [ ] TODO 입력 input에는 `data-testid="new-todo-input"` 속성을 부여
  - [ ] TODO 추가 button에는 `data-testid="new-todo-add-button"` 속성을 부여
  - [ ] 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록
  - [ ] TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보이도록
- [ ] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록
- [ ] TODO 우측에 수정버튼과 삭제 버튼 생성하기
  - [ ] 수정 버튼에는 `data-testid="modify-button"` 속성을 부여
  - [ ] 삭제 버튼에는 `data-testid="delete-button"` 속성을 부여
- [ ] 투두 리스트의 삭제 기능을 구현
  - [ ] 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 하기
- [ ] 투두 리스트의 수정 기능을 구현
  - [ ] TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록
  - [ ] 수정모드에서는 TODO의 내용을 변경할 수 있도록
  - [ ] 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경
    - [ ] 수정 input창에는 `data-testid="modify-input"` 속성을 부여
  - [ ] 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되도록
    - [ ] 제출버튼에는 `data-testid="submit-button"` 속성을 부여
    - [ ] 취소버튼에는 `data-testid="cancel-button"` 속성을 부여
  - [ ] 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록
  - [ ] 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 하기
