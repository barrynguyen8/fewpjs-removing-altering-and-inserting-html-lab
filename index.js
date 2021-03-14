// Write your code here!
main.remove();

let element = document.createElement("h1");
document.body.appendChild(element);
element.id ='victory'

let newHeader = document.querySelector("h1#victory");

element.innerHTML ="YOUR-NAME is the champion";
