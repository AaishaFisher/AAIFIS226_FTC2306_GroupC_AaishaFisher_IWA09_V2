const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport: 10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const type = size + '-' + lodging;
const rentAmount = rent[type];


//The taxable amount should be subtracted from the salary before expenses are calculated
const taxAsDecimal = parseFloat(tax[913]) / 100
const netSalary = salary * (1 - taxAsDecimal)

//The total should be the result of the after-tax amount with all expenses subtracted
const balance = expenses.transport + expenses.food + rentAmount
const finalBalance = netSalary - balance
console.log(finalBalance.toFixed(2));





 