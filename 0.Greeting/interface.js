function greeter(person) {
    return "Hello, ".concat(person.firstName, " ").concat(person.lastName);
}
var user = { firstName: "Jane", lastName: "User" };
document.body.textContent = greeter(user);
