import React, { createContext, useState } from 'react';
export const BookBoxContext = createContext();


export const BookBoxProvider = ({ children }) => {
  const [BookBoxes, setBookBoxes] = useState([]);

  const removeBookBox = (index) => {
    setBookBoxes(currentBookBoxes => currentBookBoxes.filter((_, idx) => idx !== index));
  };

  const addBookBox = (BookBox) => {
    if (BookBoxes.length < 4) {
      setBookBoxes((prevBookBoxes) => [...prevBookBoxes, BookBox]);
    }
  };

  return (
    <BookBoxContext.Provider value={{ BookBoxes, addBookBox, removeBookBox }}>
      {children}
    </BookBoxContext.Provider>
  );
};


