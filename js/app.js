// $(document).ready(function() {
console.log("Connect Four!");

////LET'S PSUEDO CODE THIS AND THEN JUDO CODE IT!//////////
// 1. name input- when clicked players div will disappear and a new div with 
// their names will apper [x]
// 2. also, when enter button is clicked, convert player1 and player2 to the 
// names entered in the inputs[x]
// 3. play again button will clear the baord and reset all classes to normal, but will
// keep the div with the players names
// 4. coins above board will be click events that drop coins into that column,
// stopping at first available spot- make these coins an array?
// 5. coins above board change color depending on whose turn it is, triggered by start
// button and change color with each turn.
// 6. make an array of the game board
// 7. figure out what vars you need
// 8. change the css animation that pulls the page up to a js click event on the button



///////////FIRST SECTION OF PAGE////////////////

/// start button updates player1 and player2 to the input from the boxes
var player1 = document.getElementById('#player1');
var player2 = document.getElementById('#player2');
// console.log(player1);
// console.log(player2);

// var enterButton = document.getElementById('enter_button');
// enterButton.click(function(){
// // var getval = ($("player1").val());
// console.log(enterButton);
// console.log('click');  
// });

// enterButton();

// enter button takes in the names from the input and prints them on the screen,
// it also hides the div with the inputs and button and reveals a new one with the 
// names and a message
$( "#enter_button" ).click(function() {
 // console.log('enter button was clicked');
 var player1 = $('#player1').val();
 var player2 = $('#player2').val();
 // console.log(player1);
 // console.log(player2);
 $('.players').hide();
 $( ".names" ).append( "<h2>" + player1 + "</h2>" + "<h2>VS</h2>" + "<h2>" + player2 + "</h2>"  + "<h3>Good luck.</h3>" + "<br>" + "<button id='start'>Play</button>");


// clearButton resets the board by reloading the entire page. I would like to come back and figure out a better way of doing this.
$("#clearButton").click(function() {
	alert("Good Game " + player1 + " and " + player2);
	document.location.reload(true);
	console.log('clear');
	});
// clicking the start button slides up the page and reveals the board
$("#start").click(function() {
	$(".main").slideUp("slow", function() {
    // Animation complete.
  });
// console.log("clicks");
});

});


///////MAIN GAME//////////////

 $playerA = true;
 $playerB = false

//this operates on the dropper dive, with all the buttons in it. Checks if it was clicked and toggles between true and false for each player.
$("#dropper").click(function() {
  if (!$(this).hasClass('clicked')) {
	if ($playerA == true) {
		$(this).addClass('clicked');
		$playerA = false;
		$playerB = true;

	}	else {
		if ($(this).hasClass('clicked')) {
		$(this).addClass('clicked');
		$playerA = true;
		$playerB = false;
}
}
	} //ends else statement
} )

//newArray and number work together for determining what background color fills in the circle.
var newArray = ["red", "blue"];
var number = 0;
 	console.log(newArray[number]);

 	var checkWinner = function(){
$gameBoard = [
[$('td').eq(42), $('td').eq(35), $('td').eq(28), $('td').eq(21), $('td').eq(14), $('td').eq(7)],
[$('td').eq(43), $('td').eq(36), $('td').eq(29), $('td').eq(22), $('td').eq(15), $('td').eq(8)],
[$('td').eq(44), $('td').eq(37), $('td').eq(30), $('td').eq(23), $('td').eq(16), $('td').eq(9)],
[$('td').eq(45), $('td').eq(38), $('td').eq(31), $('td').eq(24), $('td').eq(17), $('td').eq(10)],
[$('td').eq(46), $('td').eq(39), $('td').eq(32), $('td').eq(25), $('td').eq(18), $('td').eq(11)],
[$('td').eq(47), $('td').eq(40), $('td').eq(33), $('td').eq(26), $('td').eq(19), $('td').eq(12)],
[$('td').eq(48), $('td').eq(41), $('td').eq(34), $('td').eq(27), $('td').eq(20), $('td').eq(13)]
];//ends gameBoard

if (($gameBoard[0][0].hasClass("playerRed")) && ($gameBoard[0][1].hasClass("playerRed")) && ($gameBoard[0][2].hasClass("playerRed") ) &&  ($gameBoard[0][3].hasClass("playerRed") ) ){
	console.log('Red Wins'); 
} 

if (($gameBoard[0][2].hasClass("playerRed")) && ($gameBoard[0][3].hasClass("playerRed")) && ($gameBoard[0][4].hasClass("playerRed") ) &&  ($gameBoard[0][5].hasClass("playerRed") ) ){
	console.log('Red Wins'); 
} 

};//ends checkWinner()


