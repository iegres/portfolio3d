// import React, { useState } from "react";
import styled from "styled-components";
// import Development from "./Development";
// import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";
import { showNotification } from "../notification.js";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Button = styled.button`
  background-color: #d93f6b;
  color: white;
  font-weight: 500;
  width: 120px;
  height: 30px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 2%;
  left: calc(50% - 60px);
  z-index: 1;
`;

const Works = () => {
  // const [work, setWork] = useState("Web Design");
  return (
    <Section id="works">
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              // <ListItem key={item} text={item} onClick={() => setWork(item)}>
              <ListItem key={item} text={item} onClick={() => showNotification()}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Button onClick={() => document.getElementById("contacts")?.scrollIntoView()}>Contacts</Button>
        <Right>
          <WebDesign />
          {/* {(() => {
            switch (work) {
              case "Web Design":
                return <WebDesign />;
              case "Development":
                return <Development />;
              case "ProductDesign":
                return <ProductDesign />;
              default:
                return null;
            }
          })()} */}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
