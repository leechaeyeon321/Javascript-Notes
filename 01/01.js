let array = [3, 5, 1, 2, 4]; //5개의 데이터(N = 5)
let summary = 0; //합계를 저장할 변수

//모든 데이터를 하나씩 확인하며 합계를 계산
for (let i = 0; i< array.length; i++){
	summary += array[i];
}

//결과를 출력
console.log(summary);

let array2 = [3, 5, 1, 2, 4]; //5개의 데이터(N = 5)

for (let i = 0; i < array2.length; i++){
    for (let j = 0; j < array2.length; j++){
        let temp = array2[i] * array2[j];
        console.log(temp);
    }
}