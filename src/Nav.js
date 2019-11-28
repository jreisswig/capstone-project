import React from 'react'
import Homeicon from './images/Homeicon22.svg'
import Posticon from './images/Posticon22.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Nav() {
  return (
    <Navigation>
      <NavButton>
        <Link to="/">
          <img src={Homeicon} alt="" />
        </Link>
      </NavButton>

      <NavButton>
        <Link to="/bulletinboard">
          <img src={Posticon} alt="" />
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/newpost">
          <img src={Posticon} alt="" />
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/profil">
          <img src={Homeicon} alt="" />
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/mehr">
          <img src={Homeicon} alt="" />
        </Link>
      </NavButton>
    </Navigation>
  )
}

const Navigation = styled.nav`
  display: grid;
  grid-auto-flow: column;
  background-color: white;
  border-top: 0.8px solid #979797;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  z-index: 1;
`

const NavButton = styled.button`
  border: none;
  background: none;
`
