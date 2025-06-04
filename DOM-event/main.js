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
