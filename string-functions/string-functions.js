let topic = 'welcome to frontend training';
console.log(topic);

//finding length
let findlength = topic.length;

//substring
let withend = topic.substring(11,27);
let withoutend = topic.substring(16);

//trim
let str = "   frontend training   ";
let trimmedStr = str.trim();
console.log(trimmedStr); 

//finding word
let findword = topic.includes('to');
let findwordwithposition = topic.includes('frontend',25);

//finding index
let findindex = topic.indexOf('training');
let indexwithposition = topic.indexOf('training',5);

//replace
let replace = topic.replace('frontend','javascript');

//charAt
let one ='chennai'
console.log(one.charAt(1)); 

//uppercase
let capsletter = topic.toUpperCase();

//lowercase
let smalletter = topic.tolowerCase();


