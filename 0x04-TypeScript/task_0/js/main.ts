interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ayomide",
  lastName: "Kappo",
  age: 21,
  location: "Port-Harcourt",
};

const student2: Student = {
  firstName: "Promise",
  lastName: "Ogan",
  age: 40,
  location: "Abuja",
};

const studentsList: Student[] = [student1, student2];

function createTableCell(content: string): HTMLTableCellElement {
  const cell = document.createElement("td");
  cell.textContent = content;
  cell.style.border = "1px solid red";
  cell.style.padding = "5px";
  return cell;
}

const table = document.createElement("table");
table.style.background = "white";

const tbody = document.createElement("tbody");
studentsList.forEach((student: Student): void => {
  const row = document.createElement("tr");

  const nameCell = createTableCell(`${student.firstName} ${student.lastName}`);
  const locationCell = createTableCell(student.location);

  row.appendChild(nameCell);
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
