import React from 'react'
import styled from 'styled-components'
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
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
    
`
const Filter = styled.div`
    
`
const FilterTitle = styled.span`
    
`
const FilterColor = styled.div`
    
`
const FilterSize = styled.select`
    
`
const FilterSizeOption = styled.option`
    
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
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </FilterContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
    </Container>
  )
}

export default Product