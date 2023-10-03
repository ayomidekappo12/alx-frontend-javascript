export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    [Symbol.iterator]: function () {
      return this;
    },
    next: function () {
      if (currentDepartmentIndex < departments.length) {
        const employeesInCurrentDepartment = departments[currentDepartmentIndex];
        if (currentEmployeeIndex < employeesInCurrentDepartment.length) {
          const employee = employeesInCurrentDepartment[currentEmployeeIndex];
          currentEmployeeIndex++;
          return { value: employee, done: false };
        } else {
          currentDepartmentIndex++;
          currentEmployeeIndex = 0;
          return this.next(); // Move to the next department
        }
      } else {
        return { done: true };
      }
    },
  };
}
