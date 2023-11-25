import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../store/list-cart";

function InputSection(props) {
  const ref = useRef();
  const { setList } = useContext(CartContext);

  const btnHandler = (e) => {
    e.preventDefault();
    setList(ref.current.value, e.target.value);
  }

  return (
    <InputWrapper>
      <div className="title">
        <p>Search for ISRO centres based on place, state and name</p>
      </div>
      <div className="search_container">
        <form className="input_container">
          <input type="search" placeholder="type here......" ref={ref}/>
        </form>
        <div className="buttons">
          <button onClick={btnHandler} value="city">CITY</button>
          <button onClick={btnHandler} value="state">STATE</button>
          <button onClick={btnHandler} value="centre">CENTRE</button>
        </div>
      </div>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    position: relative;
    background-color: #213bd9;
    padding: 0.5rem;

    width: 50rem;
    max-width: 95%;
    border-radius: 10px;
    p {
      font-size: 1.9rem;
      color: white;
    }
    /* box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25); */
  }
  .search_container {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    .input_container {
      display: flex;
      flex-direction: row;
      width: 100%;

      input {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 1.5rem;
        text-align: center;
      }

      button {
        position: absolute;
        width: 50px;
        height: 38%;
        margin-left: 27.7rem;
        border-radius: 50%;
        border: none;
      }
    }

    .buttons {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      padding-right: 1.5rem;
      button {
        padding: 0.5rem;
        background-color: #213bd9;
        border: none;
        cursor: pointer;
        border-radius: 1.5rem;

        padding: 0.5rem;
        color: white;
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
  }
`;

export default InputSection;
