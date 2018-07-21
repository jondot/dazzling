import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import P from 'prop-types'

const Feature = styled.div`
  flex: 0.333333;
  text-align: center;
  padding: 1rem;
`
const TripletContainer = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1100px;
  font-size: 1.6rem;
  h2 {
  }
  @media screen and (max-width: 600px) {
    display: block;
  }
`

const Subtitle = styled.h2`
  color: ${({ theme: { brandSecondary } }) => brandSecondary};
  font-weight: 300;
  margin: 2rem 0;
`
const maybeLink = (link, Content) => {
  if (link) {
    if (link.startsWith('http')) {
      return (
        <a href={link}>
          <Content />
        </a>
      )
    }
    return (
      <Link to={link}>
        <Content />
      </Link>
    )
  }
  return <Content />
}

const Triplet = ({ features }) => (
  <TripletContainer>
    {features.map(({ image, title, content, link, topTitle, width }, idx) => (
      <Feature key={idx}>
        {maybeLink(link, () => (
          <div>
            {topTitle && <Subtitle>{title}</Subtitle>}
            <img src={image} width={width || 100} />
            {!topTitle && <Subtitle>{title}</Subtitle>}
            {content && <p>{content}</p>}
          </div>
        ))}
      </Feature>
    ))}
  </TripletContainer>
)

Triplet.propTypes = {
  features: P.arrayOf(P.object)
}

export default Triplet
