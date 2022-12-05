import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/modules/TodoHandler";
import styled from "styled-components";
import CustomButton from "./CustomButton";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [done] = useState(false);
  const [id, setId] = useState(3);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      alert("칸을 채워주세요!!");
    } else {
      setId(id + 1);
      const NewTodo = {
        id: id,
        title: title,
        content: content,
        done: done,
      };
      console.log(NewTodo);
      dispatch(addTodo(NewTodo));
      setTitle("");
      setContent("");
    }
  };

  return (
    <Section>
      <Form onSubmit={onSubmitHandler}>
        <p>제목:</p>
        <input
          value={title}
          placeholder="제목을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 title의 값으로 업데이트
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <p>내용:</p>
        <input
          value={content}
          placeholder="내용을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 content의 값으로 업데이트
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <CustomButton
          width="200px"
          height="50px"
          margin="0 auto"
          border="none"
          color="blue"
          borderRadius="30px"
          onClick={onSubmitHandler}
        >
          추가하기
        </CustomButton>
      </Form>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  border: none;
  margin: 2% auto;
  background-color: antiquewhite;
  border-radius: 50px 50px 50px 50px;
  box-shadow: 2% 2% 2% 2%;
  padding: 1% 1% 1% 1%;
  max-width: 1200px;
  min-width: 800px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  p {
    display: inline-block;
    text-align: center;
    margin-left: 1%;
  }
  input {
    width: 400px;
    height: 50px;
    text-align: center;
    border-radius: 15px 15px 15px 15px;
    margin-left: 1%;

    :focus {
      outline: 3px solid blue;
    }
  }
`;

export default AddTodo;
