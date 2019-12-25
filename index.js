//jshint esversion: 6
const submitItem = document.querySelector(".budget-item-submit");

submitItem.addEventListener('click', function() {
    const option = document.querySelector('.option');
    const input = document.querySelector('.input-num');
    const displayExpense = document.querySelector('.exp-output');
    const displayIncome = document.querySelector('.inc-output');
    if(option.value === 'exp') {
        addToDisplay(input, displayExpense);
    }
    else {
        addToDisplay(input, displayIncome);
    }
});

function addToDisplay(el, DOMEl) {

    //add to main display of html
    DOMEl.append(el.value);
}