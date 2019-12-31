//jshint esversion: 6
const submitItem = document.querySelector(".budget-item-submit");
let totalExpenses = 0;
let totalIncome = 0;

submitItem.addEventListener('click', function () {
    const option = document.querySelector('.option');
    const input = document.querySelector('.input-num');
    const displayExpense = document.querySelector('.exp-output');
    const displayIncome = document.querySelector('.inc-output');
    


    if (option.value === 'exp') {
        addToDisplay(displayExpense, input);
        updateExpenses(input, displayExpense);
        addToExpenseList(input.value);
        clearFields(input);
    }
    else {
        addToDisplay(displayIncome, input);
        updateIncome(input, displayIncome);
        addToIncomeList(input.value);
        clearFields(input);
    }
});

function addToDisplay(el, input) {
    if (el.textContent === '0') {
        el.textContent = input.value;
    } else {
        //else add individual button items to ul
        // addToBudgetList();
    }
}

function updateExpenses(input, el) {
    totalExpenses += parseFloat(input.value);
    // format the updated expenses with comma
    let formatedExpense = formatWithCommas(totalExpenses.toString());
    el.textContent = `- $${formatedExpense}`;
}

function updateIncome(input, el) {
    totalIncome += parseFloat(input.value);
    // format the updated expenses with comma
    let formatedIncome = formatWithCommas(totalIncome.toString());
    el.textContent = `+ $${formatedIncome}`;
}

function clearFields(el) {
    el.value = ' ';
}

function formatWithCommas(value) {
    let decimalIndex = value.indexOf('.');
    let count = 0;
    let readableNum = "";
    decimalIndex = (decimalIndex === -1) ? undefined : decimalIndex;
    let decimalPlaces = value.substr(decimalIndex);
    value.substring(0, decimalIndex).split("").reverse().forEach((element) => { if (count === 3 && value.substring(0, decimalIndex).length > 3 && element !== "-") { readableNum += `,${element}`; count = 0; } else { readableNum += element; } count++; }); readableNum = readableNum.split("").reverse().join("");
    if (decimalIndex > -1) { readableNum += decimalPlaces; } return readableNum;
}

function addToIncomeList(value) {
    const incomeList = document.querySelector('.income');
    let li = document.createElement('li');
    let formatedIncome = formatWithCommas(value.toString());
    li.appendChild(document.createTextNode(`+ $${formatedIncome}`));
    li.setAttribute("class", "income-item"); // added line
    incomeList.appendChild(li);
}

function addToExpenseList(value) {
    const expensesList = document.querySelector('.expenses');
    let li = document.createElement('li');
    let formatedExpense = formatWithCommas(value.toString());
    li.appendChild(document.createTextNode(`- $${formatedExpense}`));
    li.setAttribute("class", "expense-item"); // added line
    expensesList.appendChild(li);
}