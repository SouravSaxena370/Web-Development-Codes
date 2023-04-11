console.log("har\"".length);

let passage="This is the passage i was trying to write from a long time.";
console.log(passage.includes("time"));
console.log(passage.startsWith("Th"));
console.log(passage.endsWith("ime."));

console.log("America".toLowerCase());

let statement="Please give Rs.100";
let money=statement.match(/(\d+)/)[0];
console.log(money);

statement[4]='x';
console.log(statement);
