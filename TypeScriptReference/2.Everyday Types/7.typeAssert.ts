/*
타입 단언
때로는 TypeScript보다 당신이 어떤 값의 타입에 대한 정보를 더 잘 아는 경우도 존재한다.
예를 들어 코드상에서 document.getElementById가 사용되는 경우, 
TypeScript는 이때 HTMLElement 중에 무언가가 반환된다는 것만을 알 수 있는 반면에, 
당신은 페이지 상에서 사용되는 ID로는 언제나 HTMLCanvasElement가 반환된다는 사실을 이미 알고 있을 수도 있다.

이런 경우, 타입 단언을 사용하면 타입을 좀 더 구체적으로 명시할 수 있다.
*/

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

/*
타입 표기와 마찬가지로, 타입 단언은 컴파일러에 의하여 제거되며 코드의 런타임 동작에는 영향을 주지 않습니다.

꺾쇠괄호를 사용하는 것 또한 (코드가 .tsx 파일이 아닌 경우) 가능하며, 이는 동일한 의미를 가집니다.
*/
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");