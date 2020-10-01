const clearBtn = document.getElementById('clear');
const outputBlock = document.getElementById('output');
const wrapperForNumbersForEvent = document.getElementById('wrapperForNumbersForEvent');
const backSpace = document.getElementById('backSpace');
let sringOfNumbers = '';
clearBtn.addEventListener('click', () => {
	outputBlock.innerHTML = '0';
	sringOfNumbers = '';
});
backSpace.addEventListener('click', () => {
	sringOfNumbers = sringOfNumbers.slice(0, -1);
	outputBlock.innerHTML = sringOfNumbers;
	if (sringOfNumbers === '') {
		outputBlock.innerHTML = '0';
	}
});
wrapperForNumbersForEvent.addEventListener('click', writeNum);
function writeNum () {
	if (sringOfNumbers.length < 15) {	
		sringOfNumbers += event.target.textContent;
		outputBlock.innerHTML = '';
		outputBlock.innerHTML = sringOfNumbers;
	}
}
const symbolsBlock = document.getElementById('symbols');
let symbol = '';
let numOne = 0;
let numTwo = 0;
symbolsBlock.addEventListener('click', () => {
	outputBlock.innerHTML = '0';
	numOne = parseInt(sringOfNumbers);
	sringOfNumbers = '';
	symbol = event.target.id;
	console.log(symbol);
});
const equal = document.getElementById('equal');
equal.addEventListener('click', () => {
	numTwo = parseInt(sringOfNumbers);
	let answer = 0;
	switch (symbol) {
		case 'division':
			answer = numOne / numTwo;
			break;
		case 'multiplication':
			answer = numOne * numTwo;
			break;
		case 'minus':
			answer = numOne - numTwo;
			break;
		case 'plus':
			answer = numOne + numTwo;
			break;
	}
	outputBlock.innerHTML = answer;
	console.log(answer.toString());
});