//var column1-7 are individual functions for each dropper. It alternates between red and blue based on what has been
//dictated by the number variable. 

 var column1 = function () {
if ($playerA == true) {
 var dropper1 = function () {
 $col1 = [$('td').eq(42), $('td').eq(35), $('td').eq(28), $('td').eq(21), $('td').eq(14), $('td').eq(7)];
 counter1 = -1;
 $('#dropper1').click(function() {
 	counter1 = (counter1 + 1)   ;   ///may need this later- % $col1.length before the ;
 	$col1[counter1].addClass('playerRed').css('background',newArray[number]);
 		if(number == 0){
 		number = 1;
 		console.log(number);
 		checkWinner();
 	} else {
 		number = 0;
 	}
 });
 	};
 	dropper1();
 }else{
 var dropper1 = function () {
 $col1 = [$('td').eq(42), $('td').eq(35), $('td').eq(28), $('td').eq(21), $('td').eq(14), $('td').eq(7)];
	//console.log(col1);
 counter1 = -1;
 //console.log(col1[counter]);
 $('#dropper1').click(function() {
 	counter1 = (counter1 + 1 ) ;   ///may need this later- % $col1.length before the ;
 	$col1[counter1].css('background',newArray[number]);
console.log('dsfas')
 });
 	};
	checkWinner();
 	dropper1();
 
}

//}) // ends click function
 };
 column1();

var column2 = function () {
if ($playerA == true) {
 var dropper2 = function () {
 $col2 = [$('td').eq(43), $('td').eq(36), $('td').eq(29), $('td').eq(22), $('td').eq(15), $('td').eq(8)];
	//console.log(col1);
 counter2 = -1;
 //console.log(col1[counter]);
 $('#dropper2').click(function() {
 	counter2 = (counter2 + 1)   ;   ///may need this later- % $col1.length before the ;
 	$col2[counter2].css('background',newArray[number]);
 		if(number == 0){
 		number = 1;
 	} else {
 		number = 0;
 	}
 });
 	};
 	dropper2();
 }else{
 var dropper2 = function () {
 $col2 = [$('td').eq(43), $('td').eq(36), $('td').eq(29), $('td').eq(22), $('td').eq(15), $('td').eq(8)];
	//console.log(col1);
 counter2 = -1;
 //console.log(col1[counter]);
 $('#dropper2').click(function() {
 	counter2 = (counter2 + 1 )   ;   ///may need this later- % $col1.length before the ;
 	$col2[counter2].css('background',newArray[number]);
 });
 	};
 	dropper2();
}
 };
 column2();


var column3 = function () {
if ($playerA == true) {
 var dropper3 = function () {
 $col3 = [$('td').eq(44), $('td').eq(37), $('td').eq(30), $('td').eq(23), $('td').eq(16), $('td').eq(9)];
	//console.log(col1);
 counter3 = -1;
 //console.log(col1[counter]);
 $('#dropper3').click(function() {
 	counter3 = (counter3 + 1)   ;   ///may need this later- % $col1.length before the ;
 	$col3[counter3].css('background',newArray[number]);
 		if(number == 0){
 		number = 1;
 	} else {
 		number = 0;
 	}
 });
 	};
 	dropper3();
 }else{
 var dropper3 = function () {
$col3 = [$('td').eq(44), $('td').eq(37), $('td').eq(30), $('td').eq(23), $('td').eq(16), $('td').eq(9)];
	//console.log(col1);
 counter3 = -1;
 //console.log(col1[counter]);
 $('#dropper3').click(function() {
 	counter3 = (counter3 + 1 )   ;   ///may need this later- % $col1.length before the ;
 	$col3[counter3].css('background',newArray[number]);
 });
 	};
 	dropper3();
}
 };
 column3();


