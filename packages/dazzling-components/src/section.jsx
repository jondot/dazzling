import React from 'react'
import styled from 'styled-components'

const Section = ({ title, children }) => (
  <SectionContainer>
    {title && <h1>{title}</h1>}
    {children}
  </SectionContainer>
)

const SectionContainer = styled.section`
  border-bottom: 1px solid #f0f0f0;
  padding: 4rem 0;
  padding-bottom: 6rem;
  text-align: center;
`

export default Section
