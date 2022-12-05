import React from "react";
import styled from "styled-components";

function TodoList() {
  return (
    <Subpage>
      <div></div>
      <div>
        <span>
          <strong>제목: </strong>
        </span>
        <h3></h3>
        <span>
          <strong>내용: </strong>
          <p></p>
        </span>
      </div>
    </Subpage>
  );
}

const Subpage = styled.section`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  padding: 5% 0% 0% 3%;
  border: 3px solid blue;
  border-radius: 10% 10% 10% 10%;
  text-align: left;
  list-style: none;
  p {
    display: inline;
  }
  h3 {
    display: inline-block;
    margin-left: 2.5%;
  }
  span {
    display: inline-block;
    font-size: 18px;
  }
`;
export default TodoList;
