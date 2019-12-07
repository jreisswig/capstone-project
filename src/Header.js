import React from 'react'
import ArrowBack from './images/arrow_back_ios.svg'
import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Header() {
  let pagetitle
  let icon

  const { pathname } = useLocation()

  switch (pathname) {
    case '/':
      pagetitle = 'HalloDorf'

      break
    case '/pinnwand':
      pagetitle = 'Pinnwand'

      break
    case '/inserieren':
      pagetitle = 'Inserieren'

      break
    case '/profil':
      pagetitle = 'Profil'

      break
    case '/angebotdetail':
      pagetitle = 'Angebot'
      icon = (
        <Link to="/">
          <img src={ArrowBack} alt="ArrowBack" height="20px" width="20px"></img>
        </Link>
      )

      break

    case '/settings':
      pagetitle = 'settings'

      break
    default:
      pagetitle = ''
  }

  return (
    <HeaderStyled>
      <Left>{icon}</Left>
      <HeaderTitle>{pagetitle}</HeaderTitle>
      <Right></Right>
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
