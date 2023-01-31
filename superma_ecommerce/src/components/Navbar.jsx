import React from "react";
import styled from "styled-components";

const Contain = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const navbar = () => {
  return (
    <Contain>
      <Wrapper>
        <Left><Language>EN</Language></Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Contain>
  );
};

export default navbar;
