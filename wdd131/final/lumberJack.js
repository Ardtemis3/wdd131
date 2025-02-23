function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img id = "popImg" src="${pic}" alt="${alt}">
      </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;

	// get the src attribute from that element and 'split' it on the "-"
    // const src = clickedElement("src");
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    const viewerHTML = viewerTemplate(clickedElement.src, clickedElement.alt);
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.body.insertAdjacentHTML("afterbegin", viewerHTML);
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}

function closeViewer(){
    const viewer = document.querySelector(".viewer");
    viewer.remove();
}

const popUpPic = document.querySelector("#pictures");
popUpPic.addEventListener("click", viewHandler);