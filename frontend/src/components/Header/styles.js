import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background-color: #fff;

  padding: 0 30px;
`;

export const Content = styled.div`
  max-width: 1500px;
  min-width: 1000px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 30px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Logout = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    text {
      text-align: right;
      margin-right: 10px;
    }

    button {
      background: #fff;
      border: 0;
      color: red;
      display: block;
      margin-top: 10px;
      margin-right: 10px;
      font-size: 14px;
    }
  }
`;

export const Routes = styled.strong`
  margin: 20px;
  margin-right: 3px;
  transition: color 0.2s;

  color: ${props => (props.click ? '#000' : '#AFAFAF')};

  &:hover {
    color: ${darken(0.03, '#000')};
    border-radius: 4px;
  }
`;
