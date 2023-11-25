import React, { useContext } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { CartContext } from "../store/list-cart";

function List() {
  const {list} = useContext(CartContext);

  return (
    <ListWrapper>
      {list.map((data, index) => ( index < 3 &&
        <ListItem center={data.name} city={data.Place} state={data.State} key={data.id} />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.div``;

export default List;
