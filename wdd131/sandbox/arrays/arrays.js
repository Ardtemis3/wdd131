//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`; // not single quote != ' == `/~
  //the html string made from step
}

const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML

const arrGrade = ['A', 'B', 'b'];

function convertGPA(arrGrade) {
  arrGrade = arrGrade.toUpperCase();
  let num = 0
  if (arrGrade == 'A'){
    num = 4.0;
  }
  else if (arrGrade == 'B'){
    num = 3.0;
  }
  else if (arrGrade == 'C'){
    num = 2.0;
  }
  else if (arrGrade = 'D'){
    num = 1.0;
  }
  else{
    num = 0.0
  }
  return num;
}

const gpaNum = arrGrade.map(convertGPA);
console.log(gpaNum);

function sum(total, current) {
  return total + current;
}

const total = gpaNum.reduce(sum, 0);
console.log(total);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

let shortFruits = fruits.filter(function(item){
  return item.length <6;
});
console.log(shortFruits);