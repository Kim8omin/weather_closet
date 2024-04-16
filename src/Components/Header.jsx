import styled from "styled-components";
import ootd2 from "../assets/ootd2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Layer>
        <img src={ootd2} />
        <div>
          <Link to="/signup">
            <StyledButtonSignUp>sign up</StyledButtonSignUp>
          </Link>
          <Link to="/signin">
            <StyledButtonSignIn>sign in</StyledButtonSignIn>
          </Link>
        </div>
      </Layer>
    </div>
  );
};

export default Header;

const Layer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: sticky;
  top: 0px;

  img {
    width: 110px;
    padding: 80px;
  }

  div {
    margin-right: 100px;
  }
`;
const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid orange;
  background-color: transparent;
  color: orange;
  font-weight: bold;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`;
const StyledButtonSignUp = styled(StyledButton)`
  color: white;
  background-color: orange;
`;

const StyledButtonSignIn = styled(StyledButton)`
  color: orange;
  background-color: white;
`;
