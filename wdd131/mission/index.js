// newList.classList.add("dark")
const select = document.querySelector("select");
select.addEventListener("change", changeBodyClass);
const img = document.querySelector("img");
img.setAttribute("src", "byui-logo_white.png");

const styleSelector = document.querySelectorAll('.styleSelector');
const body = document.body;

function changeBodyClass(event) {
  const selectedStyle = event.target.value;

  body.className = '';

  body.classList.add(selectedStyle);
}

styleSelector.forEach(selector => {
    selector.addEventListener('change', changeBodyClass);
  });