var column4 = function () {
if ($playerA == true) {
 var dropper4 = function () {
$col4 = [$('td').eq(45), $('td').eq(38), $('td').eq(31), $('td').eq(24), $('td').eq(17), $('td').eq(10)];
	//console.log(col1);
 counter4= -1;
 //console.log(col1[counter]);
 $('#dropper4').click(function() {
 	counter4 = (counter4 + 1)   ;   ///may need this later- % $col1.length before the ;
 	$col4[counter4].css('background',newArray[number]);
 		if(number == 0){
 		number = 1;
 	} else {
 		number = 0;
 	}
 });
 	};
 	dropper4();
 }else{
 var dropper4 = function () {
$col4 = [$('td').eq(45), $('td').eq(38), $('td').eq(31), $('td').eq(24), $('td').eq(17), $('td').eq(10)];
	//console.log(col1);
 counter4 = -1;
 //console.log(col1[counter]);
 $('#dropper4').click(function() {
 	counter4 = (counter4 + 1 )   ;   ///may need this later- % $col1.length before the ;
 	$col4[counter4].css('background',newArray[number]);
 });
 	};
 	dropper4();
}
 };
 column4();

 var column5 = function () {
if ($playerA == true) {
 var dropper5 = function () {
 $col5 = [$('td').eq(46), $('td').eq(39), $('td').eq(32), $('td').eq(25), $('td').eq(18), $('td').eq(11)];
	//console.log(col1);
 counter5= -1;
 //console.log(col1[counter]);
 $('#dropper5').click(function() {
 	counter5 = (counter5 + 1)   ;   ///may need this later- % $col1.length before the ;
 	$col5[counter5].css('background',newArray[number]);
 		if(number == 0){
 		number = 1;
 	} else {
 		number = 0;
 	}
 });
 	};
 	dropper5();
 }else{
 var dropper5 = function () {
 $col5 = [$('td').eq(46), $('td').eq(39), $('td').eq(32), $('td').eq(25), $('td').eq(18), $('td').eq(11)];
	//console.log(col1);
 counter5 = -1;
 //console.log(col1[counter]);
 $('#dropper5').click(function() {
 	counter5 = (counter5 + 1 )   ;   ///may need this later- % $col1.length before the ;
 	$col5[counter5].css('background',newArray[number]);
 });
 	};
 	dropper5();
}
 };
 column5();


 var column6 = function () {
if ($playerA == true) {
 var dropper6 = function () {
 $col6 = [$('td').eq(47), $('td').eq(40), $('td').eq(33), $('td').eq(26), $('td').eq(19), $('td').eq(12)];
	//console.log(col1);
 counter6= -1;
 //console.log(col1[counter]);
 $('#dropper6').click(function() {
 	counter6 = (counter6 + 1)   ;   ///may need this later- % $col1.length before the ;
 	$col6[counter6].css('background',newArray[number]);
 		if(number == 0){
 		number = 1;
 	} else {
 		number = 0;
 	}
 });
 	};
 	dropper6();
 }else{
 var dropper6 = function () {
 $col6 = [$('td').eq(47), $('td').eq(40), $('td').eq(33), $('td').eq(26), $('td').eq(19), $('td').eq(12)];
	//console.log(col1);
 counter6 = -1;
 //console.log(col1[counter]);
 $('#dropper6').click(function() {
 	counter6 = (counter6 + 1 )   ;   ///may need this later- % $col1.length before the ;
 	$col6[counter6].css('background',newArray[number]);
 });
 	};
 	dropper6();
}
 };
 column6();

 var column7 = function () {
if ($playerA == true) {
 var dropper7 = function () {
 $col7 = [$('td').eq(48), $('td').eq(41), $('td').eq(34), $('td').eq(27), $('td').eq(20), $('td').eq(13)];
	//console.log(col1);
 counter7= -1;
 //console.log(col1[counter]);
 $('#dropper7').click(function() {
 	counter7 = (counter7 + 1)   ;   ///may need this later- % $col1.length before the ;
 	$col7[counter7].css('background',newArray[number]);
 		if(number == 0){
 		number = 1;
 	} else {
 		number = 0;
 	}
 });
 	};
 	dropper7();
 }else{
 var dropper7 = function () {
 $col7 = [$('td').eq(48), $('td').eq(41), $('td').eq(34), $('td').eq(27), $('td').eq(20), $('td').eq(13)];
	//console.log(col1);
 counter7 = -1;
 //console.log(col1[counter]);
 $('#dropper7').click(function() {
 	counter7 = (counter7 + 1 )   ;   ///may need this later- % $col1.length before the ;
 	$col6[counter6].css('background',newArray[number]);
 });
 	};
 	dropper7();
}
 };
 column7();
