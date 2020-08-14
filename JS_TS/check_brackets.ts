function check_brackets(){
    let count = 0;
    let res = count + ' ' + (count > 0)? 'Bet': 'Hold';
    console.log(res);
    return res;
}
check_brackets();