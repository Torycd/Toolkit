import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, loading: true };
    case "success":
      return { ...state, loading: false, data: action.payload };
    case "failure":
      return { ...state, error: action.payload };
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
        const result = await response.json();
        dispatch({ type: "success", payload: result });
      } catch (err) {
        dispatch({ type: "failure", payload: err.message });
      }
    }
    handleApi();
  }, [callback, url]);
  return { loading, error, data };
};
