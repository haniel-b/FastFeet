import React from 'react';

import { FaPlus } from 'react-icons/fa';
import { MdSearch, MdMoreHoriz } from 'react-icons/md';

import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Orders() {
  return (
    <Container>
      <strong>Recipient Management</strong>
      <header>
        <div>
          <MdSearch size={16} />
          <input type="search" placeholder="Search by delivers" />
        </div>

        <Link to="/recipientregistry">
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
            <th>Name</th>
            <th>Adress</th>

            <p>Actions</p>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#01</td>
            <td>João</td>
            <td>Rua Paulino</td>

            <td>
              <div>
                <button type="submit">
                  <MdMoreHoriz size={14} />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
