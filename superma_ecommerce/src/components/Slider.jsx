import React from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(0vw);
  //align-items: center;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props=>props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
  const handleClick = (direction)=>{}
  return (
    <Container>
      <Arrow direction="left" onClick={()=>{handleClick("left")}}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="white">
          <ImgContainer>
            <Image
              src={require("../assets/favpng_fashion-model-ready-to-wear-clothing-dress.png")}
            />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="red">
          <ImgContainer>
            <Image
              src={require("../assets/favpng_fashion-model-ready-to-wear-clothing-dress.png")}
            />
          </ImgContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="yellow">
          <ImgContainer>
            <Image
              src={require("../assets/favpng_fashion-model-ready-to-wear-clothing-dress.png")}
            />
          </ImgContainer>
          <InfoContainer>
            <Title>POPULAR SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      dont eget comromise dnt get co
      <Arrow direction="right" onClick={()=>{handleClick("right")}}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
