import {
  GET_SLIDER_DATA_START,
  GET_SLIDER_DATA_SUCCESS,
  GET_SLIDER_DATA_ERROR,
} from "./actiontTypes";

// ==================Schoole======================
export const getSliderDataStart = () => ({
  type: GET_SLIDER_DATA_START,
});

export const getSliderDataSuccess = (Sliderdata) => ({
  type: GET_SLIDER_DATA_SUCCESS,
  payload: Sliderdata,
});

export const getSliderDataError = (error) => ({
  type: GET_SLIDER_DATA_ERROR,
  payload: error,
});
// ==================Schoole======================
