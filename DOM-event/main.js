/**1. Attribute events
 * <h1 onclick="console.log(this.innerText)">DOM Event</h1>;
 * 2. Assign event using the element node
 */
//Cach 2:
let h1Element = document.querySelector("h1");
h1Element.onclick = () => {
  console.log(Math.random());
};
let h2Element = document.querySelectorAll("h2");
h2Element.onclick = (e) => {
  console.log(e.target);
};

for (let i = 0; i < h2Element.length; i++) {
  console.log(h2Element[i]);
}

function xinChao(userName = "No name") {
  console.log("Xin chao ban " + userName);
}

xinChao();
xinChao("Huy Pham");

let plus = (a, b) => {
  return a + b;
};

let totalNum = plus(2, 3);
console.log("total is " + totalNum);

//Object in Javascript

let person = (ten, tuoi) => ({ "Ten: ": ten, "Tuoi: ": tuoi });

console.log(person("Bi Bi", 20));

class User {
  constructor(name, age) {
    (this.ten = name), (this.tuoi = age);
  }
  xinChao() {
    console.log("=>>Xin chao " + this.ten);
  }
}

const user1 = new User("Bi Bo", 23);
console.log("Ten user: " + user1.ten);
console.log("Tuoi user: " + user1.tuoi);
user1.xinChao();
