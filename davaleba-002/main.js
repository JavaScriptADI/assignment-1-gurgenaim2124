let message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nulla mauris. Quisque";


let messageLength = message.length;
let costInCents = Math.ceil(messageLength / 100);
let Tax = costInCents * 0.1;
let final_price = costInCents+Tax;
let summary = "Hello world costs " + costInCents + " cents before tax and " + final_price + " cents after tax."
let isLong = messageLength > 200




console.log("Message length: " + messageLength + " characters");
console.log("Cost: " + costInCents + " cents" );
console.log("Final price: " + final_price + " cents")
console.log("Summary: " + summary)
console.log("Is message long? " + isLong);



