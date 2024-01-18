import React, { useContext, useEffect, useState } from "react";
import { SpaceXDataContext } from "../Context/SpaceXDataContext";
import { Grid } from "./Grid";

export const Search = () => {
  const { dataAll, setDataALL } = useContext(SpaceXDataContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [loader,setLoader ] = useState(false);

  const searchData = async () => {
    try {
      setLoader(true)
      const data = await fetch(
        `https://api.spacexdata.com/v3/capsules/?${filter}=${search}`
      );
     
      const res = await data.json();
      setDataALL(res);
      setLoader(false)
     setFilter("");
     setSearch("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const start = (page - 1) * 10;
    const end = page * 10;
    const pageData = [...dataAll].slice(start, end);
    setCurrentPageData(pageData);
  }, [page, dataAll]);

  return (
    <>
    
      <div className="mt-10 md:mt-5 sm:mt-5 p-2">
        <div className="flex flex-wrap  lg:justify-center sm:justify-left gap-10 ">
          <div>
            <span className="mr-2">Search: </span>
            <input
              className="border-2 border-grey-1200 rounded pl-3 outline-none w-[20rem] p-1"
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Enter Type or Status or Original Launch  "
            />
          </div>
          <div>
            <span className="mr-2">Filter By: </span>{" "}
            <select
              className="border-2 border-grey-1200 rounded pl-3 p-1"
              value={filter}
              onChange={(e) => {
                console.log({ e });
                setFilter(e.target.value);
              }}
            >
              <option value="default">Default</option>
              <option value="status">Status</option>
              <option value="original_launch">Original Launch</option>
              <option value="type">Type</option>
            </select>
          </div>
          <button
            className=" pl-3 pr-3 pt-0.3 outline outline-offset-1 outline-1 outline-black-500"
            onClick={() => searchData()}
          >
            Search
          </button>
        </div>
      </div>
      {
      loader?   (
      <div className="flex items-center justify-center">
      
      <div className="animate-spin rounded-full mt-5 h-6 w-6 border-t-4 border-blue-500 border-solid"></div>
    </div> ) : null
    
     }
       <Grid dataAll={currentPageData} />
    
      <div className="mt-4 flex flex-wrap  justify-center gap-10 m-4 ">
        <button
          className={`p-1 outline outline-offset-2 outline-1 outline-black-500 font-mono pl-3 pr-3 ${
            page === 1 ? "cursor-not-allowed" : "cursor-pointer"
          } rounded`}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className={`p-1 outline outline-offset-2 outline-1 outline-black-500 font-mono pl-3 pr-3 ${
            page === Math.ceil(dataAll?.length / 10)
              ? "cursor-not-allowed"
              : "cursor-pointer"
          } rounded`}
          onClick={() => setPage(page + 1)}
          disabled={page === Math.ceil(dataAll?.length / 10)}
        >
          Next
        </button>
      </div>
    </>
  );
};
