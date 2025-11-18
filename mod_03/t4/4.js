'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.getElementById('target');

students.forEach(student => {
  const opt = document.createElement("option");
  opt.value = student.value;
  opt.textContent = student.name;
  target.appendChild(opt);
});