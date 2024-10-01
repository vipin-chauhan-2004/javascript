let arr1=[1,2,3,4]
let arr2=[9,0,7,6]
let arr3=[8,12,45,34]
let concatAll=arr1.concat(arr2,arr3)
console.log(concatAll)
console.log(concatAll.join(" "))

//spread() =>  [...firstArray,...secondArray,........ so on]
//push() method in array simply add the array as an new single entity in the existing array.

let arr=[2,3,4,5,[9,7,6,4,['f,','d','a','w'],'b'],6,"2",'d']
let flatArr=arr.flat(2)
console.log(flatArr)

/*flat(int n)  =>   n is till what depth we want to flatten , can give infinity 
if doesnt know or dont want headache of depth calculating     */ 

//from() => converts to array anything passed if not able to convert will simply return []
//of()  => Creates a new array with the given elements.
//Array.of(element0, element1, element2, ...)