// recursive
const ascending_sum = (n) => {
    if(n===0){
        return 0;
    } else{
        return ascending_sum(n-1) + n;
    }
}
