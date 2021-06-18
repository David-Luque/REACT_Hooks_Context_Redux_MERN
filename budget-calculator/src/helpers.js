export const reviewBudget = (budget, remaining) => {
    let classLabel;

    if(budget / 4 > remaining) {
        classLabel = "alert alert-danger"
    } else if (budget / 2 > remaining) {
        classLabel = "alert alert-warning"
    } else {
        classLabel = "alert alert-success"
    }

    return classLabel;
};