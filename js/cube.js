$(document).ready(function() {
let $display = $("#display");
let page1 = 1;
let page2 = 0;
let page3 = 0;
let page4 = 0;
let $button1 = $("#button-page1");
let $button2 = $("#button-page2");
let $button3 = $("#button-page3");
let $button4 = $("#button-page4");


$button1.on("click", function () {
	  if (page1!=1) {
setTimeout(function () {
	document.getElementById('display').classList.add('zoom');
},100);

setTimeout(function () {           
			document.getElementById('cube').classList.remove('page2');
			document.getElementById('cube').classList.remove('page3');
			document.getElementById('cube').classList.remove('page4');
			document.getElementById('cube').classList.add('page1');
			document.getElementById('button-page4').classList.remove('button-active');
			document.getElementById('button-page3').classList.remove('button-active');
			document.getElementById('button-page2').classList.remove('button-active');
			document.getElementById('button-page1').classList.add('button-active');
			page4 = 0;
			page1 = 1;
			page2 = 0;
			page3 = 0;
			var delay = 1, maxDelay = 10;
			
		   
}, 800);

setTimeout(function () {
		document.getElementById('display').classList.remove('zoom');
}, 1600);
	} else {
		page1=1;
	}
});

$button2.on("click", function () {
		  if (page2!=1) {
setTimeout(function () {
	document.getElementById('display').classList.add('zoom');
},100);

setTimeout(function () {
			document.getElementById('cube').classList.remove('page4');
			document.getElementById('cube').classList.remove('page3');
			document.getElementById('cube').classList.remove('page1');
			document.getElementById('cube').classList.add('page2');
			document.getElementById('button-page4').classList.remove('button-active');
			document.getElementById('button-page3').classList.remove('button-active');
			document.getElementById('button-page1').classList.remove('button-active');
			document.getElementById('button-page2').classList.add('button-active');
			page1 = 0;
			page2 = 1;
			page3 = 0;
			page4 = 0;
}, 800);

setTimeout(function () {
		document.getElementById('display').classList.remove('zoom');
}, 1600);
console.log(1)
	} else {
		page2=1;
	}
});

$button3.on("click", function () {
		  if (page3!=1) {
setTimeout(function () {
	document.getElementById('display').classList.add('zoom');
},100);

setTimeout(function () {
			document.getElementById('cube').classList.remove('page4');
			document.getElementById('cube').classList.remove('page2');
			document.getElementById('cube').classList.remove('page1');
			document.getElementById('cube').classList.add('page3');
			document.getElementById('button-page4').classList.remove('button-active');
			document.getElementById('button-page1').classList.remove('button-active');
			document.getElementById('button-page2').classList.remove('button-active');
			document.getElementById('button-page3').classList.add('button-active');
			page4 = 0;
			page1 = 0;
			page2 = 0;
			page3 = 1;
}, 800);

setTimeout(function () {
		document.getElementById('display').classList.remove('zoom');
}, 1600);
	} else {
		page3=1;
	}
});


$button4.on("click", function () {
		  if (page4!=1) {
setTimeout(function () {
	document.getElementById('display').classList.add('zoom');
},100);

setTimeout(function () {
			document.getElementById('cube').classList.remove('page1');
			document.getElementById('cube').classList.remove('page2');
			document.getElementById('cube').classList.remove('page3');
			document.getElementById('cube').classList.add('page4');
			document.getElementById('button-page3').classList.remove('button-active');
			document.getElementById('button-page1').classList.remove('button-active');
			document.getElementById('button-page2').classList.remove('button-active');
			document.getElementById('button-page4').classList.add('button-active');
			page1 = 0;
			page2 = 0;
			page3 = 0;
			page4 = 1;
}, 800);

setTimeout(function () {
		document.getElementById('display').classList.remove('zoom');
}, 1600);
	} else {
		page4=1;
	}
});

});