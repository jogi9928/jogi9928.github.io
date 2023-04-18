// Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)

 // Problem 1
const Employee1 = {first_name: 'Sam', department: 'Tech', designation: 'Manager', salary: 40000, raise_eligible: 'true'};
const Employee2 = {first_name: 'Mary', department: 'Finance', designation: 'Trainee', salary: 18500, raise_eligible: 'true'};
const Employee3 = {first_name: 'Bill', department: 'HR', designation: 'Executive', salary: 21200, raise_eligible: 'false'};
console.log(Employee1);
console.log(Employee2);
console.log(Employee3);

 // Problem 2
const company1 = {companyName: 'Tech Stars', website: 'www.techstars.site', employees: [Employee1, Employee2, Employee3]};
const compStr = JSON.stringify(company1);
console.log(compStr);

 // Problem 3
const Employee4 = {first_name: 'Anna', department: 'Tech', designation: 'Executive', salary: 25600, raise_eligible: 'false'};
console.log(Employee4);
company1['employees'].push(Employee4);
const newCompStr = JSON.stringify(company1);
console.log(newCompStr);

 // Problem 4
let totalSal = company1.employees[0].salary + company1.employees[1].salary + company1.employees[2].salary + company1.employees[3].salary;
console.log('Sum of all employee salaries: ' + totalSal);

 // Problem 5
for(let i=0; i<4; i++)
{
    if(company1.employees[i].raise_eligible == 'true')
    {
        raise(i);
        company1.employees[i].raise_eligible = 'false';
    }
}
function raise(index)
{
    company1.employees[index].salary = company1.employees[index].salary * 1.10;
}
const newComp = JSON.stringify(company1);
console.log(newComp);
// let newTotal = company1.employees[0].salary + company1.employees[1].salary + company1.employees[2].salary + company1.employees[3].salary;
// console.log('Sum of all employee salaries after raises: ' + newTotal);

 // Problem 6 
for(let j=0; j<4; j++)
{
    if(company1.employees[j].first_name == 'Anna' || company1.employees[j].first_name == 'Sam')
    {

        company1.employees[j]['wfh'] = true;
    }
    else
    {
        company1.employees[j]['wfh'] = false;
    }
}
const WFHcomp = JSON.stringify(company1);
console.log(WFHcomp);