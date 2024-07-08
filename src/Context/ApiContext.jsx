import React, { createContext, useState, useEffect } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [cardsData, setCardsData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1');
      const data = await response.json();
      // console.log(data)
      setCardsData(data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ cardsData }}>
      {children}
    </ApiContext.Provider>
  );
};
