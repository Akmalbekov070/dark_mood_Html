const array = ['olma', 'nok', 'xurmo', 'gilos'];
const arrayes = ['olma', 'yuq', 'xurmo', 'gilos'];
const array3 = array.concat(arrayes);
// console.log(arrayes);

const array1 = [3, 66, 78];
const array2 = ['d', 'e', 'f'];
// const array4 = array1.keys(element => element > 1);
const array4 = array1.flatMap(num => (num === 2 ? [2, 2] : 190));

// console.log(array4);

const array8 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
	console.log(value);
}

//find bir xonali ikki xonali sonlar va boshqalarni olib beradi
//push bu qushadi
//shift boshidan arrayni olib tashlaydi
//unshift bu arrayga suz qushadi
//concat bu ikkala arrayni bir biriga qushadi
////indexOff bu nechi indexda turganini kursatib beradi
//keys bu massivda qullaniladi faqat klujini olib beradi
//flatMap bu tenglashtiradi
//sort bu orqada turgan arraylarni oldinga joylashtiradi
//value bu arraylar qiymat qushadi
