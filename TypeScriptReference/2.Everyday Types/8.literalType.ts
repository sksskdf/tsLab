/*
리터럴 타입
리터럴을 유니언과 함께 사용하면, 보다 유용한 개념들을 표현할 수 있게 됩니다. 예를 들어, 특정 종류의 값들만을 인자로 받을 수 있는 함수를 정의하는 경우가 있습니다.
*/

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");

//숫자 리터럴 타입 또한 같은 방식으로 사용할 수 있습니다.

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

//물론, 리터럴이 아닌 타입과도 함께 사용할 수 있습니다.

interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
configure("automatic");

/*
리터럴 추론
객체를 사용하여 변수를 초기화하면, TypeScript는 해당 객체의 프로퍼티는 이후에 그 값이 변화할 수 있다고 가정합니다. 예를 들어, 아래와 같은 코드를 작성하는 경우를 보겠습니다.
*/

const obj = { counter: 0 };
if (someCondition) {
  obj.counter = 1;
}

/*
기존에 값이 0이었던 필드에 1을 대입하였을 때 TypeScript는 이를 오류로 간주하지 않습니다. 
이를 달리 말하면 obj.counter는 반드시 number 타입을 가져야 하며, 0 리터럴 타입을 가질 수 없다는 의미입니다. 
왜냐하면 타입은 읽기 및 쓰기 두 동작을 결정하는 데에 사용되기 때문입니다.
동일한 사항이 문자열에도 적용됩니다.
*/

const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);

/*
위 예시에서 req.method는 string으로 추론되지, "GET"으로 추론되지 않습니다. 
req의 생성 시점과 handleRequest의 호출 시점 사이에도 얼마든지 코드 평가가 발생할 수 있고, 
이때 req.method에 "GUESS"와 같은 새로운 문자열이 대입될 수도 있으므로, TypeScript는 위 코드에 오류가 있다고 판단합니다.

이러한 경우를 해결하는 데에는 두 가지 방법이 있습니다.

1. 둘 중에 한 위치에 타입 단언을 추가하여 추론 방식을 변경할 수 있습니다.
*/

// 수정 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// 수정 2
handleRequest(req.url, req.method as "GET");

/*
수정 1은 req.method가 항상 리터럴 타입 "GET"이기를 의도하며, 이에 따라 해당 필드에 "GUESS"와 같은 값이 대입되는 경우를 미연에 방지하겠다”는 것을 의미합니다. 
수정 2는 “무슨 이유인지, req.method가 "GET"을 값으로 가진다는 사실을 알고 있다”는 것을 의미합니다.

2.as const를 사용하여 객체 전체를 리터럴 타입으로 변환할 수 있습니다.
*/

const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);

/*
as const 접미사는 일반적인 const와 유사하게 작동하는데, 해당 객체의 모든 프로퍼티에 string 또는 number와 같은 보다 일반적인 타입이 아닌 리터럴 타입의 값이 대입되도록 보장합니다.
*/