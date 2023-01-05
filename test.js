function show() {
  console.log(this.name);
}

const person1 = { name: "AD" };
const person2 = { name: "Anubhav" };

show = show.bind(person1).bind(person2);

show();
