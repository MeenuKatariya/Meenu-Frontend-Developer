// context/SpaceXDataContext.js
import React, { createContext, useEffect, useState } from 'react';

const SpaceXDataContext = createContext();


export const SpaceXDataProvider = ({ children }) => {
  const [spaceXData, setSpaceXData] = useState([]);

  useEffect(() => {
    // Fetch data from your REST API here
    // Update the spaceXData state
  }, []);

  const values = {
    spaceXData,
  };

  return (
    <SpaceXDataContext.Provider value={values}>
      {children}
    </SpaceXDataContext.Provider>
  );
};
