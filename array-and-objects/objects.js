const User = {
    name: "John Doe",
    age: 18,
    location: "Gotham",
    email: "john@doe.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"],
}

console.log(User.email);
console.log(User["email"]);

User.greeting = function(){
    console.log("Hello user");
}
User.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`);
}

console.log(User.greeting());
console.log(User.greetingTwo());

console.log(Object.keys(User));
console.log(Object.values(User));
console.log(Object.entries(User));