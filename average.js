const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const average = (...args) => args.reduce((sum, next) => (sum + next)/(...args.length)); 

console.log(average);