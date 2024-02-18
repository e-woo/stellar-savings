
export function updateGoal(index: number, addAmount: number): void {
    const goals = JSON.parse(localStorage.getItem('goals') || '[]');
    goals[index].contributedAmount += addAmount;
    if (goals[index].contributedAmount > goals[index].targetAmount)
        goals[index].contributedAmount = goals[index].targetAmount;
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


interface Transaction {
    time: string;
    amount: number;
    goal: string;
    type: string;
}