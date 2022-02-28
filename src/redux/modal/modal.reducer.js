import { OPEN_MODAL, CLOSE_MODAL } from './modal.types';

const initialState = null;

export default function modalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_MODAL:
      const { modalType } = payload;
      return {
        modalType,
      };
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}
