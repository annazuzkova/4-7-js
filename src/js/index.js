import Handlebars from "handlebars";
import template from "../handlebars/template";
const students = [
  {
    name: "Anna",
    age: 15,
    cource: "frontend",
  },
  {
    name: "Vlad",
    age: 15,
    cource: "frontend",
  },
  {
    name: "Viacheslav",
    age: 15,
    cource: "frontend",
  },
  {
    name: "Max",
    age: 16,
    cource: "frontend",
  },
];

for (const student of students) {
  const markup = template(student);
  const container = document.querySelector("#students-container");
  container.insertAdjacentHTML("afterend", markup);
}
