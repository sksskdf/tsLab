let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

/*
타입 명시를 의도적으로 적게 사용해보도록 하자.
코드 흐름을 파악하는데에는 타입이 그다지 필요하지 않다.
*/