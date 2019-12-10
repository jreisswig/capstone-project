import React from 'react'
import ArrowBack from './images/arrow_back_ios.svg'
import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Header() {
  let pagetitle
  let icon

  const { pathname } = useLocation()

  function checkPath(currentpath) {
    return pathname.includes(currentpath)
  }

  switch (true) {
    case checkPath('/pinnwand'):
      pagetitle = 'Pinnwand'

      break
    case checkPath('/inserieren'):
      pagetitle = 'Inserieren'

      break
    case checkPath('/profil'):
      pagetitle = 'Profil'

      break
    case checkPath('/angebotdetail'):
      pagetitle = 'Angebot'
      icon = (
        <Link to="/">
          <img src={ArrowBack} alt="ArrowBack" height="20px" width="20px"></img>
        </Link>
      )
      break

    case checkPath('/settings'):
      pagetitle = 'settings'

      break
    case checkPath('/'):
      pagetitle = 'HalloDorf'

      break
    default:
      pagetitle = ''
  }

  return (
    <HeaderStyled>
      <Left>{icon}</Left>
      <HeaderTitle>{pagetitle}</HeaderTitle>
      <Right />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 40px auto 40px;
  background: white;
  box-shadow: 0 2px 2px #f0efef;
  height: 48px;
  z-index: 1;
`
const Left = styled.div`
  margin-left: 26px;
  margin-top: 15px;
`
const HeaderTitle = styled.h1`
  margin: auto;
  font-size: 1.5rem;
`
const Right = styled.div``
