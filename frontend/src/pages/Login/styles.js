import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  width: 315px;
  padding: 50px 10px;
  text-align: center;
  background: #fff;
  border: 30px;
  border-radius: 4px;

  img {
    height: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 15px 15px;
  }

  text {
    color: #606263;
    text-align: justify;
    font-weight: bold;

    font-size: 14px;
  }

  input {
    border: 1px;
    border-style: solid;
    border-radius: 4px;
    border-color: #c1b8b8;
    height: 38px;
    padding: 10px;
    margin: 0 0 10px;
    margin-top: 5px;

    &::placeholder {
      color: #c1b8b8;
    }
  }

  button {
    background: #7159c1;
    margin: 5px 0 0;
    color: #f2f6f7;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    border-radius: 4px;
    padding: 10px 5px;
    transition: background 0.2s;

    &: hover {
      background: ${darken(0.03, '#7159c1')};
    }
  }
`;
