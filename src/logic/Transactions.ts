
export function updateGoal(index: number, addAmount: number): void {
    const goals = JSON.parse(localStorage.getItem('goals') || '[]');
    goals[index].contributedAmount += addAmount;
    localStorage.setItem('goals', JSON.stringify(goals));
}
