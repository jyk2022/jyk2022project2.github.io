import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../redux/modules/TodoHandler";

function TodoContent(props) {
  let { todo } = props;
  return (
    <>
      <TodoList>
        <span>
          <strong>제목: </strong>
        </span>
        <h3>{todo.title}</h3>
        <span>
          <p>
            <strong>내용: </strong>
            {todo.content}
          </p>
        </span>
        <div>
          <button className="detR">삭제하기</button>
          <button className="detG" onClick={() => {}}>
            {todo.done ? "취소" : "완료"}
          </button>
        </div>
      </TodoList>
    </>
  );
}

const TodoList = styled.li`
  width: 250px;
  height: 250px;
  padding: 2% 0% 0% 2%;
  border: 3px solid blue;
  border-radius: 10% 10% 10% 10%;
  text-align: left;
  list-style: none;
  p {
    display: inline-block;
    width: 100%;
  }
  h3 {
    display: inline-block;
    margin-left: 2.5%;
  }
  span {
    display: inline-block;
    font-size: 18px;
  }
  .detR {
    width: 80px;
    height: 50px;
    margin-top: 20px;
    margin-right: 20px;
    border: 3px solid red;
    border-radius: 15px 15px 15px 15px;
    background-color: transparent;
    cursor: pointer;
    :hover {
      background-color: red;
      color: white;
    }
  }
  .detG {
    width: 80px;
    height: 50px;
    margin-top: 20px;
    margin-right: 20px;
    border: 3px solid green;
    border-radius: 15px 15px 15px 15px;
    background-color: transparent;
    cursor: pointer;
    :hover {
      background-color: green;
      color: white;
    }
  }
`;

export default TodoContent;
