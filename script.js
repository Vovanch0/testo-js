/*var x=1;
while (x<=10) {
	console.log(x);
	x++;
}*/

/*
function sqrt(s) {
	return s*s;
}
var x=sqrt(25)
console.log(x);

function isnumberOdd(x) {
	if (x%2>0 ) {
		return true
	}
	else {
		return false
	}
}
console.log(isnumberOdd(0));

function makeSomereplace(text){
	return text.replace(/ /g,"_");

}
console.log(makeSomereplace("noise"));*/
/*
var carss = {
	firstname: "Jack",
	lastName: "Daniels",
	regYear: 2017,
	hasDiscount: true,
	discount: 0,
	calculateDiscount: function() {
		var discount;
		var numberOfYears = 2020-this.regYear;
		if (numberOfYears<=2) {
			discount=0;
		} else if ((numberOfYears>2) && (numberOfYears<=5)) {
			discount=20;
		} else if (numberOfYears>5) {
			discount=30;
		}
		this.discount = discount;
		//return discount;
	}

}
Bvyx/LgHBgcICgsCxObg4jDd8uL+FhckGhojNSXiLnkiECLMC08CE78E
jHggKjKjPHlNw8V30VikPLfC2txCRfxj2Vx/tiuP74++Mkbj7F8C0D0B
GX+cO+JyRqetDG9RZVXMfwf4gqbqBjpy8z2M/+rXUDGo2PdmC4DDD3FE
vw259SrRNronTk9dvwy+MYc1geMEPHJIa2hqCQC34B7985


BgkYylUHBgcICgsaWmFva3ExQHJwfGB4cnxscn8fHScOGN0TD60A5BD8
QCcWBHvPQscq3m9X1zERg4w4ejTnWyrIZBNG4JedIgLUU+f922FAF2BC
Bu57g9M8QaIunL1dbly/VWhoesoUtQEhpa315+ireVfcerHX6C2A4AC0
xelTuLWWgfvyPAHk3uwTTy6R5NKyhJyH4Y8YLmM/Mw41F92034
carss.calculateDiscount();
//carss.discount = carss.calculateDiscount();
console.log(carss);

var carsDatabase = [
	{
		name: "Toyota",
		model: "RAV4",
		color: "grey",
		year: 2011,
		isSold: true
	},
	{
		name: "Toyota",
		model: "Supra",
		color: "black",
		year: 2018,
		isSold: false
	},
	{
		name: "Toyota",
		model: "RAV4",
		color: "white",
		year: 2011,
		isSold: false
	},
	{
		name: "Toyota",
		model: "Supra",
		color: "red",
		year: 2020,
		isSold: true
	}

]

for (i=0; i<carsDatabase.length; i++) {
	if (carsDatabase[i].isSold === false) {
		console.log(carsDatabase[i]);		
	}

}
*/
var h1 = document.getElementById("header");

console.log(h1.innerHTML);
h1.addEventListener("click", function() {
	this.style.color = "red" ;
});

function change() {
	h1.style.color = "green";
}



var button = document.querySelector("button");
var isBackApplied = false;

button.addEventListener("click", function() {
	if (isBackApplied === false) {
		document.querySelector("body").style.backgroundColor = "blue";
		isBackApplied = true;
	} else {
		document.querySelector("body").style.backgroundColor = "white";
		isBackApplied = false;
	}
});




var sym="#"
while (sym.length<=7) {
	console.log(sym);
	sym = sym+"#";
};


for (var x=1; x<=100;x++) {
	if (x%3==0 && x%5==0) {
		console.log("FizzBuzz");
	} else if (x%3==0) {
		console.log("Fizz");
	} else if (x%5==0) {
		console.log("Buzz");
	} else 
	console.log(x);
}

function testWhile(a) {
    var x=0;
    var y=0;
    while (y<=a)
	{if (y%2==0) {x=x+y;}
	
            y++;}
	 

 
    return x;
}


function testStr(a, b) {

	a=a.toUpperCase();
	return a.concat(b); 

 }


 function testArray(a, b) {
 
	var y=0;
	var y1=0;
	var x=0;
	var x1=0;

    for (i = 0; i<a.length; i++)
    {y=a[i];
	 x=x+y; 
	}

	 for (i1 = 0; i1<b.length; i1++)
	 {y1=b[i1];
	  x1=x1+y1; 
	 }
	return x+x1;
	 }
	 console.log(testArray([1,1,4], [1,2,4]));	 

	 function testArray1(a, b) {
		let sum=0;
			a=a.concat(b);
		for (i=0;i<a.length;i++) {
			sum+=a[i];
			console.log(sum);
		}
		return sum;

	}

	function testArray2(a, b) {
		var myArray1 = new Array(); 
		var myArray2 = new Array(); 

		for (i=0;i<a.length;i++){
			myArray1[i]=a[i];

		}
		console.log(myArray1);
		for (e=0;e<b.length;e++){
			myArray2[e]=b[e];

		}
    
		myArray1=myArray1.concat(myArray2);
		myArray1.unshift("Иванов");
		
		return(myArray1.reverse());
		// Тут нужно написать решение
	}
	

	console.log(Date());	
	function testDateTime(a, b) {
		var myArray = ["Воскресенье","Понедельник", "Вторник", "Среда","Четверг","Пятница","Суббота"]; 
		var x = new Date (a);
		var y = new Date (y);
	if (Date.parse(a) > Date.parse(b)) {
		return myArray[Date.parse(a).getDay()];
	} else //return myArray[Date.parse(b).getDay()];
	return x.getDay();
}

	console.log(testDateTime("04 August 1909 00:24","03 November 1909 06:54"));


	
 const matrix = [
	 [1, 4, 8, 9],
	 [6, 2, 11, 1],
	 [8, 0 , -3, -5],
	 [-2, 10, 8 , 1]
 ]   
 for (i=0;i<4; i++)
 {
	 for (j=0; j<4;j++) {
		 	 if (i>j)
	 { console. log (matrix[i][j])};
 }
 }
console.log(testStr("Hello", "world"));

console.log(testWhile(5));

function testRegExp(s, sub_s) {
	var sub = new RegExp(sub_s,"g");
	i=s.match(sub);
	console.log("Yo"+i);
}
testRegExp("This is", "is");

let cars=['Honda', 'Toyota']
console.log(cars);

const upperCars=cars.map(car => {
	return car.toUpperCase()})
console.log(upperCars);

let number=[3,11,12,19,9,1,21];
number.sort();
console.log(number[0]);

