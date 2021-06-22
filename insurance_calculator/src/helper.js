export function getYearDiff(year) {
    return new Date().getFullYear() - year;
}

export function estimateModel(model) {
    let increment;

    switch (model) {
        case "American":
            increment = 1.15; 
            break;
        case "European":
            increment = 1.30;
            break;

        case "Asian":
            increment = 1.05;
            break;
        default:
            break;
    }
    return increment;
}

export function estimatePlan(plan) {
    return (plan === 'basic') ? 1.20 : 1.50
}


export function capitalWord(word) {
    return (word.charAt(0).toUpperCase()).concat(word.slice(1))
};