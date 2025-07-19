import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, loading: true };
    case "success":
      return { ...state, loading: false, data: action.payload };
    case "failure":
      return { ...state };
    default:
      return state;
  }
}

export const useApiReducer = (url, callback) => {
  const intitialState = { loading: false, error: "", data: [] };

  const [state, dispatch] = useReducer(reducer, intitialState);
  const { loading, error, data } = state;

  useEffect(() => {
    async function handleApi() {
      callback?.();
      try {
        dispatch({ type: "start" });
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        dispatch({ type: "success", payload: data });
      } catch (err) {
        dispatch({ type: "failure", payload: err.message });
      }
    }
    handleApi();
  }, [callback, url]);
  return { loading, error, data };
};
