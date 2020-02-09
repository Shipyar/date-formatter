import styled from 'styled-components'

const StyledFooter = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
  text-align: center;
  transition: all 0.25s linear;
  bottom: 0;
  color: #000;
`

const StyledCopyright = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.2rem;
`

const StyledCiting = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.2rem;
  & span {
    cursor: pointer;
  }
`

export { StyledFooter, StyledCopyright, StyledCiting }