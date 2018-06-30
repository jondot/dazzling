import styled from 'styled-components'

const BrandedLink = styled.a`
  color: ${({ theme: { brand } }) => brand};
  ${({ go }) => go && "&::after { content: ' →' }"};
`

export default BrandedLink
