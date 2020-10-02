var user = {}; //empty object initialized 
user.name = "John"; //added 'name' attribute to the empty object with the value "John", output: {name:"John"}
user.surname = "Mike"; //added 'surname' attribute to the user object with the value "Mike", output: {name:"John",surname:"Mike"}
user.name = "Peter"; //replaced 'name' attribute to the user object with the value "Peter", output: {name:"Peter",surname:"Mike"}
delete user.name //deleted the 'name' attribute, output: {surname: 'Mike'}
console.log(user);
