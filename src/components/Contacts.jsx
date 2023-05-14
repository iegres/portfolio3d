import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Map from './Map.jsx';
// import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #ebe7e7;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #ebe7e7;
  border: none;
  border-radius: 5px;
  resize: none;
`;

const Button = styled.button`
  padding: 20px;
  background-color: #d93f6b;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

// const D = styled.div`
//   color: red;
// `

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    // emailjs
    //   .sendForm(
    //     "service_id",
    //     "template_id",
    //     ref.current,
    //     "public_key"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setSuccess(true);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       setSuccess(false);
    //     }
    //   );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
          {/* <div style={{color: "red"}}>
            <h1>
              Text
            </h1>
          </div>
          <D>
            <h1>
              Text
            </h1>
          </D>
          <div className='cn'>
            <h1>
              Text
            </h1>
          </div> */}
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
