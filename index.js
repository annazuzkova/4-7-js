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
// const menuData = {
//   title: "Eat it createElement, templates rule!",
//   items: ["Handlebars", "LoDash", "Pug", "EJS", "lit-html"],
// };

const source = document.querySelector("#student-template").innerHTML.trim();
const template = Handlebars.compile(source);

// const markup = template(students);

// console.log(markup);
// const container = document.querySelector("#students-container");
// container.innerHTML = markup;
for (const student of students) {
  const markup = template(student);
  const container = document.querySelector("#students-container");
  container.insertAdjacentHTML("afterend", markup);
}
