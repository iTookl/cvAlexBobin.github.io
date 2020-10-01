const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
/*let day = new Date();*/


setInterval(() => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;


	hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;
})


//		NEW YORK TIME		
const deg2 = 6;
const hr2 = document.querySelector('#hr-2');
const mn2 = document.querySelector('#mn-2');
const sc2 = document.querySelector('#sc-2');

setInterval(() => {
	let day = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
	var hr = day.split(' ')[1].split(':')[0];
	var mn = day.split(' ')[1].split(':')[1];
	var sc = day.split(' ')[1].split(':')[2];

	
	let hh = hr * 30;
	let mm = mn * deg;
	let ss = sc * deg;

	hr2.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
	mn2.style.transform = `rotateZ(${mm}deg)`;
	sc2.style.transform = `rotateZ(${ss}deg)`;
})



//		MOSCOW TIME		

const deg3 = 6;
const hr3 = document.querySelector('#hr-3');
const mn3 = document.querySelector('#mn-3');
const sc3 = document.querySelector('#sc-3');

	


setInterval(() => {
	let day3 = new Date().toLocaleString('ru-RU', {timeZone: "Europe/Moscow"});
	var hr = day3.split(' ')[1].split(':')[0];
	var mn = day3.split(' ')[1].split(':')[1];
	var sc = day3.split(' ')[1].split(':')[2];

	
	let hh = hr * 30;
	let mm = mn * deg;
	let ss = sc * deg;

	hr3.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
	mn3.style.transform = `rotateZ(${mm}deg)`;
	sc3.style.transform = `rotateZ(${ss}deg)`;
})


//		LONDON TIME
const deg4 = 6;
const hr4 = document.querySelector('#hr-4');
const mn4 = document.querySelector('#mn-4');
const sc4 = document.querySelector('#sc-4');

	


setInterval(() => {
	let day4 = new Date().toLocaleString('en-GB', {timeZone: "Europe/London"});
	var hr = day4.split(' ')[1].split(':')[0];
	var mn = day4.split(' ')[1].split(':')[1];
	var sc = day4.split(' ')[1].split(':')[2];

	
	let hh = hr * 30;
	let mm = mn * deg;
	let ss = sc * deg;

	hr4.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
	mn4.style.transform = `rotateZ(${mm}deg)`;
	sc4.style.transform = `rotateZ(${ss}deg)`;
})


//		SYDNEY TIME 
const deg5 = 6;
const hr5 = document.querySelector('#hr-5');
const mn5 = document.querySelector('#mn-5');
const sc5 = document.querySelector('#sc-5');

	


setInterval(() => {
	let day5 = new Date().toLocaleString("en-US", {timeZone: "Australia/Sydney"});

	var hr = day5.split(' ')[1].split(':')[0];
	var mn = day5.split(' ')[1].split(':')[1];
	var sc = day5.split(' ')[1].split(':')[2];

	
	let hh = hr * 30;
	let mm = mn * deg;
	let ss = sc * deg;

	hr5.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
	mn5.style.transform = `rotateZ(${mm}deg)`;
	sc5.style.transform = `rotateZ(${ss}deg)`;
})





// BERLIN TIME 
const deg6 = 6;
const hr6 = document.querySelector('#hr-6');
const mn6 = document.querySelector('#mn-6');
const sc6 = document.querySelector('#sc-6');

	


setInterval(() => {
	let day6 = new Date().toLocaleString(({timeZone: "Europe/Berlin"}));
	var hr = day6.split(' ')[1].split(':')[0];
	var mn = day6.split(' ')[1].split(':')[1];
	var sc = day6.split(' ')[1].split(':')[2];

	
	let hh = hr * 30;
	let mm = mn * deg;
	let ss = sc * deg;

	hr6.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
	mn6.style.transform = `rotateZ(${mm}deg)`;
	sc6.style.transform = `rotateZ(${ss}deg)`;
})