/// change gameWinner to true when a winning combo is met
gameWinner = false;

//winner- if 4 adjacent coins have the same css color, that is the winner
// check on an x and y basis

// var x = rows;
// var y = columns;












// var checkWinner = function() {
//  $column1 = [$("#circle1"), $("#circle8"), $("#circle15"), $("#circle22"), $("#circle29"), $("#circle36")]
// //console.log(column1);
// var column2 = ["#circle2", "#circle9", "#circle16", "#circle23", "#circle30", "#circle37"]
// var column3 = ["#circle3", "#circle10", "#circle17", "#circle24", "#circle31", "#circle38"]
// var column4 = ["#circle4", "#circle11", "#circle18", "#circle25", "#circle32", "#circle39"]
// var column5 = ["#circle5", "#circle12", "#circle19", "#circle26", "#circle33", "#circle40"]
// var column6 = ["#circle6", "#circle13", "#circle20", "#circle27", "#circle34", "#circle41"]
// var column7 = ["#circle7", "#circle14", "#circle21", "#circle28", "#circle35", "#circle42"]

// // console.log(column7);
$gameBoard = [
[$('td').eq(42), $('td').eq(35), $('td').eq(28), $('td').eq(21), $('td').eq(14), $('td').eq(7)],
[$('td').eq(43), $('td').eq(36), $('td').eq(29), $('td').eq(22), $('td').eq(15), $('td').eq(8)],
[$('td').eq(44), $('td').eq(37), $('td').eq(30), $('td').eq(23), $('td').eq(16), $('td').eq(9)],
[$('td').eq(45), $('td').eq(38), $('td').eq(31), $('td').eq(24), $('td').eq(17), $('td').eq(10)],
[$('td').eq(46), $('td').eq(39), $('td').eq(32), $('td').eq(25), $('td').eq(18), $('td').eq(11)],
[$('td').eq(47), $('td').eq(40), $('td').eq(33), $('td').eq(26), $('td').eq(19), $('td').eq(12)],
[$('td').eq(48), $('td').eq(41), $('td').eq(34), $('td').eq(27), $('td').eq(20), $('td').eq(13)]
];//ends gameBoard

 console.log($gameBoard[0][3]);

 for (var i = 0; i < $gameBoard.length; i++) {
 	if (($gameBoard[0][0] === 1 ) && ($gameBoard[0][1] === 1) && ($gameBoard[0][2] === 1) && ($gameBoard[0][3] === 1) ){
	
	console.log('red red');
}
}


// function eq(val) {
//     return function(x) {
//         return x === val
//     }
// }
// if ([a,b,c].every(eq(1))) {
//     // all were equal
// }


// var i = 0;
// do {
//    i += 1;
//   ('td').css({background-color: red})
//    console.log(i);
// } while (i < $gameBoard.length);

// if ($('#circle36').hasClass('background', 'red') && $('#circle37').hasClass('background', 'red') && $('#circle38').hasClass('background', 'red')) {
// 	console.log('3 reds');
// }



// if  ('#circle1').css('red') { 
//     console.log('red')

//   } else { 
//   console.log('not red');
// }

