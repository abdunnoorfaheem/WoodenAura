import axios from "axios";
import React, { Children, createContext, useEffect, useState } from "react";

let apiData = createContext();
const ContextApi = ({ children }) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products);
    });
  }, []);
    // console.log(data);

  return (<apiData.Provider value={data}>{children}</apiData.Provider>);
};

export { ContextApi, apiData };
