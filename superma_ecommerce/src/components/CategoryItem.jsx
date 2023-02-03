import React from 'react'
import styled from 'styled-components'
const Container = styled.div``

export const CategoryItem = ({item}) => {
  return (
    <Container>
        {item.title}
    </Container>
  )
}
