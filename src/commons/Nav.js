// import utils
import React from 'react'
import styled from 'styled-components/macro'
import { useLocation, Link } from 'react-router-dom'

// import images
import Homeicon from '../images/Homeicon22.svg'
import Homeiconactive from '../images/Homeicon22 active.svg'
import Posticon from '../images/Posticon22.svg'
import Posticonactive from '../images/Posticon22active.svg'
import NewPostIcon from '../images/NewPostIcon.svg'
import NewPostIconactive from '../images/NewPostIconactive.svg'
import ProfilIcon from '../images/ProfilIcon.svg'
import ProfilIconactive from '../images/ProfilIconactive.svg'

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <Navigation>
      <NavButton>
        <Link to="/">
          {pathname === '/' ? (
            <img src={Homeiconactive} alt="home" />
          ) : (
            <img src={Homeicon} alt="home" />
          )}
        </Link>
      </NavButton>

      <NavButton>
        <Link to="/pinnwand">
          {pathname === '/pinnwand' ? (
            <img src={Posticonactive} alt="bulletinboard" />
          ) : (
            <img src={Posticon} alt="bulletinboard" />
          )}
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/inserieren">
          {pathname === '/inserieren' ? (
            <img src={NewPostIconactive} alt="newpost" />
          ) : (
            <img src={NewPostIcon} alt="newpost" />
          )}
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/profil">
          {pathname === '/profil' ? (
            <img src={ProfilIconactive} alt="profil" />
          ) : (
            <img src={ProfilIcon} alt="newpost" />
          )}
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
  box-shadow: 0 2px 2px #f0efef;
  z-index: 1;
`

const NavButton = styled.button`
  border: none;
  background: none;

  a {
    outline: none;
  }
`
