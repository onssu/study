function solution(n)
{
    var answer = 0;
    var DP = [1,3];
    var chk = 3;

    for(var i=0;i<;i++){

        DP[i+2] = DP[i] + DP[i+1];

    }



    return answer;

}

function solution(p)
{
    var answer = 0;
    var num  = parseInt(p);
    var numCopy = num;

    console.log(num);

            for(var i = 0; ; i++){

                num ++;

                var numArr = [0,0,0,0,0,0,0,0,0,0];

                while( !== 0){
                    numArr[(num % 10)] += 1;
                    num /= 10;
                }

                for(var j = 0; j < 10; j++){
                    if(numArr[j] === 2) {
                        break;
                    }
                    if(j===9) var chk = true;
                }

                if(chk) break;

            }

            console.log(numArr);

            for(var i=0;i<10;i++){

                if(numArr[i] === 1){
                    answer = answer * 10;
                    answer += i ;
                }

            }

    return answer;

}