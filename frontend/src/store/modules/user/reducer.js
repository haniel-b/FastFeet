import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  clicked: true,
  order: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.admin;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }

      case '@user/ORDER_SEARCH_SUCCESS': {
        let n = 0;
        const newOrder = draft.order;

        if (newOrder.length === 0) {
          newOrder[n] = action.product;
          draft.order = newOrder;
        } else {
          n = newOrder.length + 1;
          newOrder[n] = action.product;
          draft.order = newOrder;
        }
        break;
      }

      case '@user/INFO_CLICKED': {
        draft.clicked = action;
        break;
      }
      default:
    }
  });
}
