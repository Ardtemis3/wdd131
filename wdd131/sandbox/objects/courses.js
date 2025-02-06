// courses.js
const aCourse = {
    courseCode: "CSE121b",
    name: "Javascript Language",
    credits: 3,
    sections: [
        { sectionNum: 1, //0
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T'
        },
        { sectionNum: 2, //1
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'
        }],
    enrollStudent: function(sectionNum) {
        console.log(sectionNum);
        console.log(this.sections);
    }
};

// console.log(aCourse["course code"]);
// console.log(aCourse.name);
console.log(aCourse.sections[0].sectionNum);

const section1 = aCourse.sections.find(section => section.sectionNum == 1);

// item => item === 30
// =
// function(item){
//     return item == 30
// }

const currentField = "courseCode";
// console.log(aCourse[currentField])

// part 3
function setHeader(aCourse) {
    const courseName = aCourse.name;
    const courseCode = aCourse.courseCode;
    document.querySelector("#courseName").textContent = courseName;
    document.querySelector("#courseCode").innerHTML = courseCode;
};
setHeader(aCourse)

// part 4
document.querySelector("#sections");

function sectionTemplate(section) {
    return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>`
};

function renderSections(sections) {
    const sectionList = document.querySelector("#sections");
    sectionList.innerHTML = "";
    const html = sections.map(sectionTemplate);
    sectionList.insertAdjacentHTML("afterbegin", html.join(''));
};

renderSections(aCourse.sections);

// ACTIVITY 2
document.querySelector("#enrollStudent").addEventListener('click', function(){
    aCourse.enrollStudent(1);
});