function multiplayBy(n){
    return function(x){
        return x * n;
    };
}
// fill the parameter n
const double = multiplayBy(2);
// fill the parameter x
console.log(double(5));

// custom hof that implement callback
function repeat(n, action){
    for(let i =0; i < n;i++){
        action[i];
    }
}
function lopNumber(x){
    console.log(`The number is ${x}`);
}
repeat(3, lopNumber);