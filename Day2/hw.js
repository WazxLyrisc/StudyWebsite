const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 50000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 50000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" }
];
// Gom nhóm và tính lương trung bình
const departmentSalaries = employees.reduce((acc, employee) => {
    const { department, salary } = employee;
    if (!acc[department]) {
        acc[department] = { totalSalary: 0, count: 0 };
    }
    acc[department].totalSalary += salary;
    acc[department].count += 1;
    return acc;
}, {});

// Tính mức lương trung bình
const averageSalaries = Object.keys(departmentSalaries).map(department => {
    const { totalSalary, count } = departmentSalaries[department];
    return {
        department,
        averageSalary: totalSalary / count
    };
});

// Lọc các phòng ban có mức lương trung bình > 65,000
const result = averageSalaries.filter(dept => dept.averageSalary > 65000);

console.log(result);
