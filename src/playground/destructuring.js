




// const person = {
// 	name: 'Vova',
// 	age: 26,
// 	location: {
// 		city: 'Saint-Petersburg',
// 		temp: 92
// 	}
// };


// const { name, age } = person;
// console.log(`${name} is ${age}.`);


// const {city, temp: temperature} = person.location;
// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const {name: publisherName = 'Selfpublish'} = book.publisher;

// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;
console.log(`You are in ${city} ${state}.`);



const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [title, , mediumPrice] = item;

console.log(`A medium ${title} costs ${mediumPrice}`);