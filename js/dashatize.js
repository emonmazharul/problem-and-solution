// Given a number, return a string with dash'-'marks before and after each odd integer, 
// but do not begin or end the string with a dash mark.


function dashatize(num){
    num = num < 0 ? (num*-1) : num;
    let numChar =  String(num).split('').map(item => Number(item));
    let res = '';
    if(!num){
        return String(num)
    }
    for(let i=0;i<numChar.length-1;i++) {
        let trick = (numChar[i+1]||0)
        if(  ( trick % 2 ) !==0 || (numChar[i] % 2) !== 0 ) {
            res+=numChar[i]+'-'
        }
        else{
            res+=numChar[i];
        }
    }
    return res+numChar[numChar.length-1];
}

dashatize(6789); //return 6-7-8-9 
