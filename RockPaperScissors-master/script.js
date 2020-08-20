/*
	 ico-1 = paper
	 ico-2 = rock
	 ico-3 = scissors
*/

//DOM select
const icons = document.getElementsByClassName('firstColumnIcon');
const myChoose = document.getElementById('myChoose');

const button = document.getElementById('button');
const timer = document.getElementById('timer');

const enemyChoose = document.getElementById('enemyChoose');
const selectScoreUser = document.getElementById('scoreUser');
const selectScoreBot = document.getElementById('scoreBot');


const ico = document.createElement('img'); //create tag img cuz i need show that icon
const secondIco = document.createElement('img');  // create tag for a "bot" choose
ico.style.width = '125px'; // classes for icon that choosed
ico.style.height = '125px';
secondIco.style.width = '125px'; 
secondIco.style.height = '125px';


let check = 0;
let moveUser = '';
let moveBot = '';
let scoreUser = 0;
let scoreBot = 0;


//select your move
for (let i = 0; i < icons.length; i++) {
	icons[i].addEventListener('click', clickIco);
	function clickIco() {
		myChoose.appendChild(ico); // adding img to div if user clicks 
		switch (i) {
			case 0:
				ico.src = 'ico-1.png';
				check = 1;
				moveUser = 'paper';
				break;
			case 1:
				ico.src = 'ico-2.png';
				check = 2;
				moveUser = 'rock';
				break;
			case 2:
				ico.src = 'ico-3.png';
				check = 3;
				moveUser = 'scissors';
				break;
		}
	}
}


const options = {
	timer: null, //here i save the setTimeout
	active: false, // show if a button is active or not
	startSec: 3, // how many sec you want 
	currentSec: 0,
	delay: 1000,
	rand: /*Math.floor(Math.random() * 3) + 1*/ 0, 
	btnText: {
		stop: 'Stop', // text for button in different status
		start: 'Let\'s start'
	},
	btnColor: {
		green: "#46e246",
		red: "#f45c42"
	}
};
button.addEventListener('click', click);

function click() {
	options.active = !options.active; //change status for button
	btnStatus(options); // change the text in button
	if(options.active) {
		//show the timer
		options.currentSec = options.startSec;
		showTimer(options);
		compChoose(options);
		options.timer = setTimeout(countDown, options.delay, options);
/*		compChoose(options);*/
	} else {
		//stop timer
		if(options.timer) {
			clearTimeout(options.timer); 
		} 
	}
}

function countDown(options) {
	if(options.active) {
		options.currentSec--;
		if(options.currentSec < 0) {
			options.rand = Math.floor(Math.random() * 3) + 1;
			console.log(`random: ${options.rand}`);
			options.currentSec = options.startSec;
			compChoose(options);
			algoritm();
		}
		showTimer(options);
		options.timer = setTimeout(countDown, options.delay, options);
	}
}

function showTimer(options) {
	if(options.active) {
		timer.innerHTML = options.currentSec;
		 console.log(options.currentSec);
	}
}

function btnStatus(options) {
	if(options.active) {
		button.innerHTML = options.btnText.stop;
		button.style.backgroundColor = options.btnColor.red;
		console.log(options.btnText.start);
	} else {
		button.innerHTML = options.btnText.start;
		button.style.backgroundColor = options.btnColor.green;
		console.log(options.btnText.stop);
	}
}

function compChoose(options) {
	enemyChoose.appendChild(secondIco); // adding img to div
	//computer choose
	switch (options.rand) {
	case 0:
		break;
	case 1:
		secondIco.src = `ico-1.png`;
		moveBot = 'paper';
		break;
	case 2:
		secondIco.src = `ico-2.png`;
		moveBot = 'rock';
		break;
	case 3:
		secondIco.src = `ico-3.png`;
		moveBot = 'scissors';
		break;
	}
}

function algoritm() {
	if (moveUser === '' | moveBot === '') {

	} else if (moveBot === moveUser) {
		console.log('draw');
	} else if (moveUser === 'paper' && moveBot === 'rock') {
		console.log('user win!');
		scoreUser += 1; 
		selectScoreUser.innerHTML = scoreUser;
	} else if (moveUser === 'rock' && moveBot === 'scissors') {
		console.log('user win!');	
		scoreUser += 1;
		selectScoreUser.innerHTML = scoreUser;
	} else if (moveUser === 'scissors' && moveBot === 'paper') {
		console.log('user win!');
		scoreUser += 1;
		selectScoreUser.innerHTML = scoreUser;
	} else {
		console.log('you lose!');
		console.log(`moveUser: ${moveUser} \n moveBot: ${moveBot}`);
		scoreBot += 1;
		selectScoreBot.innerHTML = scoreBot;
	}

}










/*
	let active = 0;
	button.onclick = function() {
		if (active === 0) {
			active = 1;
			button.textContent = 'Stop';
			button.style.backgroundColor = '#f45c42';
		} else {
			active = 0;
			button.textContent = 'Let\'s start';
			button.style.backgroundColor = '#46e246';
		}
	}


function clickOnButton(){
	if (active === 0) {
		enemyChoose.appendChild(secondIco); // adding img to div

		//show the timer
		let numberOfSecond = 4;
		setTimeout(count, 1000);
		let count = (() => {
			let rand = Math.floor(Math.random() * 3) + 1; // random number to select the move
		    numberOfSecond--;
		    if (numberOfSecond > 0) {
		      setTimeout(count, 1000);
		    } 
		    if (numberOfSecond === 0) {
		    	numberOfSecond = 4;
		    	count();//show again timer after 3sec over & over again before user's click "Stop game"

		    	//computer choose
		    	switch (rand) {
				case 1:
					secondIco.src = `ico-1.png`;
					moveBot = 'paper';
					break;
				case 2:
					secondIco.src = `ico-2.png`;
					moveBot = 'rock';
					break;
				case 3:
					secondIco.src = `ico-3.png`;
					moveBot = 'scissors';
					break;
				}
		    }
		    timer.innerHTML = numberOfSecond;
		});
		let timeDelay = numberOfSecond * 1000;
		let delay = (() => {
			//algoritm of the game
			if (moveUser === '' | moveBot === '') {
				
			}
		    else if (moveBot === moveUser) {
				console.log('draw');
			}
			else if (moveUser === 'paper' && moveBot === 'rock') {
				console.log('user win!');
				scoreUser += 1; 
				selectScoreUser.innerHTML = scoreUser;
			}
			else if (moveUser === 'rock' && moveBot === 'scissors') {
				console.log('user win!');	
				scoreUser += 1;
				selectScoreUser.innerHTML = scoreUser;
			}
			else if (moveUser === 'scissors' && moveBot === 'paper') {
				console.log('user win!');
				scoreUser += 1;
				selectScoreUser.innerHTML = scoreUser;
			} else {
				console.log('you lose!');
				console.log(`moveUser: ${moveUser} \n moveBot: ${moveBot}`);
				scoreBot += 1;
				selectScoreBot.innerHTML = scoreBot;
			}
		});
		setInterval(delay, timeDelay);//run the game over and over again before user's scick on "stop game" 
	} else {
		return;
	}
}*/