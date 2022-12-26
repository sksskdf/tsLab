//유니온 타입(Union Type)이란 자바스크립트의 OR 연산자(||)와 같이 A이거나 B이다 라는 의미의 타입입니다.

//Union Type의 장점
//유니온 타입의 장점은 아래 2개의 코드를 비교하면 바로 알 수 있습니다.
// any를 사용하는 경우
function getAge(age: any) {
  age.toFixe(); // 에러 발생, age의 타입이 any로 추론되기 때문에 숫자 관련된 API를 작성할 때 코드가 자동 완성되지 않는다.
  return age;
}

// 유니온 타입을 사용하는 경우
function getAge(age: number | string) {
  if (typeof age === "number") {
    age.toFixed(); // 정상 동작, age의 타입이 `number`로 추론되기 때문에 숫자 관련된 API를 쉽게 자동완성 할 수 있다.
    return age;
  }
  if (typeof age === "string") {
    return age;
  }
  return new TypeError("age must be number or string");
}

//Intersection Type
//인터섹션 타입(Intersection Type)은 여러 타입을 모두 만족하는 하나의 타입을 의미합니다. 아래 코드를 보겠습니다.

interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: number;
}
type Capt = Person & Developer;

//위 코드는 Person 인터페이스의 타입 정의와 Developer 인터페이스의 타입 정의를 & 연산자를 이용하여 합친 후 Capt 이라는 타입에 할당한 코드입니다. 결과적으로 Capt의 타입은 아래와 같이 정의됩니다.
//이처럼 & 연산자를 이용해 여러 개의 타입 정의를 하나로 합치는 방식을 인터섹션 타입 정의 방식이라고 합니다.

//Union Type을 쓸 때 주의할 점
//앞에서 유니온 타입과 인터섹션 타입을 살펴봤습니다. 아마 논리적으로 유니온 타입은 OR, 인터섹션은 AND라고 생각하시는 분들이 있을텐데요.
//인터페이스와 같은 타입을 다룰 때는 이와 같은 논리적 사고를 주의하셔야 합니다.

interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
function introduce(someone: Person | Developer) {
  someone.name; // O 정상 동작
  someone.age; // X 타입 오류
  someone.skill; // X 타입 오류
}

/*
여기서 introduce() 함수의 파라미터 타입을 Person, Developer 인터페이스의 유니온 타입으로 정의하였는데요. 
유니온 타입은 A도 될 수 있고 B도 될 수 있는 타입이지라고 생각하면 파라미터의 타입이 Person도 되고 Developer도 될테니까 함수 안에서 
당연히 이 인터페이스들이 제공하는 속성들인 age나 skill를 사용할 수 있겠지라고 생각할 수 있습니다. 
하지만, 타입스크립트 관점에서는 introduce() 함수를 호출하는 시점에 Person 타입이 올지 Developer 타입이 올지 알 수가 없기 때문에 
어느 타입이 들어오든 간에 오류가 안 나는 방향으로 타입을 추론하게 됩니다.
*/