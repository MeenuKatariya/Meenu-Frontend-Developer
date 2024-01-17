import React, { useContext, useEffect, useState } from 'react'
import  { SpaceXDataContext }  from '../Context/SpaceXDataContext';
import { Grid } from './Grid';

export const Search = () => {
    const { dataAll, setDataALL, page, setPage } = useContext(SpaceXDataContext);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const [err, setErr] = useState(null);

    const searchData = async () => {
      try{
        const data = await fetch(
          `https://api.spacexdata.com/v3/capsules/?${filter}=${search}`
        );
        const res = await data.json();
        console.log(res);
        setDataALL(res);
        setErr(null);
      }
   
    catch(err){
      console.log(err)
    }
  }

    

  return (
    <>
    <div className="mt-10 md:mt-5 sm:mt-5  xl:w-1/2 md:w sm:w  sm:m-1  p-2">
      <div className='flex flex-wrap   justify-evenly ' >
        <div>
          <span className="mr-2" >Search </span>
          <input
          className="border-2 border-grey-1200 rounded pl-3 outline-none"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search"
          />
        </div>
        <div>
          <span className='mr-5'>Filter </span>{" "}
          <select
           className="border-2 border-grey-1200 rounded pl-3"
            value={filter}
            onChange={(e) => {
              console.log({e})
              setFilter(e.target.value);
            }}
          >
            <option value="default">Default</option>
            <option value="status">Status</option>
            <option value="original_launch">Original Launch</option>
            <option value="type">Type</option>
          </select>
        </div>
        <button   className="rounded p-0 outline outline-offset-2 outline-1 outline-black-500"
        onClick={()=>searchData()}>Search</button>
      </div>
   
    </div>
      <Grid dataAll={dataAll} />
    </>
  )
}


