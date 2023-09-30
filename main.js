const employees = {
  john: 15,
  ann: 10,
  alex: 30,
};

function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const [employee, tasksCompleted] of Object.entries(employees)) {
    if (tasksCompleted > maxTasks) {
      maxTasks = tasksCompleted;
      bestEmployee = employee;
    }
  }

  return bestEmployee;
}

function countTotalSalary(employees) {
  const salaries = Object.values(employees);
  const totalSalary = salaries.reduce((acc, salary) => acc + salary, 0);
  return totalSalary;
}

const user = { hobby: "diving", premium: true };
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

console.log(Object.entries(user));

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
