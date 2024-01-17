import React, { useContext, useEffect, useState } from "react";
import { SpaceXDataContext } from "../Context/SpaceXDataContext";
import { Grid } from "./Grid";

export const Search = () => {
  const { dataAll, setDataALL } = useContext(SpaceXDataContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);

  const searchData = async () => {
    try {
      if (search == "" || filter == "") {
        alert("Please fill value and select filter");
      }
      const data = await fetch(
        `https://api.spacexdata.com/v3/capsules/?${filter}=${search}`
      );
      const res = await data.json();
      setDataALL(res);
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
            <span className="mr-2">Search </span>
            <input
              className="border-2 border-grey-1200 rounded pl-3 outline-none w-[20rem]"
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Enter Type or Status or Original Launch  "
            />
          </div>
          <div>
            <span className="mr-2">Filter Data </span>{" "}
            <select
              className="border-2 border-grey-1200 rounded pl-3"
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
            className="rounded pl-3 pr-3  outline outline-offset-1 outline-1 outline-black-500"
            onClick={() => searchData()}
          >
            Go
          </button>
        </div>
      </div>
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
