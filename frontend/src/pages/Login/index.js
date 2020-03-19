import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import Logo from '~/assets/fastfeet-logo.png';

import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email, try again')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <Container>
      <img src={Logo} alt="logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <text>E-MAIL</text>
        <Input name="email" type="email" placeholder="example@email.com" />
        <text>PASSWORD</text>
        <Input name="password" type="password" placeholder="********" />

        <button type="submit">{loading ? 'Loading...' : 'Enter'}</button>
      </Form>
    </Container>
  );
}
