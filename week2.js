//Opening line.
/*console.log('It was love at first sight.');

console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');*/


console.log("JavaScript");
console.log(2011);
console.log("Woohoo! I love to code! #codecademy");
console.log(20.49);


//산술연산자
console.log(22+3.5);
console.log(2024-1969);
console.log(65/240);
console.log(100*0.2708);

//문자열 연결
console.log('Hello' + 'World');
console.log('Hello' + " " +"World");

//속성
console.log("Teaching the world how to code" .length);

//Methods
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy');
console.log('Codecademy'.toUpperCase());
// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   ');
console.log('    Remove whitespace   '.trim());

//내장객체
console.log(Math.random()*100);
console.log(Math.floor(Math.random()*100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

//변수 생성
var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

let changeMe = true;
changeMe = false;
console.log(changeMe);

const entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos';

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp +=5;
console.log(levelUp);

powerLevel -= 100;
console.log(powerLevel);

multiplyMe *= 11;
console.log(multiplyMe);

quarterMe /= 4;
console.log(quarterMe);
// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);