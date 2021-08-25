//Fib

//Recursion
function FibRecursion(n){
    if(n<2)return n;
    return FabRecursion(n-1) + FabRecursion(n-2)
}

//Iterative
function FibIterative(n){
    if(n<2)return n;
    let arr = [0,1];
    for(let i = 2;i<=n; i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
    return arr[n]
}

//如果要空間換取時間我就會採用DP的方法
//dynamic programming
function FibDynamic (n) {
    return fibDynamic2(n, new Array(n));
  }
  function fibDynamic2(i, memo) {
    if (i === 0 || i === 1) {
      return i;
    }
    if (!memo[i]) {
      memo[i] = fibDynamic2(i-1, memo) + fibDynamic2(i-2, memo);
    }
    return memo[i];
  }

  module.exports = {
    FibRecursion,
    FibIterative,
    FibDynamic
  }