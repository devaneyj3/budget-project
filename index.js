//jshint esversion: 6
const submitItem = document.querySelector(".budget-item-submit");
let totalExpenses = 0;
let totalIncome = 0;

let expenseItems = [];
let incomeItems = [];


submitItem.addEventListener('click', function () {
    const option = document.querySelector('.option');
    const input = document.querySelector('.input-num');
    const displayExpense = document.querySelector('.exp-output');
    const displayIncome = document.querySelector('.inc-output');
    const category = document.querySelector('.category');


    if (input.value && category.value) {
        if (option.value === 'exp') {
            //create new expense object
            let newExpense = new Expenses(option.value, input.value, category.value);
            expenseItems.push(newExpense);

            //add object amount to display
            addToDisplay(displayExpense, newExpense.amount);

            //increment total expense and display it
            updateExpenses(newExpense.amount, displayExpense);

            //add indivual expense items to expense list
            addToExpenseList();

        }
        else {
            //create new income object and push to array
            let newIncome = new Incomes(option.value, input.value, category.value);
            incomeItems.push(newIncome);

            //add object amount to display
            addToDisplay(displayIncome, newIncome.amount);

            //increment total income and display it
            updateIncome(newIncome.amount, displayIncome);

            //add indivual income items to income list
            addToIncomeList();
        }
        //reset the input and category fields
        //TODO: Why is placeholder being reset on category
        clearFields(input, category);
        updatePercentage();
    }
    else {
        const error = document.querySelector('.error');
        if (input.value) {
            error.textContent = 'Add a category';
        } else if (category.value) {
            error.textContent = 'Add a number';
        } else {
            error.textContent = 'Add a category and a number';
        }

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
    totalExpenses += parseFloat(input);
    // format the updated expenses with comma
    let formatedExpense = formatWithCommas(totalExpenses.toString());
    el.textContent = `- $${formatedExpense}`;
}

function updateIncome(input, el) {
    totalIncome += parseFloat(input);
    // format the updated expenses with comma
    let formatedIncome = formatWithCommas(totalIncome.toString());
    el.textContent = `+ $${formatedIncome}`;
}

function clearFields(el, category) {
    el.value = ' ';
    category.value = ' ';
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

function addToIncomeList() {
    const incomeList = document.querySelector('.income');
    let li = document.createElement('li');
    incomeItems.forEach((e) => {
        li.setAttribute("class", "income-item");
        let formatedIncome = formatWithCommas(e.amount.toString());
        e.amount = formatedIncome;
        li.textContent = `${e.amount} - ${e.category}`;
        incomeList.appendChild(li);
    });
}

function addToExpenseList() {
    const expensesList = document.querySelector('.expenses');
    let expenseLi = document.createElement('li');
    expenseItems.forEach((e) => {
        expenseLi.setAttribute('class', 'expense-item');
        let formatedExpense = formatWithCommas(e.amount.toString());
        e.amount = formatedExpense;
        expenseLi.textContent = `${e.amount} - ${e.category}`;
        expensesList.appendChild(expenseLi);
    });

    //Update percentage based on income
  //  updatePercentage(li);
}

function updatePercentage() {
    //update the percentage based on the income
    let span = document.createElement('span');
    span.setAttribute('class', 'percentage');

    //handles if divide by 0
    if (totalIncome != 0) {
        expenseItems.forEach((e) => {
            console.log(e.amount);
            let percentage = (e.amount / totalIncome) * 100;
            e.percentage = percentage.toFixed(1);
            span.appendChild(document.createTextNode(`${e.percentage}%`));
            expenseLi.appendChild(span);
        });
    } else {
        span.appendChild(document.createTextNode(`-`));
        totalExpenses += 0;
    }
}
