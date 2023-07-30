import {Card} from './card.tsx';

import {Offer} from '../types/offers.ts';

import {MouseEvent} from 'react';

type CardListProps = {
  offers: Offer[];
  onCardListItemHover: (id: string | undefined) => void;
}

function CardList ({offers, onCardListItemHover} : CardListProps) {
  const handleCardListEnter = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    onCardListItemHover(evt.currentTarget.id);
  };
  const handleCardListLeave = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    onCardListItemHover(undefined);
  };

  return (
    <div className="cities__places-list places__list tabs__content">

      {offers.map((offer) => (
        <Card
          id = {offer.id}
          title = {offer.title}
          type = {offer.type}
          price = {offer.price}
          previewImage = {offer.previewImage}
          isPremium = {offer.isPremium}
          isFavorite = {offer.isFavorite}
          rating = {offer.rating}
          key = {offer.id}
          onCardEnter = {handleCardListEnter}
          onCardLeave = {handleCardListLeave}
        />
      ))}

    </div>
  );
}

export {CardList};
