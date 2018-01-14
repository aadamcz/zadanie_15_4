//Zad. 1.
const sayHello = (hello = `Hello `, world = "World") =>
	console.log(`${hello} ${world}`);

//Zad.2.

const multiply = (a, b = 1) => a * b;

//Zad. 3.

const average = (...args) => {
	const result = args.reduce((x, y) => {
		x + y;
	});
	return result / args.length;
};
//Inne rozwiązanie
const average = (...args) => args.reduce((x, y) => x + y) / args.length;

//Zad. 4.
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const average = (...grades) =>
	grades.reduce((sum, next) => sum + next) / grades.length;

//Zad. 5. Destrukturyzacja w celu wyciągnięcia firstname i lastname.

const data = [1, 4, "Iwona", false, "Nowak"];
const [, , firstname, , lastname] = data;
