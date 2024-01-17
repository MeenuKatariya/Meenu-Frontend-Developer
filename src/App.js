import React, { useEffect, useState } from "react";
import Banner from "./component/Banner";
import Search from "./component/Search";

function App() {
  return (
    <div>
      <Banner />
      <Search />

      {/* <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
        {dataAll?.map((item) => {
          return (
            <div>
              <div>{item.capsule_id}</div>
              <div>{item.capsule_serial}</div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
