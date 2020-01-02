//jshint esversion: 6
class Budget {
    constructor(type, amount, category) {
        this.type = type;
        this.amount = amount;
        this.category = category;
    }
}

class Expenses extends Budget {
    constructor(type, amount, category, percentage) {
        super(type, amount, category);
        this.percentage = percentage;
    }
}

class Incomes extends Budget {
    constructor(type, amount, category) {
        super(type, amount, category);
    }
}
