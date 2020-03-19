import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FaPlus } from 'react-icons/fa';
import { MdSearch, MdMoreHoriz } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';

import fakeImg from '~/assets/fastfeet-logo.png';

import { OrderSearch, InfoClick } from '~/store/modules/user/actions';

import { Container, Badge, MoreOptions, Options, MoreInfo } from './styles';

export default function Orders() {
  const dispatch = useDispatch();

  async function handleSubmit(product) {
    dispatch(OrderSearch(product));
  }
  const [visible, setVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleInfoToggleVisible() {
    setVisible(!visible);
    setInfoVisible(!infoVisible);
    dispatch(InfoClick(!infoVisible));
  }
  return (
    <Container>
      <strong>Order Management</strong>
      <header>
        <Form onSubmit={handleSubmit}>
          <div>
            <MdSearch size={16} />
            <Input
              name="ordersubmit"
              type="search"
              placeholder="Search by order"
            />
          </div>
        </Form>

        <Link to="/orderregistry">
          <button type="submit">
            <FaPlus size={14} />
            Register
          </button>
        </Link>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Recipient</th>
            <th>Deliveryman</th>
            <th>City</th>
            <th>Country</th>
            <th>State</th>
            <p>Actions</p>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#01</td>
            <td>Haniel</td>
            <td>João</td>
            <td>Campinas</td>
            <td>São Paulo</td>
            <td>Delivered</td>
            <td>
              <div>
                <Badge onClick={handleToggleVisible}>
                  <MdMoreHoriz size={14} />
                </Badge>
                <MoreOptions visible={visible}>
                  <Options>
                    <button type="button" onClick={handleInfoToggleVisible}>
                      View
                    </button>
                    <button type="button">Edit</button>
                    <button type="button">Delete</button>
                  </Options>
                </MoreOptions>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <MoreInfo InfoVisible={infoVisible}>
        <ul>
          <strong>Order Informations</strong>
          <li>Rua Beth, 127</li>
          <li>Campinas-SP</li>
          <li>13477-00</li>

          <p>
            <strong>Dates</strong>
          </p>
          <div>
            <strong>Withdrawal:</strong>
            <li>25/01</li>
          </div>

          <div>
            <strong>Delivery:</strong>
            <li>26/01</li>
          </div>

          <p>
            <strong>Recipient Signature</strong>
          </p>

          <img src={fakeImg} alt="fake" size={14} />
        </ul>
      </MoreInfo>
    </Container>
  );
}
