import React, { useState } from "react";

const FunctionTool = () => {
  const [data, setData] = useState();
  // to add an item to a list
  function handleAdd(newInfo) {
    setData((previousData) => [...previousData, newInfo]);
    console.log(data);
  }
  //   To delete an item from a list
  function reduceItem(id) {
    setData((movies) => movies.filter((old) => old.id !== id));
  }
  reduceItem();
  handleAdd();
};

export default FunctionTool;
