
// String para Boolean
let stringA = "anything";
let stringB = "";
let boolA = Boolean(stringA);
let boolB = Boolean(stringB);
console.log(boolA); // saída 'true' porque a string não está vazia
console.log(boolB); // saída 'false' porque a string está vazia

// Number para Boolean
let number1 = 0;
let number2 = 1; // poderia ser qualquer número diferente de 0
let bool1 = Boolean(number1);
let bool2 = Boolean(number2);
console.log(bool1); // saída 'false' porque o número é zero
console.log(bool2); // saída 'true' porque o número não é zero

// String e Boolean para Number


// Boolean e Number para String
//String(tal) ou .toString()
