// roman numeral
var romanNum = new Array();
romanNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
// decimal number
var dNum = new Array();
dNum = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
function decimalRoman(value) {
   if (value <= 0 || value >= 4000)
      return value;
      var romanNumeral = "";
   for (var i = 0; i<romanNum.length; i++) {
      console.log(`current value of i = ${i} and romanNumber[${i}]=${romanNum[i]} and dnum[${i}]=${dNum[i]}`)
      while (value >= dNum[i]) {
         console.log(`value=${value} and dNum[i]=${dNum[i]} and romanNum[i]=${romanNum[i]}`)
         value -= dNum[i];
         romanNumeral += romanNum[i];
         console.log(`romanNumeral = ${romanNumeral} , and value = ${value}`)
      }
   }
   return romanNumeral;
}
console.log(decimalRoman(12))


