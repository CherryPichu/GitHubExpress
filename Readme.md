### Nodejs - express
- express 에서 구현한 기능을 import 해서 불러올 수 있도록 사전에 만든 라이브러리 모임입니다.
- require("express") 형식으로 선언한 모듈은 자동으로 캐시되어 같은 객체를 반환한다.
  - 참고 : https://kyungyeon.dev/posts/77 
- 각 소스코의 기능은 성격별로 나누어서 저장한다.

#### setting
- session, cookie 등 기본 설정 파일

#### middleware
- login, cash, Colorhash 등 middleware 성격의 설정파일

