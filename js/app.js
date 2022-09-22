

const students = [
    "orif",
    "alan",
   "umar",
   "diaz",
   "aziz",
   "lexa",
   "mohinur",
   "nasiba",
   "sandrina"
];

const select = document.getElementById('box1');

let html = '';

students.forEach((e, index, array) => {
    html += '<option>' + e + '</option>';
});

select.innerHTML = html;

function genRan() {
    return parseInt(Math.random() * 11);
}

const score = document.getElementById('score');

score.textContent = genRan();

select.onchange = () => {
    score.textContent = genRan();
}