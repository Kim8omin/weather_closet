import styled from "styled-components";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [form, setForm] = useState({
    name: "",
    title: "",
    posting: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("전송버튼");
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("title", form.title);
      formData.append("posting", form.posting);
      formData.append("image", form.image, form.image.name);
      console.log(form.image);
      console.log(form.image.name);

      const response = await axios.post(
        "http://localhost:3001/create",
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
          <h2>Post your dress today</h2>
          <StyledInput
            name="name"
            type="name"
            placeholder="name"
            value={form.name}
            onChange={handleChange}
          />
          <StyledInput
            name="title"
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
          />
          <StyledInput
            name="posting"
            type="textarea"
            placeholder="Posting"
            value={form.posting}
            onChange={handleChange}
          />

          <div>
            <InputLabel htmlFor="profileImage">
              Choose what you dressed today:
            </InputLabel>
            <StyledInput
              name="image"
              type="file"
              id="image"
              onChange={handleFileChange}
            />
          </div>
          <ButtonWrapper>
            <StyledButton>Submit</StyledButton>
          </ButtonWrapper>
        </StyledForm>
      </Content>
    </PageWrapper>
  );
};

export default PostForm;

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
