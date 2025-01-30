import Handlebars from "handlebars";
import template from "bundle-text:../templates/templates";
import { students } from "./students";

const studentContainer = document.querySelector(".students-container");

const renderStudents = (source, template) => {
  const studentTemplate = Handlebars.compile(template);
  const html = studentTemplate(source);

  studentContainer.innerHTML = html;
};
renderStudents(students, template);
