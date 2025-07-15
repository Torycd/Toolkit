import React, { useEffect, useState } from "react";

export const useLocalStorageState = (key, intialState) => {
    // Initial Value is what is  stored in the localStorage
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : intialState;
  });
//   this takes whatever has been selected and save it to the localStorge
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};
