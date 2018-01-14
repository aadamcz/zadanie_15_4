//Zad. 1.
const sayHello = (hello = `Hello `, world = "World") =>
	console.log(`${hello} ${world}`);

//Zad.2.

let multiply = (a, b = 1) => {
	return a * b;
};

//Zad. 3.

const average = (...args) => {
	const result = args.reduce((x, y) => {
		x + y;
	});
	return result / args.length;
};

//Zad. 4.
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const average = (...args) => args.reduce((sum, next) => sum + next)/args.length; 

//Zad. 5. Destrukturyzacja w celu wyciągnięcia firstname i lastname.OKOK

const data = [1, 4, "Iwona", false, "Nowak"];
const [, , firstname, , lastname] = data;
