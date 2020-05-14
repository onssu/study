function solution(expression) {

    var exArray = expression.split("");
    var opr = [];
    var answer = 0;
    var tempString = "";
    var nums = [];
    var result = [];
    var chk = new array[50];

    exArray.forEach(element => {
        
        if(element === '-') {
            opr.push('-');
            nums.push(Number(tempString));
            tempString = "";
        }
        else if(element === '+') {
            opr.push('+');
            nums.push(Number(tempString));
            tempString = "";
        }
        else if(element === '*') {
            opr.push('*');
            nums.push(Number(tempString));
            tempString = "";
        }
        else {
            tempString+=element;
        }

    });

    nums.push(Number(tempString));

   for(var i=0;i<opr.length;i++){
       if(opr[i]==='+'){
           nums[i+1]=nums[i]+nums[i+1];
           chk[i]=false;
       }
   }

   for(var i=0;i<opr.length;i++){

    if(opr[i]==='-'){
        if(chk[i+1]===false) break;
        nums[i+1]=nums[i]-nums[i+1];
        chk[i]=false;
    }

    for(var i=0;i<opr.length;i++){
        if(chk[i+1]===false) break;
        if(opr[i]==='*'){
            nums[i+1]=nums[i]*nums[i+1];
            chk[i]=false;
        }
    }

    console.log()
}

    return answer;

}