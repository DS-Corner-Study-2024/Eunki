let sale = true;
if(sale) {
  console.log("Time to buy!");
}
sale = false;
if(sale)
{
  console.log("Time to buy!");
}
let hungerLevel = 7;
if(hungerLevel >7 ) {
  console.log("Time to eat!");
}
else {
  console.log("We can eat later!");
}


let mood = 'sleepy';
let tirednessLevel = 6;

if(mood == 'sleepy' || tirednessLevel > 8)
{
  console.log("time to sleep");
}
else {
  console.log("not bet time yet");
}

if (mood === 'sleepy' || tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

if (!(mood === 'sleepy' && tirednessLevel > 8)) {
  console.log('not bed time yet');
} else {
  console.log('time to sleep');
}

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

tool = 'marker';
writingUtensil = tool || 'pen';
console.log(writingUtensil);

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");


let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

let athleteFinalPosition = 'first place';

switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}