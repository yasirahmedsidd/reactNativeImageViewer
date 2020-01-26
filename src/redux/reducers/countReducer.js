import {actions} from '../actions/actions';
const initialState = {
  count: 0,
};

export default (state = initialState, {type, data}) => {
  switch (type) {
    case actions.SET_COUNT:
      return {...state, count: data};

    default:
      return state;
  }
};
