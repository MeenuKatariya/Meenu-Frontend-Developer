import React, { createContext, useEffect, useState } from 'react';

export const SpaceXDataContext = createContext();


export const SpaceXDataProvider = ({ children }) => {
    let limit =10;
    const [dataAll, setDataALL] = useState([]);
    const [page, setPage] = useState(1);
 
   

    const fetchData = async () => {
      const data = await fetch(`https://api.spacexdata.com/v3/capsules?${limit}&page=${page}`);
      const res = await data.json();
      setDataALL(res);
    };
    
  
   
  
    useEffect(() => {
      fetchData();
    },[page, limit]);

  return (
    <SpaceXDataContext.Provider value={{dataAll, setDataALL, page, setPage}}>
      {children}
    </SpaceXDataContext.Provider>
  );
};
