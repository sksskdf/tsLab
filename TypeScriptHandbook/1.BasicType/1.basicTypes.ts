/*
타입스크립트 기본 타입
타입스크립트로 변수나 함수와 같은 자바스크립트 코드에 타입을 정의할 수 있습니다.
타입스크립트의 기본 타입에는 크게 다음 12가지가 있습니다.

Boolean
Number
String
Object
Array
Tuple
Enum
Any
Void
Null
Undefined
Never
*/

/*
Array

타입이 배열인 경우 간단하게 아래와 같이 선언합니다.
*/
let arr: number[] = [1, 2, 3];

//또는 아래와 같이 제네릭을 사용할 수 있습니다.

let arr2: Array<number> = [1, 2, 3];

/*
Tuple

튜플은 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미합니다.
*/

let arr3: [string, number] = ["hi", 10];

//만약 정의하지 않은 타입, 인덱스로 접근할 경우 오류가 납니다.

arr3[1].concat("!"); // Error, 'number' does not have 'concat'
arr3[5] = "hello"; // Error, Property '5' does not exist on type '[string, number]'.

/*
Enum

이넘은 C, Java와 같은 다른 언어에서 흔하게 쓰이는 타입으로 특정 값(상수)들의 집합을 의미합니다.
*/

enum Avengers {
  Capt,
  IronMan,
  Thor,
}
let hero: Avengers = Avengers.Capt;

//이넘은 인덱스 번호로도 접근할 수 있습니다.

enum Avengers2 {
  Capt,
  IronMan,
  Thor,
}
let hero: Avengers = Avengers[0];

//만약 원한다면 이넘의 인덱스를 사용자 편의로 변경하여 사용할 수도 있습니다.

enum Avengers3 {
  Capt = 2,
  IronMan,
  Thor,
}
let hero: Avengers3 = Avengers[2]; // Capt
let hero2: Avengers3 = Avengers[4]; // Thor

/*
Any

기존에 자바스크립트로 구현되어 있는 웹 서비스 코드에 타입스크립트를 점진적으로 적용할 때 활용하면 좋은 타입입니다. 단어 의미 그대로 모든 타입에 대해서 허용한다는 의미를 갖고 있습니다.
*/

let str: any = "hi";
let num: any = 10;
let arr: any = ["a", 2, true];

/*
Void

변수에는 undefined와 null만 할당하고, 함수에는 반환 값을 설정할 수 없는 타입입니다.
*/

let unuseful: void = undefined;
function notuse(): void {
  console.log("sth");
}

/*
Never

함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입입니다.
*/

// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
function neverEnd(): never {
  while (true) {}
}
