import {actions} from './actions';
import {userActions} from './actions';

export const setCount = data => ({
  type: actions.SET_COUNT,
  data,
});

// User Action Creators

export const fetchUser = () => {
  return async dispatch => {
    try {
      dispatch({
        type: userActions.LOADING,
      });
      const res = await fetch('http://jsonplaceholder.typicode.com/users');
      const users = await res.json();

      dispatch({
        type: userActions.FETCH_USER,
        data: users,
      });
    } catch (error) {
      dispatch({
        type: userActions.ERROR,
        data: error,
      });
    }
  };
};

export const isLoading = () => ({
  type: userActions.LOADING,
});
