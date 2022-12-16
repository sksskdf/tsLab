/*
Null과 Undefined

JavaScript에는 빈 값 또는 초기화되지 않은 값을 가리키는 두 가지 원시값이 존재합니다. 바로 null과 undefined입니다.
TypeScript에는 각 값에 대응하는 동일한 이름의 두 가지 타입이 존재합니다. 각 타입의 동작 방식은 strictNullChecks 옵션의 설정 여부에 따라 달라집니다.

strictNullChecks가 설정되지 않았을 때:
strictNullChecks가 설정되지 않았다면, 어떤 값이 null 또는 undefined일 수 있더라도 해당 값에 평소와 같이 접근할 수 있으며, 
null과 undefined는 모든 타입의 변수에 대입될 수 있습니다. 
이는 Null 검사를 하지 않는 언어(C#, Java 등)의 동작 방식과 유사합니다. 
Null 검사의 부재는 버그의 주요 원인이 되기도 합니다. 
별다른 이유가 없다면, 코드 전반에 걸쳐 strictNullChecks 옵션을 설정하는 것을 항상 권장합니다.

strictNullChecks
설정되었을 때
strictNullChecks가 설정되었다면, 어떤 값이 null 또는 undefined일 때, 해당 값과 함께 메서드 또는 프로퍼티를 사용하기에 앞서 해당 값을 테스트해야 합니다. 
옵셔널 프로퍼티를 사용하기에 앞서 undefined 여부를 검사하는 것과 마찬가지로, 좁히기를 통하여 null일 수 있는 값에 대한 검사를 수행할 수 있습니다.
*/

function doSomething(x: string | undefined) {
  if (x === undefined) {
    // 아무 것도 하지 않는다
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

/*
Null 아님 단언 연산자 (접미사 !)
TypeScript에서는 명시적인 검사를 하지 않고도 타입에서 null과 undefined를 제거할 수 있는 특별한 구문을 제공합니다. 
표현식 뒤에 !를 작성하면 해당 값이 null 또는 undefined가 아니라고 타입 단언하는 것입니다.
*/

function liveDangerously(x?: number | undefined) {
  // 오류 없음
  console.log(x!.toFixed());
}

//다른 타입 단언과 마찬가지로 이 구문은 코드의 런타임 동작을 변화시키지 않으므로, ! 연산자는 반드시 해당 값이 null 또는 undefined가 아닌 경우에만 사용해야 합니다.