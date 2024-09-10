function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses ){
        return  "Invalid Input"
    }
    const profit = income - expenses
    const tax = profit * 0.2
    return tax
}

console.log(calculateTax(6000, -1500))
