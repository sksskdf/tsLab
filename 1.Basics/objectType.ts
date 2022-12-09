function printName(obj: { first: string; last?: string }) { //optional property
  console.log("The obj's first value is " + obj.x);
  console.log("The obj's last value is " + obj.y);
}

printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

