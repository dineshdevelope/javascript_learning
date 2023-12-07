const listEles = document.getElementsByTagName("li");
/* console.log(listEles[0].textContent); */

//for loop
console.log("Hey, We Coverd The Following Chapters In This InternShip:");
for (let i = 0; i < listEles.length; i++) {
  console.log(listEles[i].textContent);
}

const btnEl = document.querySelector("#btn");
const inputTxt = document.querySelector("#inputTxt");

btnEl.addEventListener("click", (e) => {
  console.log(inputTxt.value);
});
