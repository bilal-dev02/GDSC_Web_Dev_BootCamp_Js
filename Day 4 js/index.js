// let sentence = "The quick brown fox jumps over the lazy dog";
// let word = 'hello'
// let anword = `lemon ${word}`

// console.log(typeof sentence);
// console.log(typeof word);
// console.log(anword);

// Mutable 
// Immuteable 

// let arr = [353,43,4344,5443]
// arr.pop()
// console.log(arr);

// let num = 10 ; 

// num = 5; 

// let arr = [353,43,4344,5443]
// arr.reverse();
// console.log(arr);

// let sen = "I am a boy"
// sen.toLowerCase()
// console.log(sen);


// let sen = "I am a boy" 
// console.log(sen);
// sen= "Word"
// console.log(sen);

// let sen = "ALi iS a Boy"
// let lowercase = sen.toLowerCase()
// console.log(sen);
// console.log(lowercase);

// let sen = "ALi iS a Boy"
// let lowercase = sen.toUpperCase()
// console.log(sen);
// console.log(lowercase);

// let sen = "        ALi iS a Boy     "
// let lowercase = sen.trim() //trim  trimStart   trimEnd
// console.log(sen);
// console.log(lowercase);

// let sen = "ALi iS a Boy"
// let newstr = sen.replace("iS", "am");
// console.log(newstr);

// let sen = "ALi iS a Boy"
// console.log(sen.split(" "));

// let sen = "ALi iS a Boy"
// console.log(sen.includes("an"));

// let sen = "aLi iS a Boy"
// console.log(sen.indexOf("aL")); // first occurence

// let sen = "ALi iS a Boy"
// let slice = sen.slice(2,9) // end not included 
// console.log(slice);

// let sen = "ALi iS a Boy"
// // console.log(sen.startsWith("A"));
// console.log(sen.endsWith("boy"));


// let arr = [1,3,4,63,4]
// arr.push(67)
// console.log(arr);

// let arr = [1,3,4,63,4]
// arr.pop()
// console.log(arr);


// let arr = [1,3,4,63,4]
// arr.unshift(67)
// console.log(arr);

// let arr = [1,3,4,63,4]
// arr.shift()
// console.log(arr);

// let arr = [1,3,4,63,4]
// arr.forEach((val , index)=>{
//     console.log(val * 9);
    
// })

// let arr = [1,3,4,63,4]
// console.log(arr.reverse());

// let arr = [1,3,4,63,4]
//  let newarr = arr.map((val , index)=>{
//     console.log(val + "Hello");
    
//    return val > 3
    
// })


// let arr = [1,3,4,63,4]
// let fil = arr.filter((value,index)=>{
//     return value % 2 === 0 
// })
// console.log(fil);
// 1   4   8 
let arr = [1,3,4,63,4]
let res = arr.reduce((init , current , index)=>{
     return init + current
},0)

console.log(res);


































