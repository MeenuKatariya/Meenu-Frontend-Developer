import React, { useContext, useEffect, useState } from 'react'
import  { SpaceXDataContext }  from '../Context/SpaceXDataContext';

const Search = () => {
    const { dataAll, setDataALL } = useContext(SpaceXDataContext);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");

    const searchData = async () => {
        const data = await fetch(
          `https://api.spacexdata.com/v3/capsules/?${filter}=${search}`
        );
        const res = await data.json();
        console.log(res);
        setDataALL(res);
      };
  return (
    <div className="mt-10  w-1/2  border-2 font-mono border-red-600 p-2">
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
            <option value="status">Status</option>
            <option value="original_launch">Original Launch</option>
            <option value="type">Type</option>
          </select>
        </div>
        <button   className="rounded p-1 outline outline-offset-2 outline-1 outline-black-500"
        onClick={() => searchData()}>Search</button>
      </div>
  
    </div>
  )
}

export default Search
