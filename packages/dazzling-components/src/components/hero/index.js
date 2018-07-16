import React from 'react'
import styled from 'styled-components'
import Subtitle from '../subtitle'
import Or from '../or'
import BrandedLink from '../branded-link'
import Button from '../button'

const Hero = ({
  title,
  subTitle,
  logo,
  primaryNavItem,
  secondaryNavItem,
  children,
  logoWidth = 150
}) => (
  <HeroContainer>
    <img src={logo} width={logoWidth} />
    <h1>{title}</h1>
    <Subtitle>{subTitle}</Subtitle>
    {children}
    {primaryNavItem && (
      <Button to={primaryNavItem.to}>{primaryNavItem.primary}</Button>
    )}
    <Or>or</Or>
    <BrandedLink href={secondaryNavItem.href} go>
      {secondaryNavItem.secondary}
    </BrandedLink>
  </HeroContainer>
)

const HeroContainer = styled.div`
  padding: 50px 0;
  & > h1 {
    font-weight: 300;
    font-size: 3.2rem;
    color: ${({ theme: { brand } }) => brand};
    margin: 0;
  }
`

export default Hero
