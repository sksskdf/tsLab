/*
유니언 타입
기존의 타입을 기반으로 다양한 연산자를 사용하여 새로운 타입을 만들 수 있다.
타입을 조합하려면 첫번째로 유니언 타입을 사용하는 방법이 있다.
유니언 타입은 서로 다른 두 개의 타입들을 사용하여 만든다.
유니언 타입의 값은 타입 조합에 사용된 타입 중 무엇이든 하나를 타입으로 가질 수 있다.
조합에 사용된 각 타입을 유니언 타입의 멤버라고 부른다.
*/

function printId(id: number | string) {
    console.log(`your id is ${id}`);
}

// OK
printId(101);
// OK
printId("202");
// 오류
printId({ myID: 22342 });

/*
TypeScript에서 유니언을 다룰 때는 해당 유니언 타입의 모든 멤버에 대하여 유효한 작업일 때에만 허용된다.
예를 들어 string | number라는 유니언 타입의 경우, string 타입에만 유효한 메서드는 사용할 수 없다.

이를 해결하려면 코드상에서 유니언을 좁혀야 하는데, 이는 타입 표기가 없는 JavaScript에서 벌어지는 일과 동일하다.
좁히기란 TypeScript가 코드 구조를 바탕으로 어떤 값을 보다 구체적인 타입으로 추론할 수 있을 때 발생한다.
*/

function printId2(id: number | string) {
    if (typeof id === "string") {
      // 이 분기에서 id는 'string' 타입을 가집니다
   
      console.log(id.toUpperCase());
    } else {
      // 여기에서 id는 'number' 타입을 가집니다
      console.log(id);
    }
  }