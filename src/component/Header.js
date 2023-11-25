import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzgOTN8YFC5CZOecpad5iYpEm2cAer2OoZse-a1R4-sYO2JltADZ-RjiZL-cYU_CS85U&usqp=CAU"
          alt="logo"
          height="50px"
          width="50px"
        />
      </div>
      <div className="text">
        <h4>Isro centers</h4>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  .text {
    padding: 10px 10px;
  }
`;

export default Header;
