console.log("2">1)
console.log(null==null)
let bigNumber=54n
console.log(typeof bigNumber)
//=== checks data type as well
/*
The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

null is treated in a special way by the Equals Operator (==). In a brief, it only coerces to undefined:

null == null; // true
null == undefined; // true
Value such as false, '', '0', and [] are subject to numeric type coercion, all of them coerce to zero.

 */