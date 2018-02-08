var femaleNames = ['Ania', 'Kasia', 'Ola', 'Asia']; 
var maleNames = ['Darek', 'Marcin', 'Adam', 'Piotr'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Ania';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
	console.log('Current arrays is : ' + allNames);
}
else if (allNames.indexOf(newName) > -1) {
	console.log(newName + ' already exists in the array' );
}

