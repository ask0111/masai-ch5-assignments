const arr = [1, 2, 3, 4];

const ans = arr.reduce((sum=1, curr)=> sum + curr%2 !== 0 ? curr : 0);
console.log(ans);