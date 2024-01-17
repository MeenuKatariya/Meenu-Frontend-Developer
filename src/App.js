import React, { useEffect, useState } from "react";
import Banner from "./component/Banner";

function App() {

  const [dataAll, setDataALL] = useState([]);
  const [limit, setlimit] = useState(10);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const fetchData = async () => {
    const data = await fetch(`https://api.spacexdata.com/v3/capsules/?${limit}`);
    const res = await data.json();
    setDataALL(res);
  };
  

  const searchData = async () => {
    const data = await fetch(
      `https://api.spacexdata.com/v3/capsules/?${filter}=${search}`
    );
    const res = await data.json();
    console.log(res);
    setDataALL(res);
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div>
      <Banner/>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Search </span>{" "}
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search"
          />
        </div>
        <div>
          <span>Filter </span>{" "}
          <select
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
        <button onClick={() => searchData()}>Search</button>
      </div>
  
    
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
        {dataAll?.map((item) => {
          return (
            <div>
              <div>{item.capsule_id}</div>
              <div>{item.capsule_serial}</div>
            </div>
          );
        })}
      </div>
    
    </div>
  );
}

export default App;
