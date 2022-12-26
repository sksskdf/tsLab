//제네릭은 C#, Java 등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징입니다. 특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용됩니다.

//제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것을 의미합니다. 아래 코드를 보겠습니다.

function getText(text) {
  return text;
}

//위 함수는 text라는 파라미터에 값을 넘겨 받아 text를 반환해줍니다. hi, 10, true 등 어떤 값이 들어가더라도 그대로 반환합니다.

getText("hi"); // 'hi'
getText(10); // 10
getText(true); // true

function getText<T>(text: T): T {
  return text;
}

//위 함수는 제네릭 기본 문법이 적용된 형태입니다. 이제 함수를 호출할 때 아래와 같이 함수 안에서 사용할 타입을 넘겨줄 수 있습니다.

getText<string>("hi");
getText<number>(10);
getText<boolean>(true);

//제네릭을 사용하는 이유

//또 다른 예제를 살펴보겠습니다.

function logText(text: string): string {
  return text;
}

//위 코드는 인자를 하나 넘겨 받아 반환해주는 함수입니다. 마치 리눅스의 echo 명령어와 같은 역할을 하죠.
//여기서 이 함수의 인자와 반환 값은 모두 string으로 지정되어 있지만 만약 여러 가지 타입을 허용하고 싶다면 아래와 같이 any를 사용할 수 있습니다.

function logText(text: any): any {
  return text;
}

//이렇게 타입을 바꾼다고 해서 함수의 동작에 문제가 생기진 않습니다.
//다만, 함수의 인자로 어떤 타입이 들어갔고 어떤 값이 반환되는지는 알 수가 없습니다. 왜냐하면 any라는 타입은 타입 검사를 하지 않기 때문입니다.

//이러한 문제점을 해결할 수 있는 것이 제네릭입니다. 아래 코드를 보겠습니다.
function logText<T>(text: T): T {
  return text;
}

//먼저 함수의 이름 바로 뒤에 <T> 라는 코드를 추가했습니다. 그리고 함수의 인자와 반환 값에 모두 T 라는 타입을 추가합니다.
//이렇게 되면 함수를 호출할 때 넘긴 타입에 대해 타입스크립트가 추정할 수 있게 됩니다.
//따라서, 함수의 입력 값에 대한 타입과 출력 값에 대한 타입이 동일한지 검증할 수 있게 됩니다.

// #1
const text = logText<string>("Hello Generic");
// #2
const text = logText("Hello Generic");

//제네릭 타입
//제네릭 인터페이스에 대해 알아보겠습니다. 아래의 두 코드는 같은 의미입니다.

function logText<T>(text: T): T {
  return text;
}
// #1
let str: <T>(text: T) => T = logText;
// #2
let str: { <T>(text: T): T } = logText;

//제네릭 제약 조건

function logText<T>(text: T): T {
  console.log(text.length); // Error: T doesn't have .length
  return text;
}

//인자의 타입에 선언한 T는 아직 어떤 타입인지 구체적으로 정의하지 않았기 때문에 length 코드에서 오류가 납니다.
//이럴 때 만약 해당 타입을 정의하지 않고도 length 속성 정도는 허용하려면 아래와 같이 작성합니다.

interface LengthWise {
  length: number;
}

function logText<T extends LengthWise>(text: T): T {
  console.log(text.length);
  return text;
}

