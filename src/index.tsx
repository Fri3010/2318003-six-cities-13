import React from 'react';
import ReactDOM from 'react-dom/client';

import {CardProperty} from './constant/constant.ts';

import {offers} from './mock/offers.ts';

import {App} from './components/app.tsx';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cardsCount = {CardProperty.CardsCount} offers = {offers}/>
  </React.StrictMode>
);
