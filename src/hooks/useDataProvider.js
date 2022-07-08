//importaciones
import { useEffect, useReducer } from "react";

//types
export const LOADING = "loading";
export const SUCCESS = "success";
export const ERROR = "error";

//reducer
const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        statusData: LOADING,
        url: payload.url,
      };
    case SUCCESS:
      return {
        ...state,
        statusData: SUCCESS,
        data: payload.data,
      };
    case ERROR:
      return {
        ...state,
        statusData: ERROR,
        error: payload.error,
      };
    default: {
      return { ...state };
    }
  }
};

//hook
export const useDataProvider = (initialUrl) => {
  //variable inicial
  const initialState = {
    url: initialUrl,
    statusData: LOADING,
  };

  //reducers
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const { url, statusData } = state;

  //useEffect
  useEffect(() => {
    if (statusData === LOADING && url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) =>
          dispatch({
            type: SUCCESS,
            payload: {
              data: data,
            },
          })
        )
        .catch((error) =>
          dispatch({
            type: ERROR,
            payload: {
              error: error,
            },
          })
        );
    }
  }, [url, statusData]);

  //funciones
  const loading = (url) =>
    dispatch({
      type: LOADING,
      payload: {
        url: url,
      },
    });

  return [state, loading];
};
