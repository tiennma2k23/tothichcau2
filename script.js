let count=0;
function cancel(str) {
	let pos = document.getElementById(str);
	let x1=Math.ceil(Math.random()*300);
	let x2=Math.ceil(Math.random()*300);
	let x3=Math.ceil(Math.random()*300);
	let x4=Math.ceil(Math.random()*300);
	pos.style.left=x1+"px";
	pos.style.right=x2+"px";
	pos.style.top=x3+"px";
	pos.style.bottom=x4+"px";
	count++;
	if (count>9)
		nice('modalno');
}
function nice(str){
	let pos = document.getElementById(str);
	pos.style.visibility="visible";
	if (screen.width>600){
		pos.style.width="300px";
		pos.style.height="500px";
	}
	else{
		pos.style.width="200px";
		pos.style.height="300px";
	}
	let bg = document.getElementById('body');
	bg.classList.add('invi');
	let x = document.getElementById('no');
	x.classList.add('nodisplay');
	let y = document.getElementById('yes');
	y.classList.add('nodisplay');
}
function fix(str){
	let pos = document.getElementById(str);
	pos.style.visibility="hidden";
	pos.style.width="0px";
	pos.style.height="0px";
	let bg = document.getElementById('body');
	bg.classList.remove('invi');
	let x = document.getElementById('no');
	x.classList.remove('nodisplay');
	let y = document.getElementById('yes');
	y.classList.remove('nodisplay');
}
