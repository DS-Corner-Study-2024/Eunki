//Quiz
//1. var, let, const
//2. 클래스, 프로토타입
//3. 실행, 결과값
//4. return
//5. Promise.all, Promise.allsettled
//6. set, 중복 
//7. ??, null, undefiened


//코드 퀴즈
//8.
function compareNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (a > b) {
            resolve("성공!");  // 첫 번째 숫자가 더 클 때
        } else {
            reject("실패!");   // 첫 번째 숫자가 더 작거나 같을 때
        }
    });
}
async function compareNumbersAsync(a, b) {
    try {
        const message = await compareNumbers(a, b);  // Promise의 결과를 기다림
        console.log(message);  // "성공!" 출력
    } catch (error) {
        console.error(error);  // "실패!" 출력
    }
}


//9
const myPromise1=Promise.resolve('당신은 최고예요.');
const myPromise2=Promise.resolve('당신은 멋져요.');
const myPromise3=Promise.reject('당신은 대단해요.');
Promise.allSettled([myPromise1,myPromise2,myPromise3])
	.then((result)=>{
    	console.log(result);
    })
    .catch((error)=>{
    	console.error(error); //에러 처리
        });


//Quiz
//1. REPL
//2. node
//3. commonJS
//4. require
//5. __filename, __dirname
//6. setTimeout()
//7. path


//코드 퀴즈
//8. 
//index.js
import { odd, even } from './var.mjs';
import checkNumber from './func.mjs';

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 홀수면
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('node.js_team2'));

//9. process 내장 객체의 process.exit()와 setInterval 함수를 이용해 0.5초마다 5부터 1까지 표시한 뒤, i가 1이 되었을 때 종료하도록 하는 프로그램을 작성하시오.
let i=5;
setInterval(() => {
    if (i===1) {
        console.log('종료');
        process.exit();
    }
    console.log(i);
    i--;
}, 500);