// if ($col1[0].css = "red") {
// 	console.log('red');
// }
// };//ends checkWinner
// checkWinner();
////DROPPER 1//////
// var col1 = [$('td').eq(7), $('td').eq(14), $('td').eq(21), $('td').eq(28), $('td').eq(35), $('td').eq(42)];
// $("#dropper1").click(function () {
// 	$( col1 ).each(function( index ) {
//   console.log( this );
// });
// 	// col1[5].css('background','red');

// for(var i = 0; i < col1.length; i++) {
// 	$(col1[i]).css("background-color", "red");
	

// 	// if($(col1[6]).css("background-color", "red")) {
// 	// 	console.log("red");

// 	// 	$("#dropper1").click(function () {
// 	// 	$(col1[5]).css("background-color", "red")	} )
// 	// for(var j = 4; j < 5; i++) {
// 	// $(col1[j]).css("background-color", "red");
// 	//console.log(col1[i]);
// }

// });// ends dropper1 click function


// while (col1.length > 0) {
//  console.log(col1);
//  col1.shift();
//}

	

	// if(col1[5].css('background','red')) {
	// 	col1[0].css('background','red'); }


	//console.log(col1);
	//console.log($gameBoard);
	//$($gameBoard[0]).css("background-color", "red");
	// $('td').eq(7).css('background','red');
	//  $('td').eq(14).css('background','red');
	//  $('td').eq(21).css('background','red');
	//  $('td').eq(28).css('background','red');
	//  $('td').eq(35).css('background','red');
	//  $('td').eq(42).css('background','red');
	// if ($(this).children('circle1').css('background-color', "red")); 
	//$column1 = [$circle1, $circle8, $circle15, $circle22, $circle29, $circle36 ];
//console.log(gameBoard);
	// $column1.removeClass('circle');
	// $column1.addClass('red_circle');
	//$("circle").class("background", "red");

	 // console.log('click');

///These dropper functions fill in the entire column instead of one circle at a time
// //////DROPPER 2///////
// $("#dropper2").click(function () {
// 	 $('td').eq(8).css('background','red');
// 	 $('td').eq(15).css('background','red');
// 	 $('td').eq(22).css('background','red');
// 	 $('td').eq(29).css('background','red');
// 	 $('td').eq(36).css('background','red');
// 	 $('td').eq(43).css('background','red');
// }); //ends dropper 2 click function

// //////DROPPER 3///////
// $("#dropper3").click(function () {
// 	 $('td').eq(9).css('background','red');
// 	 $('td').eq(16).css('background','red');
// 	 $('td').eq(23).css('background','red');
// 	 $('td').eq(30).css('background','red');
// 	 $('td').eq(37).css('background','red');
// 	 $('td').eq(44).css('background','red');
// }); //ends dropper 3 click function

// //////DROPPER 4///////
// $("#dropper4").click(function () {
// 	 $('td').eq(10).css('background','red');
// 	 $('td').eq(17).css('background','red');
// 	 $('td').eq(24).css('background','red');
// 	 $('td').eq(31).css('background','red');
// 	 $('td').eq(38).css('background','red');
// 	 $('td').eq(45).css('background','red');
// }); //ends dropper 4 click function

// //////DROPPER 5///////
// $("#dropper5").click(function () {
// 	 $('td').eq(11).css('background','red');
// 	 $('td').eq(18).css('background','red');
// 	 $('td').eq(25).css('background','red');
// 	 $('td').eq(32).css('background','red');
// 	 $('td').eq(39).css('background','red');
// 	 $('td').eq(46).css('background','red');
// }); //ends dropper 5 click function

// //////DROPPER 6///////
// $("#dropper6").click(function () {
// 	 $('td').eq(12).css('background','red');
// 	 $('td').eq(19).css('background','red');
// 	 $('td').eq(26).css('background','red');
// 	 $('td').eq(33).css('background','red');
// 	 $('td').eq(40).css('background','red');
// 	 $('td').eq(47).css('background','red');
// }); //ends dropper 6 click function

