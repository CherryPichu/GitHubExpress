### Nodejs - express
- express 에서 구현한 기능을 require 해서 불러올 수 있도록 사전에 만든 라이브러리 모임입니다.
- 각 소스코의 기능은 성격별로 나누어서 저장한다.


## 라이브러리 소개
### setting 폴더
- session, cookie 등 기본 설정 파일  
  
#### setting/session.js
- nodejs에서 session을 사용할 수 있게 해준다.  
#### setting/color-hash.js
- 각 요청의 고유한 색상 정보를 req.session.color 에 저장한다.
#### setting/swagger.js
- jsdocs을 사용해서 swagger 3.0 을 사용할 수 있도록 한다.

<hr>

### middleware 폴더
- login, cash, Colorhash 등 middleware 성격의 설정파일
- 
 

  

<hr>

## 참고 영역

### require(id) 작동 방식
- 공식문서 https://nodejs.org/api/modules.html#requireid
- 참고 : https://velog.io/@seaworld0125/Node-싱글턴-패턴이-Node.js에서-필요한가
  - require한 모듈은 require.cache에 저장된다.
  - 매번 새로운 require 호출시 캐싱된 객체 인스턴스를 재사용한다.
  - 또한 캐싱 된 객체들은 key값으로 접근하는데 key값은 모듈을 require 할 때 사용한 모듈의 경로이다.
  - 싱글톤 패턴은 구현이 가능하나 코드의 가독성을 위해서 module.exports 를 사용하는 것이 좋다.
  - console.log(express === require("express")) : true
  - 그러나 express() 의 리턴값인 app 은 서로 새로운 인스턴스가 생성된다.
  - console.log(app === require("express")()) : false 
    - app 은 MVC 패턴에서 Controller 역활이다. 여러개의 컨트롤러가 만들어질 수 있다.

### 모듈 분리 개발
- 모듈 분리 개발 참고 : https://baeharam.netlify.app/posts/javascript/module
- 
