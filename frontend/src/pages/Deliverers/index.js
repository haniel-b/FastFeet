import React from 'react';

import { FaPlus } from 'react-icons/fa';
import { MdSearch, MdMoreHoriz } from 'react-icons/md';

import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Orders() {
  return (
    <Container>
      <strong>Delivers Management</strong>
      <header>
        <div>
          <MdSearch size={16} />
          <input type="search" placeholder="Search by delivers" />
        </div>

        <Link to="/deliverersregistry">
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
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>

            <p>Actions</p>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#01</td>
            <td />
            <td>João</td>
            <td>Campinas</td>
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
