import styled from 'styled-components'

const Or = styled.div`
  &::before {
    content: '— ';
  }
  &::after {
    content: ' —';
  }
  margin: 0 2rem;
  color: ${({ theme: { brandSecondary } }) => brandSecondary};
  display: inline-block;
  font-family: Georgia, serif;
  font-size: 1.8em;
  font-style: italic;
`
export default Or
