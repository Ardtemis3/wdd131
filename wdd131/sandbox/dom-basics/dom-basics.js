const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
const img = document.querySelector("img");
img.setAttribute("src", "https://picsum.photos/200");
img.setAttribute("alt", "200");
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);
const newSect = document.createElement("section");
newSect.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript<p>";
document.body.appendChild(newSect);

// const newList = document.createElement("list");
// newList.innerHTML = "olo";
// document.body.append(newList);
const ingredientData = document.createElement("ul");
ingredientData.innerText = ["Pinto Beans", " Corn", " Spices", " Tortillas"];
document.body.appendChild(ingredientData);

const portionData = document.createElement("ul");
portionData.innerText = [" 1 15oz can", " 1 15oz can", " 1 Tbsp", " 8"];
document.body.appendChild(portionData);

// other ways

// function ingredientTemplate(index) {
//     return `<li>${portionData[index]} ${ingredientData[index]}</li>`
// }

// const newList = document.createElement("ul");
// ingredientData.forEach(function(item, index) {
//     newList.innerHTML += ingredientTemplate(index);
// })
// document.body.append(newList);

// newList.classList.add("dark")

// const newList = document.createElement("ul");
// newList.innerHtml = `
// <li>${portionData[0]} ${ingredientData[0]}</li>
// <li>${portionData[1]} ${ingredientData[1]}</li>
// <li>${portionData[2]} ${ingredientData[2]}</li>
// <li>${portionData[3]} ${ingredientData[3]}</li>`;