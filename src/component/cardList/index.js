import React, { Component } from 'react';

import Card from '../card/Card';
import { cardData } from '../cardList/cardList';

export default class CardList extends Component {
  state = {
    cards: cardData,
  };

  render() {
    const { cards } = this.state;
    return (
      <React.Fragment>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </React.Fragment>
    );
  }
}
