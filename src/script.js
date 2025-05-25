let htmlDesc = document.getElementById("desc")
let htmlAmount = document.getElementById("amount")

let htmlIncomeBtn = document.getElementById("incomeBtn")
let htmlExpenseBtn = document.getElementById("expenseBtn")

let htmlIncomeList = document.getElementById("incomeList")
let htmlExpenseList = document.getElementById("expenseList")

let htmlBalance = document.getElementById("balance")

let incomes = []
let expenses = []


function clearLists() {
    htmlIncomeList.innerHTML = ""
    htmlExpenseList.innerHTML = ""
}

function clearInputs() {
    htmlDesc.value = ""
    htmlAmount.value = ""
}

function updateTransactions() {
    for (let transaction of incomes) {
        const listItem = document.createElement("li")
        listItem.innerHTML = `${transaction.description} - ${transaction.amount} kr (Inkomst)`
        htmlIncomeList.appendChild(listItem)
    }

    for (let transaction of expenses) {
        const listItem = document.createElement("li")
        listItem.innerHTML = `${transaction.description} - ${transaction.amount} kr (Utgift)`
        htmlExpenseList.appendChild(listItem)
    }
}

function updateBalance() {
    let sumOfIncome = 0
    let sumOfExpenses = 0

    for (let income of incomes) {
        sumOfIncome += income.amount
    }

    for (let expense of expenses) {
        sumOfExpenses += expense.amount
    }

    let result = sumOfIncome - sumOfExpenses

    htmlBalance.innerHTML = result
}

function updateBudget() {
    // Clear lists
    clearLists()

    // Append to income/expenses list
    updateTransactions()

    // Update the balance
    updateBalance()

    // Clear inputs
    clearInputs()
}

htmlIncomeBtn.addEventListener("click", () => {
    if (htmlDesc.value !== "" && htmlAmount.value > 0) {
        incomes.push({description: htmlDesc.value, amount: Number(htmlAmount.value), type:"income"})
        updateBudget()
    }
})

htmlExpenseBtn.addEventListener("click", () => {
    if (htmlDesc.value !== "" && htmlAmount.value > 0) {
        expenses.push({description: htmlDesc.value, amount: Number(htmlAmount.value), type:"expense"})
        updateBudget()
    }
})