import React from "react";
import Header from "./Header";
import MainPage from "./MainPage";

function HomePage({data}) {
  //this is my comment hello
  
  return (
    <div className="container">
      <Header />
      <MainPage data={data}/>
    </div>
  );
}

export default HomePage;
