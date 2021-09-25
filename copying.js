//1. Клонирование объекта при помощи функции с циклом (поверхностная копия не клонирует вложенные структуры)

function copy(firstObj) {
	let secondObj = {};
	let key;
	for (key in firstObj){
		secondObj[key] = mainObj[key];
	}
	return secondObj;
}

const secondObj = copy(firstObj);

//2.  Поверхностная копия при помощи метода Object.assign
Object.assign(secondObj, firstObj);   //первый аргумент метода обьект в которые передаются свойства, второй аргумент объект свойства которого передаются. Метод создает третий объект не соответствующий не первому не второму.
const secondObj = Object.assign({}, firstObj);  //создание копии.

//3. Создание копии массива
const secondArr = firstArr.slice();  //в слайс можно передать с какого по какой элемент массива копировать. 

//4. При помощи spread оператора
const secondArr = [...firstArr]; //массив
const secondObj = {...firstObj}; //объект
