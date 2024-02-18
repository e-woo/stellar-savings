
export function updateGoal(index: number, addAmount: number): void {
    const goals = JSON.parse(localStorage.getItem('goals') || '[]');
    goals[index].contributedAmount += addAmount;
    if (goals[index].contributedAmount > goals[index].targetAmount)
        goals[index].contributedAmount = goals[index].targetAmount;
    localStorage.setItem('goals', JSON.stringify(goals));
}
