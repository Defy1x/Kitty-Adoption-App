export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_FAVORITE_KITTIES = 'SET_FAVORITE_KITTIES';

const reducer = ( state, { type, payload } ) => {
  switch ( type ) {
		case LOGIN:
			return {
				user: payload
			};
		case LOGOUT:
			return {user: null}


    case SET_FAVORITE_KITTIES:
      return {
        ...state,
        user: {
          ...state.user,
          favoriteKitties: payload
        }
      }
		default:
			return state;
	}
};

export default reducer;
