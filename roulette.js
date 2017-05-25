

var bet = 10;
var oddsOneToOne = ((1*bet)+bet);
var oddsTwoToOne = ((2*bet)+bet);
var oddsFiveToOne = ((5*bet)+bet);
var oddsSixToOne = ((6*bet)+bet);
var oddsEightToOne = ((8*bet)+bet);
var oddsElevenToOne = ((11*bet)+bet);
var oddsSeventeenToOne = ((17*bet)+bet);
var oddsThirtyfiveToOne = ((35*bet)+bet);
var red = [(1),(3),(5),(7),(9),(12),(14),(16),(18),(19),(21),(23),(25),(27),(30),(32),(34),(36)];
var black = [(2),(4),(6),(8),(10),(11),(13),(15),(17),(20),(22),(24),(26),(28),(29),(31),(33),(35)];
var leftThird = [1,4,7,10,13,16,22,25,28,31,34];
var middleThird = [2,5,8,11,14,17,20,23,26,29,32,35];
var rightThird = [3,6,9,12,15,18,21,24,27,30,33,36];

//to do...figure out what happens when you lose...

//to do:  need to figure out how to get 0 and 00 into the randomNumber variable
var randomNumber = Math.floor(Math.random()*37); {
    console.log(randomNumber)
}


//Red / Black section
//to do: return only red or black when one wins, currently getting undefined when its not red or not black.
function includeR(red, randomNumber) {
    for(var i=0; i<red.length; i++) {
        if (red[i] === randomNumber) return "Red Hits!  You win $" + oddsOneToOne + "!";
    
    }
}
//I dont understand how to get the variable red into the below so all these numbers can be removed.  var red is line 20 for reference.
console.log (includeR([(1),(3),(5),(7),(9),(12),(14),(16),(18),(19),(21),(23),(25),(27),(30),(32),(34),(36)], randomNumber)); 


function includeB(black, randomNumber) {
    for(var i=0; i<black.length; i++) {
        if (black[i] === randomNumber) return "Black Hits!  You win $" + oddsOneToOne + "!";
    
    }
}

console.log (includeB([(2),(4),(6),(8),(10),(11),(13),(15),(17),(20),(22),(24),(26),(28),(29),(31),(33),(35)], randomNumber)); 



//Even/Odd section

//to do:  Odd/Even only works without bringing 0 and 00 into the mix.  will need to revisit once that is in the fold.
if (randomNumber % 2 === 0) {console.log("It's an Even!  You win $" + oddsOneToOne + "!")}

else {console.log("It's an Odd!  You win $" + oddsOneToOne + "!")}


//High/Low Section
if (randomNumber > 18) {console.log ("You correctly picked the high half!  You win $" + oddsOneToOne + "!")}
 
if (randomNumber<19 && randomNumber>0) { console.log ("You correctly picked the low half!  You win $" + oddsOneToOne + "!")}



// thirds chronologically (by row) section

if (randomNumber> 0 && randomNumber < 13) {console.log ("You correctly picked the bottom third!  You win $" + oddsTwoToOne + "!")}

if (randomNumber> 12 && randomNumber < 25) {console.log ("You correctly picked the middle third!  You win $" + oddsTwoToOne + "!")}

if (randomNumber> 24) {console.log ("You correctly picked the top third!  You win $" + oddsTwoToOne + "!")}


// Thirds by column section
// To to:  figure out how to get undefined to not show up when it the randomNumber is not in that array

function includeLeft(leftThird, randomNumber) {
    for(var i=0; i<leftThird.length; i++) {
        if (leftThird[i] === randomNumber) return "You correctly picked the Left column!!  You win $" + oddsTwoToOne + "!";
    
    }
}

console.log (includeLeft([1,4,7,10,13,16,19,22,25,28,31,34], randomNumber)); 


function includeMiddle(middleThird, randomNumber) {
    for(var i=0; i<middleThird.length; i++) {
        if (middleThird[i] === randomNumber) return "You correctly picked the middle column!!  You win $" + oddsTwoToOne + "!";
    
    }
}

console.log (includeMiddle([2,5,8,11,14,17,20,23,26,29,32,35], randomNumber)); 


function includeRight(rightThird, randomNumber) {
    for(var i=0; i<rightThird.length; i++) {
        if (rightThird[i] === randomNumber) return "You correctly picked the rightmost column!!  You win $" + oddsTwoToOne + "!";
    
    }
}

console.log (includeRight([3,6,9,12,15,18,21,24,27,30,33,36], randomNumber)); 