/*
제네릭 타입

제네릭 인터페이스에 대해 알아보겠습니다. 아래의 두 코드는 같은 의미입니다.
*/

function logText<T>(text: T): T {
  return text;
}
// #1
let str: <T>(text: T) => T = logText;
// #2
let str2: { <T>(text: T): T } = logText;

interface GenericLogTextFn<T> {
  (text: T): T;
}

let myString: GenericLogTextFn<string> = logText;

/*
이와 같은 방식으로 제네릭 인터페이스 뿐만 아니라 클래스도 생성할 수 있습니다. 다만, 이넘(enum)과 네임스페이스(namespace)는 제네릭으로 생성할 수 없습니다
*/
