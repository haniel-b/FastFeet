import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  max-width: 1300px;
  margin: 50px 140px;

  strong {
    color: #4c4c4c;
    font-size: 16px;
    font-weight: bold;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    strong {
      color: #4c4c4c;
    }

    div {
      padding: 0px;
      align-items: left;
      input {
        width: 200px;
        border: 1px;
        padding: 0 20px 0 35px;
        border-style: solid;
        border-radius: 4px;
        border-color: #eeeeee;
        height: 38px;
        padding: 5px 0px 5px 25px;
      }
      svg {
        color: #4c4c4c;
        position: absolute;
        margin: 11px 7px;
      }
    }

    button {
      display: flex;
      background: #7159c1;
      align-self: center;
      color: #f2f6f7;
      border: 0;
      height: 38px;
      border-radius: 4px;
      padding: 10px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }

    svg {
      margin-right: 5px;
    }
  }

  table {
    margin-top: 30px;
    border-collapse: collapse;
    width: 100%;
    border-collapse: separate !important;
    border-spacing: 0 15px !important;
  }

  th,
  td {
    text-align: left;
    padding: 15px;
  }

  table td #customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  td {
    padding: 15px;
    border-color: transparent !important;
    background: #fff;
  }

  td:nth-child(1) {
    border-radius: 8px 0 0 8px;
  }

  td:last-child {
    border-radius: 0 8px 8px 0;
  }
  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
  }
  p {
    font-weight: bold;
    padding: 15px 0px;
    text-align: right;
  }

  div {
    font-weight: bold;
    text-align: right;
  }
  tbody {
    background: #fff;
    margin-top: 30px;
  }

  button {
    background: #fff;
    border: 0;
  }
`;

export const Badge = styled.button`
  margin-top: 5px;
  background: none;
  border: 0;
  position: relative;
`;
export const MoreOptions = styled.div`
  display: inline-block;
  position: absolute;
  background: #fff;
  width: 80px;
  margin-top: 5px;
  border: 1;
  border-style: solid;
  border-radius: 4px;
  border-width: 0.5px;
  border-color: #eeeeee;
  border-radius: 4px;
  padding: 10px;
  left: calc(100% - 202px);

  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #000;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;

  button {
    display: flex;

    padding: 10px 0px 5px 0px;
    display: flex;

    color: #000;

    & + button {
      border-top: 1px solid #eee;
    }
  }
`;

export const MoreInfo = styled.div`
  display: ${props => (props.InfoVisible ? 'flex' : 'none')};

  position: absolute;
  margin: 205px 300px auto;
  background: #fff;

  border-color: #000;
  border-radius: 4px;
  max-width: 1000px;
  padding: 10px;

  ul {
    padding: 10px;
    display: block;
    text-align: left;

    strong {
      font-weight: bold;
      color: #565650;
      font-size: 13px;
    }

    li {
      font-size: 12px;
      margin-top: 5px;
      color: #757575;
    }

    p {
      display: flex;
      justify-content: flex-start;
      padding: 10px 0px 5px 0px;
      margin-top: 8px;
      border-top: 1px solid #eee;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      strong {
        margin-top: 3px;
        font-size: 14px;
      }
      li {
        margin-left: 5px;
      }
    }
  }
  img {
    margin: auto 50px;
    display: flex;
    padding: 0px 10px;
    align-items: center;
    margin-top: 5px;
  }
`;
