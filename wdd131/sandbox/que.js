// Select the dropdown element(s) by class
const styleSelectors = document.querySelectorAll('.styleSelector');
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

// Attach event listeners to all elements with the class "styleSelector"
styleSelectors.forEach(selector => {
  selector.addEventListener('change', changeBodyClass);
});