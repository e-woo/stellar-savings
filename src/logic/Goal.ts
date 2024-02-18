export interface Goal {
    name: string;
    body: string;
    targetAmount: number;
    contributedAmount: number;
}

export function appendGoal(goal: Goal) : void {
    if (goal.name === '')
        goal.name = 'Unnamed goal';
    if (goal.body === '')
        goal.body = 'No description';
    if (goal.targetAmount === null || goal.targetAmount < 0)
        goal.targetAmount = 0;

    const currentGoalsJson = (localStorage.getItem('goals'));
    const newGoalsArr = currentGoalsJson ? [...JSON.parse(currentGoalsJson), goal] : [goal];
    localStorage.setItem('goals', JSON.stringify(newGoalsArr));
}

export function fetchGoals() : Array<Goal> {
    const currentGoalsJson = (localStorage.getItem('goals'));
    if (!currentGoalsJson)
        return [];
    return JSON.parse(currentGoalsJson);
}

export function deleteGoal(index: number) : void {
    const currentGoalsJson = (localStorage.getItem('goals'));
    if (!currentGoalsJson)
        return;
    const goalsArr = JSON.parse(currentGoalsJson);
    goalsArr.splice(index, 1);
    localStorage.setItem('goals', JSON.stringify(goalsArr));
}

export function editGoal(goal: Goal, index: number) : void {
    if (!goal.name)
        goal.name = 'Unnamed goal';
    if (!goal.body)
        goal.body = 'No description';
    if (goal.targetAmount === null || goal.targetAmount < 0)
        goal.targetAmount = 0;
    
    const currentGoalsJson = (localStorage.getItem('goals'));
    if (!currentGoalsJson)
        return;
    const goalsArr = JSON.parse(currentGoalsJson);
    goalsArr[index] = goal;
    localStorage.setItem('goals', JSON.stringify(goalsArr));
}