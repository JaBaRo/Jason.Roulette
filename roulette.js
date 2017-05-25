var bet = 10;
var oddsOneToOne = ((1*bet)+bet);
var oddsTwoToOne = ((2*bet)+bet);
var oddsFiveToOne = ((5*bet)+bet);
var oddsSixToOne = ((6*bet)+bet);
var oddsEightToOne = ((8*bet)+bet);
var oddsElevenToOne = ((11*bet)+bet);
var oddsSeventeenToOne = ((17*bet)+bet);
var oddsThirtyfiveToOne = ((35*bet)+bet);
var one = 1;
var two = 2;
var three = 3;
var four = 4;
var five = 5;
var six = 6;
var seven = 7;
var eight = 8;
var nine = 9
var ten = 10;
var eleven = 11;
var twelve = 12;
var thirteen =13;
var fourteen = 14;
var fifteen = 15;
var sixteen = 16;
var seventeen = 17;
var eightteen = 18;
var nineteen = 19;
var twenty = 20
var twentyone = 21
var twentytwo = 22
var twentythree = 23
var twentyfour = 24
var twentyfive = 25
var twentysix = 26
var twentyseven = 27
var twentyeight = 28
var twentynine = 29
var thirty = 30
var thirtyone = 31
var thirtytwo = 32
var thirtythree = 33
var thirtyfour = 34
var thirtyfive = 35
var thirtysix = 36


//need to figure out how to get 0 and 00 into the randomNumber variable
var randomNumber = Math.floor(Math.random()*37); {
    console.log(randomNumber)
}
if (randomNumber === (1)||(3)||(5)||(7)||(9)||(12)||(14)||(16)||(18)||(19)||(21)||(23)||(25)||(27)||(30)||(32)||(34)||(36))

{console.log("Red Hits!  You win $" + OddsOneToOne + "!");}

else  {console.log(0)}

if (randomNumber === (2)||(4)||(6)||(8)||(10)||(11)||(13)||(15)||(17)||(20)||(22)||(24)||(26)||(28)||(29)||(31)||(33)||(35)) {console.log("Black Hits!  You win $" + OddsOneToOne + "!")}

else {console.log(0)}
