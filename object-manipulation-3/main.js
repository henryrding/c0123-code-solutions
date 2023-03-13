console.log('Lodash is loaded:', typeof _ !== 'undefined');

function simpleCardGame(players, handSize) {

  function createPlayerObjects() {
    var playerObjects = [];
    for (var i = 0; i < players.length; i++) {
      playerObjects[i] = { name: players[i] };
    }
    players = playerObjects;
    return players;
  }

  function createDeck() {
    var ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    var deck = [];
    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < ranks.length; j++) {
        var temp = {};
        temp.rank = ranks[j];
        temp.suit = suits[i];
        deck.push(temp);
      }
    } return deck;
  }

  var deckIndex = 0;
  function dealCards() {
    for (var i = 0; i < players.length; i++) {
      players[i].hand = [];
      for (var x = 0; x < handSize; x++) {
        players[i].hand.push(shuffledDeck[deckIndex]);
        if (deckIndex === shuffledDeck.length - 1) {
          deckIndex = 0;
          shuffledDeck = _.shuffle(createDeck());
        } else {
          deckIndex++;
        }
      }
    } return players;
  }

  function tallyScore() {
    for (var i = 0; i < players.length; i++) {
      var points = 0;
      for (var j = 0; j < players[i].hand.length; j++) {
        if (typeof players[i].hand[j].rank === 'number') {
          points += players[i].hand[j].rank;
        } else if (typeof players[i].hand[j].rank === 'string' && players[i].hand[j].rank !== 'Ace') {
          points += 10;
        } else {
          points += 11;
        }
      } players[i].score = points;
    } return players;
  }

  function getWinner() {
    var highestScore = 0;
    var winner = '';
    for (var i = 0; i < players.length; i++) {
      if (players[i].score > highestScore) {
        highestScore = players[i].score;
        winner = players[i].name;
      } else if (players[i].score === highestScore) {
        winner = winner + ' and ' + players[i].name;
      }
    }
    return winner;
  }

  function resolveTie() {
    console.log('It\'s a tie between', winner + '!');
    var tiedPlayers = winner.split(' and ');
    var winnerTieBreaker = simpleCardGame(tiedPlayers, handSize);
    console.log(winnerTieBreaker, 'won the tie-breaker!');
    return winnerTieBreaker;
  }

  createPlayerObjects();
  var deck = createDeck();
  var shuffledDeck = _.shuffle(deck);
  dealCards();
  tallyScore();
  var winner = getWinner();
  if (winner.includes(' ')) {
    winner = resolveTie();
    return winner;
  } else {
    console.log('The winner is', winner + '!');
    return winner;
  }
}

simpleCardGame(['Devan', 'Evan', 'Henry', 'Justin'], 2);
