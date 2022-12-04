import React from "react";
import AddTodo from "../components/Form/addTodo";
import TodoContent from "../components/TodoContent/TodoContent";
import styled from "styled-components";

function TodosHome() {
  return (
    <div>
      <AddTodo />
      <Section>
        <h2>😎 이거 해야 함!!!</h2>
        <ul>
          <TodoContent />
        </ul>
      </Section>
      <Section>
        <h2>😭이거 다 했음</h2>
        <ul>
          <TodoContent borderColor="red" />
        </ul>
      </Section>
    </div>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  background-color: #ffbc4a;
  border-radius: 50px 50px 50px 50px;
  margin: 3% auto;
  padding: 1% 1% 1% 1%;
  max-width: 1200px;
  min-width: 800px;
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export default TodosHome;
