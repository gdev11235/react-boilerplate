const SUITS = ["hearts"];
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9"];

export class Card {
  constructor(value, suit, pos = null) {
    this.pos = pos;
    this.value = value;
    this.suit = suit;
    this.revealed = false;
    this.matched = false;
  }
}

export class Board {
  constructor() {
    this.cards = [];
    this.generateBoard();
  }

  generateBoard() {
    for (let i = 0; i < SUITS.length; i++) {
      for (let j = 0; j < VALUES.length; j++) {
        this.cards.push(new Card(VALUES[j], SUITS[i]));
      }
    }

    this.shuffleCards();

    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].pos = i;
    }
  }

  shuffleCards() {
    for (let i = this.cards.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [this.cards[i -1], this.cards[j]] = [this.cards[j], this.cards[i - 1]];
    }
  }
}
