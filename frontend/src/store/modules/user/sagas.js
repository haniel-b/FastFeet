import { call, all, takeLatest, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/services/api';

import { OrderSearchSuccess } from './actions';

export function* Search({ product }) {
  try {
    const response = yield call(api.get, `/p?product=${product.ordersubmit}`);

    if (product.ordersubmit !== response.data.product) {
      toast.error('Order not found');
      return;
    }

    const productData = response.data;

    yield put(OrderSearchSuccess(productData));
  } catch (err) {
    toast.error('Search Failed');
  }
}

export function Clicked() {}

export default all([
  takeLatest('@user/ORDER_SEARCH', Search),
  takeLatest('@user/ORDER_SEARCH', Clicked),
]);
