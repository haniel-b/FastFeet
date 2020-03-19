export function OrderSearch(product) {
  return {
    type: '@user/ORDER_SEARCH',
    product,
  };
}

export function OrderSearchSuccess(product) {
  return {
    type: '@user/ORDER_SEARCH_SUCCESS',
    product,
  };
}

export function InfoClick(clickState) {
  return {
    type: '@user/INFO_CLICKED',
    clickState,
  };
}
