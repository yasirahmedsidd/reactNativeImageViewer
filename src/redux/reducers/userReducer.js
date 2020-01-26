import {userActions} from '../actions/actions';
const initialState = {
  loading: false,
  error: null,
  users: [],
};

export default (state = initialState, {type, data}) => {
  switch (type) {
    case userActions.FETCH_USER:
      return {...state, users: data, loading: false, error: null};
    case userActions.ERROR:
      return {...state, error: data, loading: false};
    case userActions.LOADING:
      return {...state, loading: true};

    default:
      return state;
  }
};
