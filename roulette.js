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
var black = [(2),(4),(6),(8),(10),(11),(13),(15),(17),(20),(22),(24),(26),(28),(29),(31),(33),(35)]



//need to figure out how to get 0 and 00 into the randomNumber variable
var randomNumber = Math.floor(Math.random()*37); {
    console.log(randomNumber)
}


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
