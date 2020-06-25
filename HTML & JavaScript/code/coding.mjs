function solution(n)
{
    var DP = [1,3,4];
    var chk = 2;
    var lenChk = 3;
    var now = 3;

    for(var i=1;i<n;i++){

        var len = DP.length;

        if(DP.length === 3 || DP.length+1 === lenChk){
            DP[len] = Math.pow(3,chk);
            lenChk = DP.length * 2;
            now =  Math.pow(3,chk);
            chk ++;
        }

        len = DP.length;

        for(var j=0 ;j < len-1; j++){
            DP[len + j] = DP[j] + now;
        }
        
        console.log(DP,lenChk,now);

    }

    return DP[n-1];

}


