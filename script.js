
var display = document.getElementById('display');
		display.style.color = "grey";
		function int(num) {

			if (display.value == 0 && display.value.length == 1) {
				display.value = num;
			} else {
				display.value += num;

			}
		}

		function c() {
			display.value = 0;
		};


		function b() {
			if (display.value == 0) {
				display.value = 0;
			} else {
				display.value = display.value.substr(0, display.value.length - 1);
			}
		}

		function operator(s) {
			var lastNum = display.value;
			var str = lastNum.toString();
			var lastNumber = str.charAt(str.length - 1);

			if (display.value == 0) {
				display.value += "";

			} else if (isNaN(lastNumber) == true) {
				display.value = display.value.substr(0, display.value.length - 1);

			}
			else if (isNaN(lastNumber) == 0) { display.value += s; }


		}
		function zero(zero) {
			if (display.value == 0 && display.value.length == 1) {
				display.value = zero;

			} else {
				display.value += zero;
			}
		}



		function t(t) {

			var lastNum = display.value;
			var str = lastNum.toString();
			var lastNumber = str.charAt(str.length - 1);
			// var operator = document.getElementsByClassName('btn')
			// console.log(operator);
			if (display.value == "") {
				display.value += "";
			} else if (display.value == 0) {
				display.value = "0.";
			} else if (display.value > 0 && isNaN(lastNumber) == true) { display.value += "" }
			else if (isNaN(lastNumber) == false) { display.value += t }
			else {
				if (display.value.indexOf(".") === -1) {
					display.value = display.value + ".";
				}
			};
		}

		
				
		function plusMinus() {
			display.value = display.value * -1;
		};

		function sqrt() {
			display.value = Math.sqrt(display.value);

		}

		function evall() {
			display.value = eval(display.value);
		}
































// var person = {
// 	name: 'Rahit',
// 	last_name: 'Rustemzade',
// 	age: 52,
// }


// var getPerson = function (person) {

// 	var data = person;
	
// 	this.setAttribute = function (key, value) {
// 		data[key] = value;
// 	};
	
// 	this.setName = function (name) {
// 		data.name = name;
// 	};
// 	this.setLastName = function (name) {
// 		data.last_name = name;
// 	};
// 	this.returnData = function () {
// 		return data;
// 	}
// }

// var p = new getPerson(person);

// console.log(p.setName('Irahit'));

// console.log(p.setAttribute('age', 25));

// console.log(p.returnData())



// var cars = {

// 	name: 'Mersedes',
// 	model: 's class',
// 	age  : '2009',
// 	color: 'black',
// 	ban_type: 'sedan'

// };


// var getCars = function (cars){

// 	// return cars;
// 	this.carsAge = function(age){
// 		cars.age = age;
// 	}
// 	this.carsModel = function(model){
// 		cars.model = model;
// 	}
// 	this.carsBan_type = function(ban_type){
// 		cars.ban_type = ban_type;
// 	}
// 	this.returnCar = function () {
// 		return cars;
// 	}
// }

// var newCar = new getCars(cars);
// newCar.carsAge('2016')
// newCar.carsModel('GL')
// newCar.carsBan_type('Offroider')
// console.log(newCar.returnCar())








// (function($){

// var calculator = {
// 	//display container
// 	display: [],

// 	//initialisation function
// 	init: function(){
// 		this.cacheDOM();
// 		this.bindClick();
// 		this.render();
// 	},

// 	//cache common DOM elements
// 	cacheDOM: function(){
// 		this.displayDIV= $("#inputValue");
// 		this.numbtn = $('#numberpad .cal-btn');
// 		this.clearbtn = $('#clear');
// 		this.delbtn = $('#delete');
// 	},

// 	//bind all events
// 	bindClick: function(){
// 		this.clearbtn.on('click', this.clearDis.bind(this));
// 		this.delbtn.on('click', this.delDis.bind(this));
// 		this.numbtn.on('click', this.checkInput.bind(this));
// 	},

// 	// clear calculator display
// 	clearDis: function(){
// 		this.display=[];
// 		this.render();
// 	},

// 	// backspace
// 	delDis: function() {
// 		this.display.splice(-1,1);
// 		this.render();
// 	},

// 	//function to evaluate arithmetic on display.
// 	evaluate: function(){
// 	var lastDispChar = this.display[this.display.length - 1];

// 		if (isNaN(lastDispChar)) {;
// 			this.clearDis();
// 			this.render('error!');
// 			return true;
// 		}
// 		else {
// 			var result =  eval(this.display.join(''));
// 			this.clearDis();
// 			this.display.push(result);
// 			this.render();
// 			return true;
// 		}
// 	},

// 	// Resolve user's input
// 	checkInput: function(event){

// 		var lastDispChar = this.display[this.display.length - 1];
// 		var buttonVal = $(event.target).closest('div').text();

// 		//evaluate arithmitic
// 		if(buttonVal === '=') {
// 			if(this.evaluate()){
// 				return;
// 			}
// 		}

//     if (isNaN(buttonVal)) {
//       // Prevent user entering operator when display is empty
//       if (!lastDispChar){
//         return;
//       }
//       // New operator overwrites previous operator
//       if (isNaN(lastDispChar)){
//         this.display.splice(-1, 1);
//       }
//     }

//     // Update display array based on user input
//     this.display.push(buttonVal);
//     this.render();

//   },

// 	//render calculator display
// 	render: function(message) {
// 		this.displayDIV.text(message || this.display.join(''));
// 	},
// }

// // Run initialisation function
// calculator.init();

// })(jQuery);