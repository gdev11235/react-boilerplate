import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
/*
import { createPartialDeckAction } from 'actions'

@connect(
  state => ({}),
  dispatch => bindActionCreators ({ createPartialDeckAction }, dispatch)
)
*/
export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  // this.props.createPartialDeckAction();

  // createDeck = (e) => {
  //   this.props.dispatchCreateDeck();
  // }

  handleClick = (e) => {
    e.preventDefault();
    const deck = this.props.deck;
    const card = this.props.card;
    if (this.props.freeze) {
      return;
    }
    else if (!card.revealed && !card.matched) {
      this.props.checkCard(card.pos);
    }
  }

  render() {
    const deck = this.props.deck;
    const card = this.props.card;
    const suit = `assets/${card.suit}.png`;
    const color = card.suit === "spades" || card.suit === "clubs" ? "black" : "red";
    const klass = () => {
      if (card.revealed && !card.matched) {
        return "card revealed";
      } else if (card.matched) {
        return "card matched";
      }
    }

    if (!card.revealed && !card.matched) {
      return (
        <li className="card hidden" onClick={this.handleClick}>
          <img src="assets/card_back.jpg"></img>
        </li>
      );
    } else {
        return (
          <li className={klass()}>
            <img src={suit} className="suit-image"></img>
            <br />
            <p className={color}>{card.value}</p>
          </li>
        );
    }
  }
}
