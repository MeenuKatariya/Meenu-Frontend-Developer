import React, { createContext, useEffect, useState } from "react";

export const SpaceXDataContext = createContext();

export const SpaceXDataProvider = ({ children }) => {
  const [dataAll, setDataALL] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://api.spacexdata.com/v3/capsules");
    const res = await data.json();
    setDataALL(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SpaceXDataContext.Provider value={{ dataAll, setDataALL }}>
      {children}
    </SpaceXDataContext.Provider>
  );
};
