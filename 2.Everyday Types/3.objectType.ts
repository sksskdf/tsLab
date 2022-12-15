/*
객체 타입
객체는 프로퍼티를 갖는 JavaScript 값을 말한다.
*/

function printCoord(pt: { x: number; y: number }) {
    console.log(pt.x);
    console.log(pt.y);
}

printCoord({ x: 1, y: 2});

/*
옵셔널 프로퍼티

*/