const message = "Hello";

message();

const user = {
    name: "harry"
}

user.location;

const announcement = "Hello World!";
 
// 바로 보자마자 오타인지 아실 수 있나요?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();
 
// 아마 아래와 같이 적으려 했던 것이겠죠...
announcement.toLocaleLowerCase();

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
//This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.
  // 이런, 이 블록은 실행되지 않겠군요
}

