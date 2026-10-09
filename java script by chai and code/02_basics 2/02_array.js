const marvel_heros=["thor", "ironman","spiderman"];
const de_heros=["superman","flash","batman"];


//marvel_heros.push(de_heros)

//const newarr=marvel_heros.concat(de_heros);


const newarr=[...marvel_heros,...de_heros]
console.log(newarr);


const anotherarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const realno=[anotherarr.flat(Infinity)]
console.log(realno);



console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name :"hitesh"}))
   


const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1,score2,score3));















