var fruit = {
apple: 20,
pear: 20,
peach: 10
};
var sum = 0; //initialize sum variable
for (x in fruit) { //created a loop where it will extract attribute per iteration
	sum = sum + fruit[x]; //used sum and add it with the extracted attribute
}
console.log(sum);//output is 50