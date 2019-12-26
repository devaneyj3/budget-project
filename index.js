//jshint esversion: 6
const submitItem = document.querySelector(".budget-item-submit");
let totalExpenses = 0;

submitItem.addEventListener('click', function() {
    const option = document.querySelector('.option');
    const input = document.querySelector('.input-num');
    const displayExpense = document.querySelector('.exp-output');
    const displayIncome = document.querySelector('.inc-output');
    

    if(option.value === 'exp') {
        addToDisplay(displayExpense, input);
    }
    else {
        addToDisplay(displayIncome, input);
    }
});

function addToDisplay(el, input) {
    if( el.textContent === '0') {
        el.textContent = input.value;
    } else {
        //ele empty update value
        // updateExpenses();
    }
}
