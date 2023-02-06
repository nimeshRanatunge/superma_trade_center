import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, YouTube } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap
`
const ListItem = styled.li`
  width: 50%; //2 columns created automatically
  margin-bottom: 10px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
  width: 18%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SUPERMA.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          quis incidunt deleniti fugiat ipsa quas! Et sunt doloribus laudantium.
          Quidem dolorum quaerat minima, culpa quod laborum fuga odit deleniti
          ullam?
        </Desc>
        <SocialContainer>
          <SocialIcon color="#4267B2">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#d62976">
            <Instagram />
          </SocialIcon>
          <SocialIcon color=" #c4302b">
            <YouTube />
          </SocialIcon>
          <SocialIcon color=" #1DA1F2">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight: "10px"}}/>56/A, Main Road, Ganemulla.</ContactItem>
        <ContactItem><Phone style={{marginRight: "10px"}}/>033 2260 144</ContactItem>
        <ContactItem><MailOutline style={{marginRight: "10px"}}/>contact@superma.lkk</ContactItem>
        <Payment src={require("../assets/we_accept.png")}/>
      </Right>
    </Container>
  );
};

export default Footer;