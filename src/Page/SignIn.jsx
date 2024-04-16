import styled from "styled-components";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <PageWrapper>
      <Link to="/">
        <img src={arrow} />
      </Link>
      <Content>
        <StyledForm>
          <h2>Sign In</h2>
          <StyledInput type="email" placeholder="email" />
          <StyledInput type="password" placeholder="password" />
          <ButtonWrapper>
            <StyledButton>sign in</StyledButton>
            <StyledButtonSignUp>sign up</StyledButtonSignUp>
          </ButtonWrapper>
        </StyledForm>
      </Content>
    </PageWrapper>
  );
};

export default SignIn;

const PageWrapper = styled.div`
  background-color: orange;
  min-height: 100vh;

  img {
    width: 30px;
    margin-top: 60px;
    margin-left: 60px;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
`;

const StyledForm = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  width: calc(50% - 5px);
  padding: 10px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;

const StyledButtonSignUp = styled(StyledButton)`
  background-color: white;
  color: orange;
`;
