import styled from "styled-components";
import CustomButton from "./CustomButton";

function AddTodo() {
  return (
    <Section>
      <Form>
        <p>제목:</p>
        <input
          placeholder="제목을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 title의 값으로 업데이트

          autofocus
        />
        <p>내용:</p>
        <input
          placeholder="내용을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 content의 값으로 업데이트
        />
        <CustomButton
          width="200px"
          height="50px"
          margin="0 auto"
          border="none"
          color="blue"
          borderRadius="30px"
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
