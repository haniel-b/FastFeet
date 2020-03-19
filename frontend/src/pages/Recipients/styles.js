import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  min-width: 800px;
  max-width: 900px;
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
