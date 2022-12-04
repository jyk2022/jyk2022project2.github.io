import styled from "styled-components";

function TodoContent() {
  return (
    <TodoList>
      <span>제목 : </span>
      <h3> 내용 확인</h3>
      <p>
        <span>내용 : </span>
        내용 확인
      </p>
      <button className="detR" onClick={() => {}}>
        삭제하기
      </button>
      <button className="detG" onClick={() => {}}>
        완료
      </button>
    </TodoList>
  );
}

const TodoList = styled.li`
  width: 250px;
  height: 250px;
  padding-top: 2%;
  padding-left: 2%;
  border: 3px solid blue;
  border-radius: 10% 10% 10% 10%;
  text-align: left;
  list-style: none;
  h3 {
    display: inline-block;
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
