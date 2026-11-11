// Problem-01: New Price for Eid Sale
/**
 * 
আসন্ন ইদ উপলক্ষে তুমি তোমার দোকানের প্রোডাক্টে ডিসকাউন্ট দিতে চাচ্ছ। কিন্তু প্রতিটা প্রোডাক্টের নতুন দাম আলাদা আলাদা হিসাব করতে গেলে ঝামেলা। তাই তুমি একটা ফাংশন বানাতে চাও, যা মূল দাম এবং ডিসকাউন্ট% নিলে নতুন দাম বের করে দেবে।

📥 Input:
প্রথম ইনপুট: একটি সংখ্যা যা মূল দাম
(currentPrice : Number)
দ্বিতীয় ইনপুট: একটি সংখ্যা যা ডিসকাউন্ট
(discount : Number %)
🚀 Output:
ফাংশনটি ডিসকাউন্ট করে নতুন দাম return করবে (return type string হতে পারে!)
Output দশমিক সংখ্যা ও হতে পারে
দশমিক এর পর ৩ ঘর দেখাতে হবে
 */

/*function signature/sample */
function newPrice(currentPrice, discount) {
  // You have to write your code here
  if (
    typeof currentPrice === "number" &&
    typeof discount === "number" &&
    discount > 0 &&
    discount < 100
  ) {
    const originalPrice = (currentPrice * discount) / 100;
    const result = currentPrice - originalPrice;
    //   output will be interger and floting  as a result and if floting showing 3 digit ;
    return result.toFixed(3);
  } else {
    return "Invalid";
  }
  // console.log(typeof(currentPrice,discount))
}
let result = newPrice("300", 3);
// *******************************************************************************************************
// Problem-02: OTP Validation for Zapshift

function validOtp(otp) {
  // Your code here
  //   console.log(otp.length)
  if (typeof otp === "string") {
    // otp must be start 'ph-' and charetor must be 8
    if (otp.startsWith("ph-", 0) && otp.length === 8) {
      return "true";
    } else {
      return "false";
    }
  } else {
    return "Invalid";
  }
}

let re = validOtp("ph-3dee");
// ************************************************************************************************************

// Problem-03: BCS Final Score Calculator
/**
 * 
 BCS পরীক্ষার OMR sheet ডিজিটালভাবে চেক করা হয়। এটা right, wrong, missed সব কটি গণনা করতে পারে, কিন্তু ফাইনাল স্কোর বের করতে পারে না। তোমার কাজ হলো একটি ফাংশন বানানো যা Object নেবে এবং ফাইনাল স্কোর ক্যালকুলেট করবে।

ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি Object নেবে এবং নিচের শর্ত ও নিয়ম অনুযায়ী ফলাফল প্রদান করবে।
 */

function finalScore(omr) {
  //write your code here
  if (typeof omr === "object") {
    let right = omr.right;
    let wrong = omr.wrong;
    let skip = omr.skip;
    let result = right + wrong + skip;
    if (result === 100) {
      let totalRight = right * 1;
      let totalWorng = wrong / 2;
      let outPut = totalRight - totalWorng;
      let OutputRand = Math.round(outPut);
      return OutputRand;
    } else {
      return "Invalid";
    }
  } else {
    return "Invalid";
  }
}
let final = finalScore({ right: 80, wrong: 25, skip: 0 });
// console.log(final);
// console.log(typeof { name: "kalam" });

/**
 * ***********************************************************************************************************
 * Problem-04: Upcoming Gono Vote
⚠️ Function Name Must be gonoVote()

আসন্ন গণভোটের ফলাফল বিশ্লেষণের জন্য তোমাকে একটি দায়িত্ব দেওয়া হয়েছে। ভোটের ডাটাগুলো একটি Array-তে জমা করা হয়েছে যেখানে ভোটারদের মতামত "ha" অথবা "na" হিসেবে আছে। তোমার কাজ হলো একটি ফাংশন তৈরি করা যা ভোট গণনা করবে এবং দেখবে "ha" ভোট সংখ্যাগরিষ্ঠ(Majority) কি না।

ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি Array নেবে এবং ভোটের সংখ্যার ওপর ভিত্তি করে একটি Boolean (true/false) এবং "equal" রিটার্ন করবে।

 Input:
একটি Array,
উদাহরণ: ["ha", "na", "ha"]

🚀 Output:
"ha" ভোটের সংখ্যা "na" ভোটের বেশি হলে → true**
"ha" ভোটের সংখ্যা "na" ভোটের সমান হলে → equal
অন্যথায় → false
 */
function gonoVote(array) {
  //write your code here

  if (Array.isArray(array) === true) {
    //stroe the ha vote
    let sumHaVote = 0;
    // store the na vote
    let sumNaVote = 0;
    for (const digit of array) {
      if (digit === "ha") {
        sumHaVote++;
      } else {
        sumNaVote++;
      }
    }

    if (sumHaVote > sumNaVote) {
      return true;
    } else if (sumHaVote === sumNaVote) {
      return "equal";
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}
let vot = gonoVote(["ha", "na", "ha", "ha", "na"]);

// console.log(vot);

/**********************************************************************************************************
 * 
 * Problem-05: Text Analyzer for an AI Company
⚠️ Function Name Must be analyzeText()

জিহাদ একটি AI কোম্পানিতে কাজ করে।
অনেক সময় ইউজাররা অনেক বড় লেখা(text) ইনপুট দেয়। এত বড় লেখা নিয়ে কাজ করতে AI-এর বেশি সময় লাগে।

তাই জিহাদ এমন একটি ফাংশন বানাতে চায়, যা বড় টেক্সটকে একটু ছোট করে বিশ্লেষণ করতে সাহায্য করবে।

তোমাকে একটি ফাংশন লিখতে হবে, যা—
1️⃣ ইনপুট হিসেবে একটি text (string) নেবে
2️⃣ ওই text থেকে সবচেয়ে বড় (দীর্ঘ) শব্দটি খুঁজে বের করবে
3️⃣ পুরো text-এ মোট কতটি অক্ষর আছে তা গণনা করবে
➡️ স্পেস (space) গণনায় ধরা হবে না 
 */

function analyzeText(str) {
  // Your code here
  // first check data type
  if (typeof str === "string" && str.length != 0) {
    const str2 = str.split(" ");
    // stro the longword
    let name = str[0];
    // stor the total carector without space
    let sumWord = 0;
    for (const word of str2) {
      console.log(word);
      if (word.length > name.length) {
        name = word;
      }
      sumWord = word.length + sumWord;
    }
    // out put will be a object
    let myObj = {
      longwords: name,
      token: sumWord,
    };
    return myObj;
  } else {
    return "Invalid";
  }
}

const mytext = analyzeText("Mohammad Abul Kalam Azad");
// console.log(mytext);
