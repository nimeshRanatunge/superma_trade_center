import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search,ShoppingCartOutlined } from "@material-ui/icons";
import {mobile} from '../responsive'

const Contain = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  //to center I need to add display flex also
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  align-items: center;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  align-items: center;
  align-content: center;
  display: flex;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const navbar = () => {
  return (
    <Contain>
      <Wrapper>
        <Left>
          <Language>ENg</Language>
          <SearchContainer>
            <Input />
            <Search style={{color: "gray", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SENA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Contain>
  );
};

export default navbar;
