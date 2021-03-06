var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */


MatchGame.generateCardValues = function () {
  var orderedNumbers = [];

  for (var value = 1; value < 9; value++) {
    orderedNumbers.push(value);
    orderedNumbers.push(value);
  }

  var cardValues = [];

  while (orderedNumbers.length > 0) {
    var randomIndex = Math.floor(Math.random() * orderedNumbers.length);
    var randomValue = orderedNumbers.splice(randomIndex, 1)[0];
    cardValues.push(randomValue);
  }

  return cardValues;

};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  $game.empty();
  for (cardValues = 1; )
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
