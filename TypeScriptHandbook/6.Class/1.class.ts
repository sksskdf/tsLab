//클래스의 속성에 readonly 키워드를 사용하면 접근만 가능합니다.
//아래와 같이 접근제한자를 설정할 수도 있습니다.
class Developer {
  private name: string;

  get name(): string {
    return this.name;
  }

  set name(newValue: string) {
    if (newValue && newValue.length > 5) {
      throw new Error("이름이 너무 깁니다");
    }
    this.name = newValue;
  }
}
const josh = new Developer();
josh.name = "Josh Bolton"; // Error
josh.name = "Josh";

//추상 클래스(Abstract Class)는 인터페이스와 비슷한 역할을 하면서도 조금 다른 특징을 갖고 있습니다. 추상 클래스는 특정 클래스의 상속 대상이 되는 클래스이며 좀 더 상위 레벨에서 속성, 메서드의 모양을 정의합니다.

abstract class Developer {
  abstract coding(): void; // 'abstract'가 붙으면 상속 받은 클래스에서 무조건 구현해야 함
  drink(): void {
    console.log("drink sth");
  }
}

class FrontEndDeveloper extends Developer {
  coding(): void {
    // Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
    console.log("develop web");
  }
  design(): void {
    console.log("design web");
  }
}
const dev = new Developer(); // error: cannot create an instance of an abstract class
const josh = new FrontEndDeveloper();
josh.coding(); // develop web
josh.drink(); // drink sth
josh.design(); // design web
