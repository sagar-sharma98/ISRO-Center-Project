import React, { useContext } from "react";
import styled from "styled-components";

import InputSection from "./InputSection";
import { CartContext } from "../store/list-cart";
import List from "./list";

function MainPage() {
  const {list} = useContext(CartContext);
  return (
    <MainWrapper>
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzgOTN8YFC5CZOecpad5iYpEm2cAer2OoZse-a1R4-sYO2JltADZ-RjiZL-cYU_CS85U&usqp=CAU"
          alt="logo image"
          height="100px"
          width="100px"
        />
      </div>
      <div className="heading_container">
        <div>
          <h1>ISRO centres</h1>
        </div>
        <div className="title_container">
          <div className="isro_image">
            <img
              src="https://ih1.redbubble.net/image.2582420953.8132/st,small,507x507-pad,600x600,f8f8f8.jpg"
              alt="image"
              width="100px"
              height="100px"
            />
          </div>
          <div className="name">
            <p>Indian Space Research Orgnization</p>
          </div>
        </div>
      </div>
      <InputSection />
      <List data={list}  />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  position: relative;
  background-color: white;
  padding: 1rem;
  margin: 2rem auto;
  width: 50vw;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  h1 {
    font-size: xx-large;
  }
  /* .isro_image{
    border-radius: 12px;
    border: 1px solid black;
  } */
  .title_container {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  .name {
    padding-top: 2rem;
    p {
      font-size: xx-large;
    }
  }
`;

export default MainPage;
