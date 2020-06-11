import "./styles.css";
let i = 0;
var bouton = document.querySelector(".enableEthereumButton");

bouton.addEventListener("click", () => {
  i++;
  ethereum.enable();
  console.log(i);
});
