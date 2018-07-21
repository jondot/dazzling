import React from 'react'
import styled from 'styled-components'
import P from 'prop-types'

const Section = ({ title, children }) => (
  <SectionContainer>
    {title && <h1>{title}</h1>}
    {children}
  </SectionContainer>
)
Section.propTypes = {
  title: P.string,
  children: P.node
}

const SectionContainer = styled.section`
  border-bottom: 1px solid #f0f0f0;
  padding: 4rem 0;
  padding-bottom: 6rem;
  text-align: center;
  font-size: 1.6rem;
`

export default Section
