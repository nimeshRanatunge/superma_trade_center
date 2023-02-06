import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>Super deal!! Free shipping on orders over LKR 10,000</Container>
  )
}

export default Announcement