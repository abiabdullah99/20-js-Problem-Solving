//================================= Problem Solving =========================================

function result (name,number){
    if(number > 100){
        return name + " Tomar Number ta thik nai"
    }

   else if(number <= 100 && number >= 90){
        return name + " tumi A+ paiso"
    }
    else if(number <= 89 && number >= 70){
        return name +  " tumi A paiso"
    }
    else if(number <= 69 && number >= 60){
        return name + " tumi A- paiso"
    }
    else if(number <= 59 && number >= 50){
        return name + " tumi b paiso"
    }
    else{
       return name + " tumi fail"
    }
}
var myName = "Arohi";
var myNumber = 100;
var myResult = result(myName, myNumber)
console.log(myResult)

// Problem solve 02

// তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো।

var red = false;
var yellow = false;
var green = false;

if(red == true){
    console.log("Denger")
}
else if(yellow == true){
    console.log("Aro por jabo")
}
else if(green == true){
    console.log(" Akhon jawa jabe ")
}
else{
    console.log("Your information is incorrect")
}

// Problem solve 03

// 03. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।

function multipicationtable(number){
    for (i = 1; i <= 10; i++){
        var result = number * i;
        console.log(result)
    }
}
var mynumbers = 13;
var myResult = multipicationtable(mynumbers)

// problem solve 04
// 04. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

function myname(name){
    let myName = name;
    console.log(myName.toLowerCase())
}
myname("ABDULLAH")

// Problem Solve 05
// 05 fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।

function fullName(firstName, LastName){
    let name = firstName + " " + LastName;
    return name;
}
let firstNum = "Abi";
let lastNum = "Abdullah";
let fullNum = fullName(firstNum, lastNum);
console.log(fullNum)

// Problem solve 06

// 06. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।

function square(number){
    return number * number;
}
var mynumber = square(6);
console.log(mynumber)

// Problem Solve 07

// 07) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :

// এবং pepperoni প্রিন্ট করবা।

const pizza = {

 toppings: ['cheese', 'sauce', 'pepperoni'],

 crust: 'deep dish',

 serves: 2
}
var pepperon = pizza.toppings[2];
console.log(pepperon)

// Problem Solve 8
// 8. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

function leepYear(year){
    if((year % 4 == 0) && (0 != year % 100) || (0 == year % 400)){
        return true;
    }
    else{
        return false;
    }
}
var getYear = leepYear(2100);
console.log(getYear)

// Problem solving 09
// 09. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

function getage (age){
    if(age % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
let myAge = getage(20)
console.log(myAge)

// Problem Solving 10

// 10. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।

function getTime (hours){
    var time = hours * 60;
    return time;
}
var mytime = getTime(24)
console.log(mytime)

// problem solving 11

// 11. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।

var numbers = [34, 45, 63, 33, 63, 223, 6]
var output = Math.min(...numbers)
console.log(output)

// another way

var arry = [34, 53, 53, 63, 6,2]
var smallest = arry[0];
for(i = 0; i <= arry.length; i++){
    if(smallest > arry[i]){
        smallest = arry[i]
    }
}
console.log(smallest)

// Problem solve 12
// 12 . একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।

function samllestNumber (first, second, third){
    if(first < second && first < third){
        return "smallest Number is " + first
    }
    else if (second < first && second < third){
        return "smallest Number is " + second
    }
    else{
        return " smallest Number is " + third
    }
}
var smallest = samllestNumber(123,45, 64);
console.log(smallest)

// problem solving 13
// 13. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।

function arryNumber(number) {
  let sum = number[0];
  for (let i = 1; i < number.length; i++) {
    var element = number[i];
    sum = element + sum;
  }
  let avg = sum / number.length;
  return avg;
}
var myNumber = [60, 60, 60, 60];
var total = arryNumber(myNumber);
console.log(total);

// problem solve 14
// 14. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।

var myArray = [1, 2, 4, 10, 60, 40]
var biggest = myArray[0];
var nextbiggest = myArray[0];

    for(var i = 0; i < myArray.length; i++){
        if(myArray[i] > biggest){
            nextbiggest = biggest;
            biggest = myArray[i];
        }
        else if(myArray[i] > nextbiggest && myArray[i] !=biggest)
            nextbiggest = myArray[i];
    }

console.log(nextbiggest);

// Problem solving 15 

// 15. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।

function feetToInchess (inches){
    var feet =  inches / 12;
    return feet;
}
var myInches = 340;
var getFeet = feetToInchess(myInches);
console.log(getFeet)

// Problem solve 16 
// 16. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

function centimeterToMeter(centimeter){
    var meter = centimeter / 100;
    return meter;
}
var myCentimeter = 2000;
var mymeter = centimeterToMeter(myCentimeter)
console.log(mymeter)

// Problem Solving 17 
// 17. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

function bestFriend(name) {
    let larger = '';
    for(i = 0; i < name.length; i++){
        var nameIteam = name[i % 2 == 1];
        if(nameIteam.length > larger.length){
            larger = name[i]
        }
    }
    return larger;
}
var myFriends = ["Rakib", "Tanjil", "Tuhin", "Mansur ali barat", "Jerin", "Anamika oishe"]
var largestName = bestFriend(myFriends)
console.log(largestName)


// Problem solving 18 

// 18 আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

// এইবার ভালো করে খেয়াল করো। 

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 


// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

function paperRequirements(firstBook, secondBook, thirdBook){
    var firstBookPages = 100;
    var secondBookPages = 200;
    var thirdBookPages = 300;

    var totalFirstBookPages = firstBookPages * firstBook;
    var totalSecondBookPages = secondBookPages * secondBook;
    var totalThirdBookPages = thirdBookPages * thirdBook;

    var totalPages = totalFirstBookPages + totalSecondBookPages + totalThirdBookPages;

    return totalPages;
}

var myBooks = paperRequirements(2,1,3)
console.log(myBooks)


// Problem Solve 19 

// 19. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

var array = [23, 43, 53, 53, -3, 43];
var mypositive = []
for(i = 0; i <= array.length; i++){
   var number = array[i]
   if(((array.indexOf(number) != -1) && number >= 0)){
        mypositive.push(number);
   }
   else{
       break
   }
}
console.log(mypositive)

// Problem Solve 20
/* find The Second Largest String From A Array  */
const bestFriendName = [
    "zayeed",
    "shohid",
    "Shuuvo",
    "Nahid",
    "Rana",
    "Sohel Rana",
    "J M Sohel Rana",
    "Arafat Sharif Shuvo",
  ];
  
  // function declaration and the function name is oddFriend.
  function oddFriend(bestFriendName) {
    //error handle.check input parameter is array or not
    if(bestFriendName != 0){
      return "Pleasue use string not a number"
    }
  
    let firstOddNameFriend = bestFriendName[0];
    for (i = 0; i < bestFriendName.length; i++) {
      let word = bestFriendName[i];
      //main condition apply to check odd length
      if (word.length % 2 != 0) {
//         firstOddNameFriend = word;
        return firstOddNameFriend; //whether it gets first odd name it immediately return it.
      }
    }
    //if there is no name that consist of odd numbers of letter
    return "no odd friend found";
  }
  console.log(oddFriend(bestFriendName));



//   const array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 1; i < array.length; i++) {
//  if (i == 5) {
//   continue;
//  }
//  console.log(array[i]);
// }