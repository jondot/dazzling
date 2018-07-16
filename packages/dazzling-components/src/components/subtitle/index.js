import styled from 'styled-components'

const Subtitle = styled.h2`
  color: ${({ theme: { brandSecondary } }) => brandSecondary};
  font-weight: 300;
  margin: 2rem 0;
`

export default Subtitle
