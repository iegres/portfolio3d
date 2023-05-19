import React from "react";
import styled from "styled-components";
import { showNotification } from "../notification.js";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
	justify-content: space-between;
	align-items: center;
  padding: 10px, 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
	align-items: center;
	gap: 50px;
`;

const Logo = styled.img`
  height: 60px;
  padding: 10px;
  filter: hue-rotate(100deg);
  -webkit-filter: hue-rotate(100deg);
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
	align-items: center;
	gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #c0506a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// const A = styled.a`
//   color: inherit;
//   text-decoration: inherit;
// `;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png"/>
					<List>
						<ListItem onClick={() => document.getElementById("home")?.scrollIntoView()}>Home</ListItem>
						<ListItem onClick={() => document.getElementById("who")?.scrollIntoView()}>Studio</ListItem>
						<ListItem onClick={() => document.getElementById("works")?.scrollIntoView()}>Works</ListItem>
						<ListItem onClick={() => document.getElementById("contacts")?.scrollIntoView()}>Contacts</ListItem>
					</List>
        </Links>
        <Icons>
					<Icon src="./img/search.png" onClick={() => showNotification()} />
					<Button onClick={() => document.getElementById("contacts")?.scrollIntoView()}>Hire Now</Button>
				</Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
