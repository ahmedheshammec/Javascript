class User {
  constructor(fName, lName, age, email) {
    this.name = {
      first: fName,
      last: lName,
    };
    this.age = age;
    this.email = email;
  }
  sayHello = function () {
    return `Say Hello`;
  };
  sayHi() {
    return `Say Hi`;
  }
}; 

let user1 = new User("Osama", "Elzero", 37, "o@nn.sa");
console.log(user1.name.first); // Output: Osama
console.log(user1.name.last); // Output: Elzero
console.log(user1.age); // Output: 37
console.log(user1.email); // Output: o@nn.sa
console.log(user1.sayHello()); // Output: Say Hello
console.log(user1.sayHi()); // Output: Say Hi