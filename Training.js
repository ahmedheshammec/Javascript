const user = {
  name: "Osama",
  country: "Egypt",
  age: 37,
};

let finalData = "";

for (let info in user) {
  finalData += `The ${info} Is => ${user[info]}\n`;
};

console.log(finalData);

