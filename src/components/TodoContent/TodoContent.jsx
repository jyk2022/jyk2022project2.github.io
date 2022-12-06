import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo, doneTodo } from "../../redux/modules/TodoHandler";

function TodoContent(props) {
  const dispatch = useDispatch();

  const { id, title, done, content } = props.todo;

  // console.log(id, title); props 잘 받는지

  //딜리트 클릭 핸들러
  const deleteClick = () => {
    dispatch(deleteTodo(id));
  };

  //돈 클릭 핸들러

  const doneClick = () => {
    dispatch(doneTodo(id));
  };
  const navigate = useNavigate();
  return (
    <>
      <TodosLists>
        <p
          className="subPage"
          onClick={() => {
            navigate(`/${id}`);
          }}
        >
          상세보기
        </p>
        <span>
          <strong>제목: </strong>
        </span>
        <h3>{title}</h3>
        <br />
        <span>
          <p>
            <strong>내용: </strong>
            {content}
          </p>
        </span>
        <div>
          <button className="detR" onClick={deleteClick}>
            삭제하기
          </button>
          <button className="detG" onClick={doneClick}>
            {done ? "취소" : "완료"}
          </button>
        </div>
      </TodosLists>
    </>
  );
}

const TodosLists = styled.li`
  width: 250px;
  height: 270px;
  padding: 2% 0% 0% 2%;
  border: 3px solid blue;
  border-radius: 10% 10% 10% 10%;
  text-align: left;
  list-style: none;
  .subPage {
    display: inline-block;
    font-size: 18px;
    width: 100%;
    cursor: pointer;
    :hover {
      color: blue;
    }
  }
  p {
    display: inline-block;
    width: 100%;
  }
  h3 {
    display: inline-block;
    margin-left: 2.5%;
    padding-left: 2%;
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
