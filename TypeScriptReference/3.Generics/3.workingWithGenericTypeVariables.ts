/*
제네릭 타입 변수 작업 (Working with Generic Type Variables)

제네릭을 사용하기 시작하면, identity와 같은 제네릭 함수를 만들 때, 컴파일러가 함수 본문에 제네릭 타입화된 매개변수를 쓰도록 강요합니다. 
즉, 이 매개변수들은 실제로 any 나 모든 타입이 될 수 있는 것처럼 취급할 수 있게 됩니다.

함수 호출 시마다 인수 arg의 길이를 로그에 찍으려면 어떻게 해야 합니까? 아마 이것을 쓰고 싶을 겁니다:
*/

function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length); // 오류: Type에는 .length 가 없습니다.
  return arg;
}

/*
이렇게 하면, 컴파일러는 arg의 멤버 .length를 사용하고 있다는 오류를 낼 것입니다만, 어떤 곳에서도 arg가 이 멤버가 있다는 것이 명시되어 있지 않습니다. 
이전에 이러한 변수 타입은 any나 모든 타입을 의미한다고 했던 것을 기억하십시오. 따라서 이 함수를 쓰고 있는 사용자는 .length 멤버가 없는 number를 대신 전달할 수도 있습니다

실제로 이 함수가 Type가 아닌 Type의 배열에서 동작하도록 의도했다고 가정해봅시다. 
배열로 사용하기 때문에 .length 멤버는 사용 가능합니다. 다른 타입들의 배열을 만드는 것처럼 표현할 수 있습니다.
*/

function loggingIdentity2<Type>(arg: Type[]): Type[] {
  console.log(arg.length); // 배열은 .length를 가지고 있습니다. 따라서 오류는 없습니다.
  return arg;
}

/*
loggingIdentity의 타입을 “제너릭 함수 loggingIdentity는 타입 매개변수 Type와 Type 배열인 인수 arg를 취하고 Type 배열을 반환한다.”라고 읽을 수 있습니다. 
만약 우리가 number 배열을 넘기면 Type가 number에 바인딩 되므로 함수는 number 배열을 얻게 됩니다. 
전체 타입변수를 쓰는 것보다 하나의 타입으로써 제네릭 타입변수 Type를 사용하는 것은 굉장한 유연함을 제공합니다.

위 예제를 이렇게도 대체할 수 있습니다.
*/

function loggingIdentity3<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // 배열은 .length를 가지고 있습니다. 따라서 오류는 없습니다.
  return arg;
}