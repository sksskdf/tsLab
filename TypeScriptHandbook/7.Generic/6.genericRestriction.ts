/*
제네릭 제약 조건

앞에서 제네릭 타입 변수에서 살펴본 내용 말고도 제네릭 함수에 어느 정도 타입 힌트를 줄 수 있는 방법이 있습니다. 잠시 이전 코드를 보겠습니다.
*/

function logText<T>(text: T): T {
  console.log(text.length); // Error: T doesn't have .length
  return text;
}

/*
인자의 타입에 선언한 T는 아직 어떤 타입인지 구체적으로 정의하지 않았기 때문에 length 코드에서 오류가 납니다. 
이럴 때 만약 해당 타입을 정의하지 않고도 length 속성 정도는 허용하려면 아래와 같이 작성합니다.
*/

interface LengthWise {
  length: number;
}

function logText<T extends LengthWise>(text: T): T {
  console.log(text.length);
  return text;
}

/*
위와 같이 작성하게 되면 타입에 대한 강제는 아니지만 length에 대해 동작하는 인자만 넘겨받을 수 있게 됩니다.
*/

logText(10); // Error, 숫자 타입에는 `length`가 존재하지 않으므로 오류 발생
logText({ length: 0, value: 'hi' }); // `text.length` 코드는 객체의 속성 접근과 같이 동작하므로 오류 없음