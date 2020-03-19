import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import { Wrapper } from './styles';

import { store } from '~/store';

export default function DefaultLayout({ children }) {
  const { clicked } = store.getState().user;

  const clickedPa = clicked.clickState;
  console.tron.log(clickedPa);

  return (
    <Wrapper clicked={clickedPa}>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
