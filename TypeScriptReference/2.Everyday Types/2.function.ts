/*
함수는 JavaScript에서 데이터를 주고 받는 주요 수단이다.
TypeScript에서는 함수의 입력 및 출력 타입을 지정할 수 있다.
*/

//매개변수 타입 표시
function greet(name: string) {
    console.log(`Hello, ${name.toUpperCase()}!`)
}

greet(42); //error!

//반환 타입 표시
function getFavoriteNumber(): number {
    return 26;
}

//반환 타입을 명시해주지 않아도 TypeScript가 return문을 바탕으로 반환 타입을 추론한다.