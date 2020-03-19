import React from 'react';

import { MdMoreHoriz } from 'react-icons/md';

import { Container } from './styles';

export default function Orders() {
  return (
    <Container>
      <strong>Delivered Package Problems</strong>
      <header />
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Problem</th>
            <p>Actions</p>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#01</td>
            <td>When i was a man, i was a man</td>
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
