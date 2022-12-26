//이넘은 특정 값들의 집합을 의미하는 자료형입니다.

//타입스크립트에서 숫자형 이넘은 아래와 같이 선언합니다.

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

//초기값을 지정해주지 않으면 0부터 시작합니다.

enum Response {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: Response): void {
  // ...
}

respond("Captain Pangyo", Response.Yes);

//문자형 이넘은 앞에서 살펴본 숫자형 이넘과 개념적으로는 거의 비슷합니다. 다만, 런타임에서의 미세한 차이가 있습니다.
//일단 문자형 이넘은 이넘 값 전부 다 특정 문자 또는 다른 이넘 값으로 초기화 해줘야 합니다.

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

//또한, 문자형 이넘에는 숫자형 이넘과는 다르게 auto-incrementing이 없습니다. 대신 디버깅을 할 때 숫자형 이넘의 값은 가끔 불명확하게 나올 떄가 있지만 문자형 이넘은 항상 명확한 값이 나와 읽기 편합니다.

//복합 이넘 (Heterogeneous Enums)
//기술적으로 이넘에 문자와 숫자를 혼합하여 생성할 순 있습니다.

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

//하지만 이 방식을 권고하진 않습니다. 최대한 같은 타입으로 이루어진 이넘을 사용하세요.

