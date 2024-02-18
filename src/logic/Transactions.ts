export function updateGoal(index: number, addAmount: number): void {
    const goals = JSON.parse(localStorage.getItem('goals') || '[]');
    let completed = JSON.parse(localStorage.getItem('completed') || '0');
    let transactionCount = JSON.parse(localStorage.getItem('transactionCount') || '0');
    goals[index].contributedAmount += addAmount;

    if (goals[index].contributedAmount >= goals[index].targetAmount) {
        goals[index].contributedAmount = goals[index].targetAmount;

        completed += 1;
        localStorage.setItem('completed', JSON.stringify(completed));
    }

    if (addAmount != 0) {
        transactionCount += 1;
        localStorage.setItem('transactionCount', JSON.stringify(transactionCount));
    }

    localStorage.setItem('goals', JSON.stringify(goals));

    const transaction: Transaction = {
        time: new Date().toLocaleString(),
        amount: Math.abs(addAmount),
        goal: goals[index].name,
        type: addAmount > 0 ? 'Deposit' : 'Withdraw'
    };

    const currentTransactionsJson = (localStorage.getItem('transactions'));
    const newTransactionsArr = currentTransactionsJson ? [...JSON.parse(currentTransactionsJson), transaction] : [transaction];
    localStorage.setItem('transactions', JSON.stringify(newTransactionsArr));
}

export function getTransactions(): Array<Transaction> {
    const currentTransactionsJson = localStorage.getItem('transactions');
    if (!currentTransactionsJson)
        return [];
    const currentTransactionsArr = JSON.parse(currentTransactionsJson);
    currentTransactionsArr.reverse();
    return currentTransactionsArr;
}


export interface Transaction {
    time: string;
    amount: number;
    goal: string;
    type: string;
}
