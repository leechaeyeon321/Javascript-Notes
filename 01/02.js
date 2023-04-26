//단순히 문자열을 출력합니다.
console.log('Hello World!');

result = 35;
//템플릿 리터럴을 사용해 문자열 내부에 변수를 포함합니다. (백틱 문자 사용)
console.log(`정답은 ${result}입니다.`);

a = 7;
b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b)); //몫만 남기기
console.log(a % b);

let answer = '';
/*
여러 출력 결과를 한 줄에 하나씩 출력할 때 매 번 console.log()를 실행하지 않고,
하나의 문자열에 결과를 저장해서 한꺼번에 출력하는 것이 대개 더 바르게 수행됩니다.
*/
for (let i = 1; i <= 100; i ++){
	answer += i + '\n';//문자열로 변환하여 기록
}
console.log(answer);

//readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input1 = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('input.txt').toString().split('\n');
//바로 위 코드는 replit에서 사용한다.
console.log(input1);

//readline 모듈보다는 fs를 이용해 파일 전체를 읽어들여 처리하기
let fs = require('fs');
let input2 = fs.readFileSync('input.txt').toString().split('\n');
console.log(input2);

const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = []
rl.on('line', function(line){
	//콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
	input.push(line);
}).on('close', function(){
	console.log(input);
	process.exit();
});

/* 
condition: 참 혹은 거짓을 반환하는 조건식
statement1: condition1이 참일 때 실행되는 구문
statement2: condition1이 거짓이고, condition2가 참일 때 실행되는 구문
statement3: condition1과 condition2가 거짓이고, condition3이 참일 때 실행되는 구뭄ㄴ
statementN: 앞의 모든 조건문이 거짓일 때 실행되는 구문
*/

if(condition1)
    statement1;
else if(condition2)
    statement2;
else if(condition3)
    statement3
else
    satementN