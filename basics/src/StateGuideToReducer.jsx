import { useReducer, useRef } from "react";
import "./index.css";

const TRAVELLIST = [
  { id: 1, title: "Paris, France" },
  { id: 2, title: "Tokyo, Japan" },
  { id: 3, title: "New York City, USA" },
  { id: 4, title: "Cape Town, South Africa" },
  { id: 5, title: "Rome, Italy" },
  { id: 6, title: "Barcelona, Spain" },
  { id: 7, title: "Sydney, Australia" },
  { id: 8, title: "Dubai, UAE" },
  { id: 9, title: "Rio de Janeiro, Brazil" },
  { id: 10, title: "Istanbul, Turkey" },
  { id: 11, title: "London, UK" },
  { id: 12, title: "Bangkok, Thailand" },
  { id: 13, title: "Vancouver, Canada" },
  { id: 14, title: "Bali, Indonesia" },
  { id: 15, title: "Amsterdam, Netherlands" },
  { id: 16, title: "Cairo, Egypt" },
  { id: 17, title: "Prague, Czech Republic" },
  { id: 18, title: "Santorini, Greece" },
  { id: 19, title: "Auckland, New Zealand" },
  { id: 20, title: "Lagos, Nigeria" },
];

function reducer(state, action) {
  if (action.type === "add") {
    const newData = {
      id: Math.random().toFixed(3),
      title: action.payload,
    };

    return [...state, newData];
  }

  if (action.type === "delete") {
    const id = action.payload;
    return state.filter((item) => item.id !== id);
  }
}

const StateGuideToReducer = () => {
  const [list, dispatch] = useReducer(reducer, TRAVELLIST);
  const inputCot = useRef(null);

  function addHandler() {
    dispatch({ type: "add", payload: inputCot.current.value });
    inputCot.current.value = "";
  }

  function delHandler(id) {
    dispatch({ type: "delete", payload: id });
  }
  return (
    <div className="container">
      <h1 className="heading">My Travel Wishlist</h1>

      <div className="input-group">
        <input type="text" placeholder="Add a destination..." ref={inputCot} />
        <button onClick={addHandler}>Add</button>
      </div>

      <ul className="travel-list">
        {list.map((item) => (
          <li key={item.id} className="travel-item">
            <span>{item.title}</span>
            <button className="delete-btn" onClick={() => delHandler(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StateGuideToReducer;
