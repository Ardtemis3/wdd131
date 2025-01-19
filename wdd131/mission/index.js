// newList.classList.add("dark")
const select = document.querySelector("select");
select.addEventListener();
const img = document.querySelector("img");
img.setAttribute("src", "byui-logo_white.png");

const styleSelector = document.getElementByClass('styleSelector');
const body = document.body;

// Function to change the body's class
function changeBodyClass(event) {
  // Get the selected value
  const selectedStyle = event.target.value;

  // Remove all possible classes from the body
  body.className = '';

  // Add the class corresponding to the selected style
  body.classList.add(selectedStyle);
}

// Attach event listener to the select element
styleSelectors.forEach(selector => {
    selector.addEventListener('change', changeBodyClass);
  });
