import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import Logo from '~/assets/fastfeet-logo.png';
import { Wrapper, Content, Logout, Routes } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Wrapper>
      <Content>
        <nav>
          <Link to="/orders">
            <img src={Logo} alt="logo" />
          </Link>

          <Link to="/orders">
            <Routes click>Orders</Routes>
          </Link>

          <Link to="/deliverers">
            <Routes>Deliverers</Routes>
          </Link>

          <Link to="/recipients">
            <Routes>Recipients</Routes>
          </Link>

          <Link to="/problems">
            <Routes>Problems</Routes>
          </Link>
        </nav>
        <Logout>
          <aside>
            <div>
              <text>Admin FastFeet</text>

              <button type="button" onClick={handleSignOut}>
                Logout
              </button>
            </div>
          </aside>
        </Logout>
      </Content>
    </Wrapper>
  );
}
