import React from "react";
import ootd2 from "../assets/ootd2.png";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterLayer>
      <TitleLayer>
        <img src={ootd2} style={{ width: "113px" }} />
        <p>Copyrignt © 2024 All rights reserved</p>
        <p>Powered By devtestKim</p>
      </TitleLayer>
      <MenuLayer>
        <span to="/#mainSection" id="mainSection">
          <p>Home</p>
        </span>
        <span to="/#addTodoSection" id="addTodoSection">
          <p>Add Task</p>
        </span>
        <span to="/#myTodaySection" id="myTodaySection">
          <p>Recent</p>
        </span>
        <span to="/#myTodoSection" id="myTodoSection">
          <p>To do List</p>
        </span>
      </MenuLayer>
    </FooterLayer>
  );
};

export default Footer;

const FooterLayer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 40px 0 100px 0;
@media (max-width: 768px) {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  text-align: center;
}
}
`;
const TitleLayer = styled.div`
  margin-left: 80px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
const MenuLayer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-right: 80px;

  p {
    color: black;
    cursor: pointer;

    &: hover {
      color: #212121;
    }
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`;
