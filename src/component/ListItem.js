import React from "react";
import styled from "styled-components";

function ListItem({ center, city, state}) {
  return (
    <Wrapper>
      <div className="container">
        <div className="data_container_1">
          <div>
            <h3>CENTER</h3>
          </div>
          <div>
            <p>{center}</p>
          </div>
        </div>
        <div className="data_container_2">
          <div>
            <h3>CITY</h3>
          </div>
          <div>
            <p>{city}</p>
          </div>
        </div>
        <div className="data_container_3">
          <div>
            <h3>STATE</h3>
          </div>
          <div>
            <p>{state}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  /* padding-right: 1.5rem; */
  .container {
    position: relative;
    display: flex;
    flex-direction: row;
    background-color: #3550e3;
    /* justify-content: space-between; */
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 12px;
    padding: 4px;
  }
  .data_container_1 {
    padding: 1px;
    width: 32vw;
  }

  .data_container_2 {
    padding: 1px;
    width: 15vw;
  }
  .data_container_3 {
    padding: 1px;
    width: 10.8vw;
  }
 

  P {
    color: white;
    font-size: 18px;
  }

  h3 {
    color: white;
    font-size: 20px;
  }
`;

export default ListItem;
