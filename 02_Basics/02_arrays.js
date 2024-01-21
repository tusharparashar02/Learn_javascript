const marvel_hero =["thod" , "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_hero.push(dc_heros)
console.log(marvel_hero);

// concat method to add to arrays
marvel_hero.concat(dc_heros)
console.log(marvel_hero);

// push method add second array into 1st exesting array
// but concat method add second array into 1st and return new array

// spred method 
const all_new_heros = [...marvel_hero, ...dc_heros]
console.log(all_new_heros);

// flat method
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
const anotherArray = [1,2,3,[4,5,6],7,[4,5,6,[8,9]]]
const real_anotherArray = anotherArray.flat(Infinity)
console.log(real_anotherArray);

//create array from another array
console.log(Array.isArray("tushar"));
console.log(Array.from("tushar"));

//of method to create an array from variable
let score1 = 1100
let score2 = 2532
let score3 = 544
console.log(Array.of(score1,score2,score3));