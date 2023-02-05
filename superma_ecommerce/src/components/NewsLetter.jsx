import { SendOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
    height: 60vh;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
font-style: 24px;
font-weight: 300;
margin-bottom: 20px;
    
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`
const Send = styled.div`
    
`

const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
      <Description>Get timely updates from your favourite products</Description>
      <InputContainer>
        <Input placeholder="Your Email"/>
        <Button>
          <SendOutlined/>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;