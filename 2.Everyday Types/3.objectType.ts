/*
객체 타입
객체는 프로퍼티를 갖는 JavaScript 값을 말한다.
*/

function printCoord(pt: { x: number; y: number }) {
  console.log(pt.x);
  console.log(pt.y);
}

printCoord({ x: 1, y: 2 });

/*
옵셔널 프로퍼티
객체 타입에서 일부 또는 모든 프로퍼티를 옵셔널로 지정할 수 있다.
*/

function printName(obj: { first: string; last?: string }) {
  console.log(obj.first);
  console.log(obj.last);
}

printName({ first: "nam" });

/*
자바스크립트에선 존재하지 않는 프로퍼티에 접근할 때, 런타임 오류가 발생하지 않고 undefined 값을 얻게 된다.
이 때문에 옵셔널 프로퍼티를 읽었을 때, 해당 값이 undefined인지 여부를 확인해야 한다.
*/