import styled from 'styled-components'

const BrandedLink = styled.a`
  font-size: 1.6rem;
  color: ${({ theme: { brand } }) => brand};
  ${({ go }) => go && "&::after { content: ' →' }"};
`

export default BrandedLink
