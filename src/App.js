import React, { useEffect, useState } from "react";
import Banner from "./component/Banner";
import { Search } from "./component/Search";

function App() {
  return (
    <div className="bg-gray-200 pb-10">
      <Banner />
      <Search />
    </div>
  );
}

export default App;
