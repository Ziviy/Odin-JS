let element = document.createElement("p");
let text = document.createTextNode("Hey I'm red!");
element.appendChild(text);
let section = document.getElementById("container");

section.appendChild(element);
section.lastElementChild.setAttribute("style", "color: red;");

// Adding blue h3
element = document.createElement("h3");
text = document.createTextNode("I'm a blue h3!");
element.appendChild(text);
section.appendChild(element);
section.lastElementChild.style.color = "blue";

// Adding a div
element = document.createElement("div");
element.setAttribute("style", "background-color: pink; border: 1px solid black;");

// Adding an h1 to the div
let h1 = document.createElement("h1");
text = document.createTextNode("I'm in a div");
h1.appendChild(text);
element.appendChild(h1);

// Adding a p to the div
let p = document.createElement("p");
text = document.createTextNode("ME TOO!");
p.appendChild(text);
element.appendChild(p);


section.appendChild(element);



