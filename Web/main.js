const user = {
  name: "Osama",
  country: "Egypt",
  age: 37,
};

let finalData = "";

for (let info in user) {
  finalData += `<div>The ${info} Is => ${user[info]}</div>`;
};

document.body.innerHTML = finalData;