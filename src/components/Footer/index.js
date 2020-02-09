import React, { useContext } from 'react'

import ThemeContext from '../../context/ThemeContext'

import { StyledFooter, StyledCopyright, StyledCiting } from './styles'

const Footer = () => {
  const { toggleIsDark } = useContext(ThemeContext)

  return (
    <StyledFooter>
      <StyledCopyright>
        © {new Date().getFullYear()} Oliver Abraham
      </StyledCopyright>
      <StyledCiting>
        <span style={{textDecoration: 'underline', cursor: 'pointer'}} role="button" onClick={toggleIsDark}>Enable Dark Mode.</span>
      </StyledCiting>
    </StyledFooter>
  )
}

export default Footer