import React from 'react'
import BrandedLink from '../branded-link'
import styled from 'styled-components'

const FeatureSection = ({
  image,
  imageStyle,
  imageToTheRight,
  children,
  contentStyle,
  style,
  contentFlex
}) => {
  const img = (
    <Image contentFlex={contentFlex}>
      <img src={image} style={imageStyle} />
    </Image>
  )
  return (
    <Container style={style}>
      {!imageToTheRight && img}
      <Content style={contentStyle} contentFlex={contentFlex}>
        {children}
      </Content>
      {imageToTheRight && img}
    </Container>
  )
}

FeatureSection.Feature = ({ title, children, link }) => (
  <div>
    <h2>{title}</h2>
    <p>{children}</p>
    <BrandedLink href={link.to}>{link.name}</BrandedLink>
  </div>
)

const Image = styled.div`
  display: flex;
  flex: ${({ contentFlex = 0.7 }) => 1 - contentFlex};
  justify-content: center;
`
const Content = styled.div`
  flex: ${({ contentFlex = 0.7 }) => contentFlex};
`
const Container = styled.div`
  display: flex;
`

export default FeatureSection
