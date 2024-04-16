import styled from "styled-components";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm((prev) => ({ ...prev, file: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("전송버튼");
    try {
      const formData = new FormData();
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("username", form.username);
      formData.append("file", form.file);

      const response = await axios.post(
        "http://43.200.188.52:8080/api/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <PageWrapper>
      <Link to="/">
        <img src={arrow} alt="Arrow" />
      </Link>
      <Content>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <StyledInput
            name="email"
            type="email"
            placeholder="email"
            value={form.email}
            onChange={handleChange}
          />
          <StyledInput
            name="password"
            type="password"
            placeholder="password"
            value={form.password}
            onChange={handleChange}
          />
          <StyledInput
            name="username"
            type="text"
            placeholder="user nickname"
            value={form.username}
            onChange={handleChange}
          />
          <div>
            <InputLabel htmlFor="profileImage">
              Choose the profile photo:
            </InputLabel>
            <StyledInput
              name="file"
              type="file"
              id="profileImage"
              onChange={handleFileChange}
            />
          </div>
          <ButtonWrapper>
            <StyledButton>Sign up</StyledButton>
          </ButtonWrapper>
        </StyledForm>
      </Content>
    </PageWrapper>
  );
};

export default Register;

const PageWrapper = styled.div`
  background-color: orange;
  min-height: 100vh;

  img {
    width: 30px;
    margin-top: 60px;
    margin-left: 100px;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
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
  justify-content: center;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;

const InputLabel = styled.label`
  margin-bottom: 10px;
  font-size: 12px;
`;
