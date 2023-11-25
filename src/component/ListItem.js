import React from "react";
import styled from "styled-components";

function ListItem({ center, city, state}) {
  return (
    <Wrapper>
      <div className="container">
        <div className="data_container">
          <div>
            <h3>CENTER</h3>
          </div>
          <div>
            <p>{center}</p>
          </div>
        </div>
        <div className="data_container">
          <div>
            <h3>CITY</h3>
          </div>
          <div>
            <p>{city}</p>
          </div>
        </div>
        <div className="data_container">
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
  padding-right: 1.5rem;
  .container {
    position: relative;
    display: flex;
    flex-direction: row;
    background-color: #213bd9;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 12px;
    padding: 4px;
  }
  .data_container {
    display: flex;
    flex-direction: column;
    padding: 2px;
    flex: 4;
    min-width: 0;
  }

  P {
    color: white;
    font-size: 1.8rem;
  }

  h3 {
    color: white;
    font-size: 1.5rem;
  }
`;

export default ListItem;
