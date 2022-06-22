const arr = [1, 2, 3, 4, 5, 6];

const ans = arr.reduce((sum, curr)=>{
    if(curr%3 == 0){
        sum = sum + curr**3;
    }
    return sum;
}, 0);
console.log(ans);