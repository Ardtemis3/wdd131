document.getElementById("menuButton").addEventListener("click", function() {
    var menu = document.getElementById("menuB");
    menu.classList.toggle("hidden");
});

function handleResize() {
    const menu = document.querySelector(".hidden");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}
function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    const src = clickedElement("src");
    const srcParts = src.split("-");
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newSrc = `${srcParts[0]}-full.jpeg`;
	// insert the viewerTemplate into the top of the body element
    const viewerHTML = viewerTemplate(newSrc, clickedElement.alt);
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewerHTML);
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}
function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}