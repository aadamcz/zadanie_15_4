'use strict';

//Zad. 1. 
var sayHello = function sayHello() {
  var hello = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello ';
  var world = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'World';
  return console.log(hello + ' ' + world);
};

//Zad.2.

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

//Zad. 3. 

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var result = args.reduce(function (x, y) {
    return x + y;
  });
  return result / args.length;
};

//Zad. 4. 
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var avaerage = function () {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args.reduce(function (sum, next) {
    return sum + next;
  });
}.apply(undefined, grades) / grades.length;

//Zad. 5. Destrukturyzacja w celu wyciągnięcia firstname i lastname.OKOK

var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = data[2],
    lastname = data[4];
