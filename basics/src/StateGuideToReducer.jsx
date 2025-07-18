import React, { useRef } from "react";
import { useReducer } from "react";

function reducer(state, action) {
  return state(state => [...state, action]);
}
const DATA = ["jospeh", "james", "jo", "jerry"];
const StateGuideToReducer = () => {
  const [state, dispatch] = useReducer(reducer, DATA);
  const data = useRef("")

  function handleAdd(newh) {
    dispatch(newh);
  }
  return (
    <div>
      <input type="text" value={data} onClick={(e) => handleAdd(e.target.value)}  />
      <ul>
        {state.map((nm) => (
          <li>{nm}</li>
        ))}
      </ul>
    </div>
  );
};

export default StateGuideToReducer;
