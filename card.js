var count = 0;
var message = '';

function cardSequence(card) {
 

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count = count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }


  if (count === 5) message = "5 Bet";
  else if (count === 0) message = "0 Hold";
  else if (count === -5) message = "-5 Hold";
  else if (count === -1) mmessage = "-1 Hold";
  else if (count === 1) message = "1 Bet";

  return message;

}

cardSequence(2); cardSequence(3); cardSequence(5); cardSequence("Q"); cardSequence(6);



console.log("Result: " +message);

//nagana lang po ung javascript kapag inapalitan ung cardSequence at ina run sa terminal..
