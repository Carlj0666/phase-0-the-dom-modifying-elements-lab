document.querySelector("main#main").remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "Carl is the champion";

document.body.appendChild(newHeader);

newHeader.style.color = 'red';