import styled from "styled-components";
import Contacts from "./components/Contacts.jsx";
import Hero from "./components/Hero.jsx";
import Who from "./components/Who.jsx";
import Works from "./components/Works.jsx";

const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  color: white;
  background: url("./img/bg.jpeg");
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  };
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who id={"who"} />
      <Works />
      <Contacts />
    </Container>
  );
}

export default App;