// //////DROPPER 7///////
// $("#dropper7").click(function () {
// 	 $('td').eq(13).css('background','red');
// 	 $('td').eq(20).css('background','red');
// 	 $('td').eq(27).css('background','red');
// 	 $('td').eq(34).css('background','red');
// 	 $('td').eq(41).css('background','red');
// 	 $('td').eq(48).css('background','red');
// }); //ends dropper 6 click function

// for (i=0; i <  ($gameBoard).length; i++) {
// 	console.log($gameBoard);
// }

// }; 

// game();

// $circle1 = $("#circle1");
// $circle8 = $("#circle8");
// $circle15 = $("#circle15");
// $circle22 = $("#circle22");
// $circle29 = $("#circle29");
// $circle36 = $("circle36");



//$gameBoard = [$circle1, $circle2, $circle3, $circle4];
// console.log($gameBoard);


// if click on dropper, last element of that column changes color

//this while loop takes off one tile at a time, might need it later

// $circle1 = $('#circle1');
// $circle2 = $('#circle2');
// $circle3 = $('#circle3');
// $circle4 = $('#circle4');
//console.log($('td'));
// $('td').eq(10).css('background','red');



// var move = function() { 
// 	if (player1 === true) {
// 		console.log("player1");

//  	$(this).addClass();
//  	player1 = false;
//  	player2 = true
//  	console.log("p1 is false");


// 	}
// };//ends move function
// move();

//player1 = true makes the balls red, when switched to false, balls are blue
// $playerA = true;
// $playerB = false;

 // var column1 = function () {
// $col1 = [$('td').eq(42), $('td').eq(35), $('td').eq(28), $('td').eq(21), $('td').eq(14), $('td').eq(7)];

// //var dropper1 = function () {

// $('#dropper1').click(function() {
// if ($playerA == true) {
// 	//console.log(col1);
//  counter1 = -1;
//  //console.log(col1[counter]);
//  counter1 = (counter1 + 1)   ;   ///may need this later- % $col1.length before the ;
//  	$col1[counter1].css('background','red');
//  	$playerA = false;
//  	console.log($playerA);
//  	$playerB = true;
//  	//$col1[counter1].addClass('redClass');
//  	//console.log(col1[counter]);
// // });
//  	// };
//  	//dropper1();
//  }else{
//  //var dropper1 = function () {
//  //$col1 = [$('td').eq(42), $('td').eq(35), $('td').eq(28), $('td').eq(21), $('td').eq(14), $('td').eq(7)];
// 	//console.log(col1);
//  counter1 = -1;
//  //console.log(col1[counter]);
//  //$('#dropper1').click(function() {
//  	counter1 = (counter1 + 1 )   ;   ///may need this later- % $col1.length before the ;
//  	$col1[counter1].css('background','blue');
//  	// $col1[counter1].addClass('blueClass');
//  	//console.log(col1[counter]);
//  	playerA = true;
//  	console.log($playerA);
//  	$playerB = false;
//  // });
//  	}; // ends else statement
//  //	dropper1();
// }); // ends dropper1 click function

// //}) // ends click function
//  };
//  column1();


//  	console.log($playerA);
//  $('#dropper1').click(function() {
//  if (!$(this).hasClass('clicked')) {
// 	if ($playerA == true) {
// 			console.log($playerA);
// 		$(this).addClass('clicked');
// 		// $playerA = false;
// 		// $playerB = true;
// 		console.log($playerA);
// 	}	else {
// 		$(this).addClass('clicked');
// 		// $playerA = true;
// 		// $playerB = false;
// } console.log($playerA);
// 	} //ends else statement
  	//console.log('click'); 
//these 7 conditionals are for each dropper. If player1 is true, it turns the ball
//red, if player 2 is false it turns the ball blue.


