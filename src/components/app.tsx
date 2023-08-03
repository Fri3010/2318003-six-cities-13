import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {MainPage} from '../pages/main-page.tsx';
import {LoginPage} from '../pages/login-page.tsx';
import {FavoritesPage} from '../pages/favorites-page.tsx';
import {OfferPage} from '../pages/offer-page.tsx';
import {ErrorPage} from '../pages/error-page.tsx';
import {PrivateRoute} from './private-route.tsx';

import {PageLinks, AuthorizationStatus} from '../constant/constant.ts';

import {Offer} from '../types/offers.ts';
import {ReviewType} from '../types/review.ts';

type AppProps = {
  offers: Offer[];
  reviews: ReviewType[];
}

function App({offers, reviews} : AppProps) {
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {PageLinks.Main}
          element = {<MainPage />}
        />
        <Route
          path = {PageLinks.Login}
          element = {<LoginPage />}
        />
        <Route
          path = {PageLinks.Favorites}
          element = {
            <PrivateRoute authorizationStatus = {AuthorizationStatus.Auth}>
              <FavoritesPage favoriteOffers = {favoritesOffers}/>
            </PrivateRoute>
          }
        />
        <Route
          path = {PageLinks.Offer}
          element = {<OfferPage offers = {offers} reviews = {reviews}/>}
        />
        <Route
          path = {PageLinks.NotFound}
          element = {<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export {App};
