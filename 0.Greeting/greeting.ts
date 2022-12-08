function greeter(person:string) {
    return `Hello, ${person}`;
}

let user:string = "john";

document.body.textContent = greeter(user);