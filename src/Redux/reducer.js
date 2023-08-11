import {
  GET_SLIDER_DATA_START,
  GET_SLIDER_DATA_SUCCESS,
  GET_SLIDER_DATA_ERROR,
} from "./actiontTypes";

const initialState = {
  Sliderdata: [],
  loading: false,
  error: null,
};

const usersReduce = (state = initialState, action) => {
  switch (action.type) {
    case GET_SLIDER_DATA_START:
      return {
        ...state,
        loading: true,
      };

    case GET_SLIDER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        Sliderdata: action.payload.data,
      };

    case GET_SLIDER_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default usersReduce;
