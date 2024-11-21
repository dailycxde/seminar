// recursive
const ascending_s = (n) => {
    if(n===0){
        return 0;
    } else{
        return ascending_s(n-1) + n;
    }
}
