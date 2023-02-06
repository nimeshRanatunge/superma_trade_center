import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { mobile } from "../responsive";

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 55vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
    
`
const FilterSizeOption = styled.option`
    
`
const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        background-color: whitesmoke;
    }
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0px 5px;
`



const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src={require("../assets/testItem/pngwing.com (1).png")}/>
            </ImgContainer>
            <InfoContainer>
                <Title>Super Shoee</Title>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio rem adipisci necessitatibus repel
                    lat! Tempora dolor, natus et, saepe ratione neque quasi qui dolorem architecto modi magnam dolorum, cumque molestias sapiente.</Desc>
                <Price>LKR 200</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkBlue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
    </Container>
  )
}

export default Product