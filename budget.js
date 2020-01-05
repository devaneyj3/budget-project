//jshint esversion: 6
class Budget {
    constructor(type, amount, category) {
        this.type = type;
        this.amount = amount;
        this.category = category;
    }
}

class Expenses extends Budget {
    constructor( amount, category, percentage, type = "Expense") {
        super(type, amount, category);
        this.percentage = percentage;
    }
}

class Incomes extends Budget {
    constructor( amount, category, type = "Income") {
        super(type, amount, category);
    }
}
