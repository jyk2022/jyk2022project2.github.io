import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

function TodoList() {
  const param = useParams().id;
  const globalTodoList = useSelector((state) => state.todos);
  const { todos } = globalTodoList;
  const navigate = useNavigate();

  const todoslistss = todos.find((todo) => {
    return todo.id === Number(param);
  });

  // console.log("파람스", todoslist);
  console.log("", todoslistss);
  return (
    <Subpage>
      <div>
        <span>
          <p>
            <strong>번호:</strong>
            {todoslistss.id}
          </p>
        </span>
      </div>
      <div>
        <span>
          <strong>제목:</strong>
        </span>
        <h3>{todoslistss.title}</h3>
        <br></br>
        <span>
          <strong>내용: </strong>
          <p>{todoslistss.content}</p>
        </span>
        <br></br>
        <p
          className="prev"
          onClick={() => {
            navigate("/");
          }}
        >
          이전으로 가기
        </p>
      </div>
    </Subpage>
  );
}

const Subpage = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 250px;
  height: 250px;
  padding: 1% 0% 0% 3%;
  margin: 9% auto;
  border: 3px solid blue;
  border-radius: 10% 10% 10% 10%;
  text-align: left;
  list-style: none;
  .prev {
    display: block;
    position: relative;
    right: 10%;
    width: 150px;
    height: 50px;
    margin: 0% auto;
    padding-top: 4%;
    text-align: center;
    border: 3px solid blue;
    border-radius: 50px 50px 50px 50px;
    box-sizing: border-box;
    cursor: pointer;
    :hover {
      background-color: blue;
      color: white;
    }
  }
  p {
    display: inline-block;
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
