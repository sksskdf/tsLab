function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

function someMethod(x: number | string) {
    if (typeof x === 'string') {
        console.log(x[0]);
    } else {
        console.log(x);
    }
}