const initialState = {
  gallery: [],
  loading: true,
  errorMessage: null,
};
const GET_GALLERY = 'GET_GALLERY';
const GET_GALLERY_FULFILLED = 'GET_GALLERY_FULFILLED';
const GET_GALLERY_REJECTED = 'GET_GALLERY_REJECTED';

export const fetchData = (bool) => {
  return {
    type: GET_GALLERY,
    payload: bool,
  };
};

export const fetchDataFulfilled = (data) => {
  return {
    type: GET_GALLERY_FULFILLED,
    payload: data,
    loading: false,
  };
};

export const fetchDataRejected = (error) => {
  return {
    type: GET_GALLERY_REJECTED,
    payload: error,
    loading: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GALLERY:
      return { ...state, loading: action.payload };
    case GET_GALLERY_FULFILLED:
      return { ...state, gallery: action.payload, loading: action.loading };
    case GET_GALLERY_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default reducer;
