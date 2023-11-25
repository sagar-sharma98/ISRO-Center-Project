
import React, { useState, useCallback, useEffect } from "react";
import HomePage from "./component/HomePage";
import { CartContext } from "./store/list-cart";

import "./App.css";


function App() {
  const [data, setData] = useState([]);
  const [sendData, setSendData] = useState([]);

  const fetchdata = useCallback(async () => {
    const response = await fetch("https://isro.vercel.app/api/centres");
    const data = await response.json();
    setData(data.centres);
    console.log(data.centres);
    setSendData(data.centres);
  }, []);

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);


  const sortListHandler = (search, option) => {
   
   let sortList;
   if(option === 'state'){
    sortList = data.filter((item) => (item.State.toLowerCase().includes(search.toLowerCase())));
   }

   if(option === 'city'){
    sortList = data.filter((item) => (item.Place.toLowerCase().includes(search.toLowerCase())));
   }

   if(option === 'centre'){
    sortList = data.filter((item) => (item.name.toLowerCase().includes(search.toLowerCase())));
   }
   
   setSendData(sortList);
  };

  const cartVal = {
    list: sendData,
    setList: sortListHandler,
  }

  return (
    <CartContext.Provider value={cartVal}>
      <div className="App">
        <HomePage data={cartVal.list} />
      </div>
    </CartContext.Provider>
  );
}

export default App;