//  $gameBoard = [
// 	//column 1
// 	[$("#circle1"), $("#circle8"), $("#circle15"), $("#circle22"), $("#circle29"), $("#circle36")],
// 	//column 2
// 	[$("#circle2"), $("#circle9"), $("#circle16"), $("#circle23"), $("#circle30"), $("#circle37")],
// 	//column 3
// 	[$("#circle3"), $("#circle10"), $("#circle17"), $("#circle24"), $("#circle31"), $("#circle38")],
// 	//column 4
// 	[$("#circle4"), $("#circle11"), $("#circle18"), $("#circle25"), $("#circle32"), $("#circle39")],
// 	//column 5
// 	[$("#circle5"), $("#circle12"), $("#circle19"), $("#circle26"), $("#circle33"), $("#circle40")],
// 	//column 6
// 	[$("#circle6"), $("#circle13"), $("#circle20"), $("#circle27"), $("#circle34"), $("#circle41")],
// 	//column 7
// 	[$("#circle7"), $("#circle14"), $("#circle21"), $("#circle28"), $("#circle35"), $("#circle42")]
// ];
// console.log($gameBoard);
// var game = function () {






/// if a circle has a chip in it, change this to true
// var red = false;
// var blue = false;

// var move will rotate between players, change the chips to black and red depending
// whose turn it is

//if a winner is found, the game is over and the option to replay is presented
// maybe use a for loop to iterate through the gameBoard array to check for 
// winning combos

// clear button clears the board and resets the game


// var $clearButton = $("#clearButton");
//  
// 	//console.log(col1);
// $clearButton.click(function(){
// 	console.log("clear this");
// //remove class
// 	$(col1).css('background','white');
// //$("td").removeClass("O clicked");	
// //$("td").empty();


	// $col1 = [$('td').eq(42), $('td').eq(35), $('td').eq(28), $('td').eq(21), $('td').eq(14), $('td').eq(7)];
	// $col1.css({'background-color': 'white'});



	// $("#clearButton").append($(this).parent().children(":first-child").html());
	// console.log($(this).parent().children(":first-child").html());
 //          //  console.log("you clicked done");
 //          //    console.log($(this).parent()[0]);
 //          // $(this).parent().remove();
 //      $("#clearButton").append($newDiv);
             


////	winning thing ////
// check if two touching tiles are the same color, if yes check if three are, if yes, check if four,
// if yes, stop and declare a winner.



// var column2 = function () {
//  $('#dropper2').click(function() {

// if ($playerA == true) {
//  var dropper2 = function () {
//  $col2 = [$('td').eq(43), $('td').eq(36), $('td').eq(29), $('td').eq(22), $('td').eq(15), $('td').eq(8)];
// 	//console.log(col1);
//  counter2 = -1;
//  //console.log(col1[counter]);
//  $('#dropper2').click(function() {
//  	counter2 = (counter2 + 1) ;
//  	$col2[counter2].css('background',newArray[number]);
//  	// $playerA = false;
//  	// 	console.log($playerA);
//  	// $playerB = true;
//  	// //$col1[counter1].addClass('redClass');
//  	//console.log(col1[counter]);
//  		if(number == 0){
//  		number = 1;
//  	} else {
//  		number = 0;
//  	}
//  });
//  	};
//  	dropper2();
//  }else{
//  	 var dropper2 = function () {
//  $col2 = [$('td').eq(43), $('td').eq(36), $('td').eq(29), $('td').eq(22), $('td').eq(15), $('td').eq(8)];
// 	//console.log(col1);
//  counter2 = -1;
//  //console.log(col1[counter]);
//  $('#dropper2').click(function() {
//  	counter2 = (counter2 + 1) ;
//  	$col2[counter2].css('background', newArray[number]);

//  });
//  	};
//  	dropper2();
//  }



//  }) // ends click function
// };
// column2();

 // 	var dropperBlue2 = function () {
 // $col2 = [$('td').eq(43), $('td').eq(36), $('td').eq(29), $('td').eq(22), $('td').eq(15), $('td').eq(8)];
	// //console.log(col1);
 // counterBlue2 = -1;
 // //console.log(col1[counter]);
 // $('#dropper2').click(function() {
 // 	counterBlue2 = (counterBlue2 + 1) ;
 // 	$col2[counterBlue2].css('background','blue');
 // 	//console.log(col1[counter]);
 // });
 // 	};
 // 	//dropperBlue2();
 	
 // 	console.log(player1);
 // 	if (player1 == true){
 // 		dropper2();
 // 	} else {
 // 		dropperBlue2();
 // 	}









//});// ends document.ready