import data from './mockData.json';
import { IResponse } from 'types';

export const initialState = {
  data_career: [],
  data_position: [],
  isError: false
};

export const fetchData = async (): Promise<IResponse> => {
  const urlParams = new URLSearchParams({
    custom_web_template_id: '6992363914750997960',
    action: 'getData'
  });
  const baseURL = window.location.origin;

  const API_URL = import.meta.env.DEV
    ? 'https://jsonplaceholder.typicode.com/posts?' + urlParams
    : baseURL + '/custom_web_template.html?' + urlParams;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();

    if (import.meta.env.DEV) {
      return new Promise((resolve) => {
        return setTimeout(() => resolve(data), 1500);
      });
    } else {
      return json;
    }
  } catch (e) {
    initialState.isError = true;
    return initialState;
  }
};
