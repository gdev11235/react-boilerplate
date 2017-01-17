import React, {Component} from 'react'

import Card from '../Card'
import * as MatchingGame from '../../utils/game'

require('./App.css')

export default class App extends Component {
  constructor(props) {
    super(props);

    const board = new MatchingGame.Board();
    this.state = {
      board: board,
      shownCard: null,
      score: 0,
      turn: 0,
      freeze: false,
    }
  }

  checkCard = (pos) => {
    const board = this.state.board;
    const card = board.cards[pos];
    card.revealed = true;

    this.setState({ board }, () => {
      if (this.state.turn === 0) {
        this.setState({
          board,
          turn: 1,
          shownCard: card
        });
      } else if (this.state.turn === 1) {
        this.checkIfMatch(pos);
      }
    });
  }

  checkIfMatch = (pos) => {
    const currentCard = this.state.board.cards[pos];
    const prevCard = this.state.shownCard;
    const board = this.state.board;

    if (currentCard.value === prevCard.value) {
      const score = this.state.score + 1
      prevCard.revealed = false;
      prevCard.matched = true;
      currentCard.revealed = false;
      currentCard.matched = true;
      this.setState({
        board,
        score,
        turn: 0,
        shownCard: null
      });
    } else {
      currentCard.revealed = true;
      this.setState({ freeze: true });

      window.setTimeout(() => {
        prevCard.revealed = false;
        currentCard.revealed = false;
        this.setState({
          turn: 0,
          shownCard: null,
          freeze: false
        })
      }, 1300);
    }
  }

  resetGame = () => {
    this.setState({
      board: new MatchingGame.Board(),
      shownCard: null,
      score: 0,
      turn: 0,
      freeze: false
    })
  }

  render() {
    const cards_1 = this.state.board.cards.map((card, idx) => (
      <Card deck={1} card={card} key={idx} freeze={this.state.freeze} checkCard={this.checkCard}/>
    ));
    const cards_2 = this.state.board.cards.map((card, idx) => (
      <Card deck={2} card={card} key={idx} freeze={this.state.freeze} checkCard={this.checkCard}/>
    ));

    if (this.state.score === 9) {
      return (
        <div>
          <p id="winning-message">Cool!</p>
          <br />
          <button onClick={this.resetGame}>
            Reset Game
          </button>
        </div>
      )
    }

    return (
      <div>
        <div style={{textAlign: 'left', padding: '20 20 0 20px'}}>
          <button onClick={this.resetGame}>
            Play / Shuffle
          </button>
          <button style={{marginLeft: '10px'}} onClick={() => this.setState({ score: 9 })}>
            Reset high score
          </button>
          <label style={{float: 'right'}}> Turns so far: {this.state.score}</label>
        </div>
        <div style={{display: 'inline-flex'}}>
          <fieldset style={{margin: '15px'}}>
            <legend>Deck 1</legend>
            <ul id="board">{cards_1}</ul>
          </fieldset>
          <fieldset style={{margin: '15px'}}>
            <legend>Deck 2</legend>
            <ul id="board">{cards_2}</ul>
          </fieldset>
        </div>
      </div>
    )
  }
}
