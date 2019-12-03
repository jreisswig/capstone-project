import React from 'react'
//import HalloDorfLogo from './images/HalloDorfLogo.png'

import styled from 'styled-components/macro'

export default function Header() {
  return (
    <HeaderStyled>
      {/*  <Image>
        <img src={Wappen} alt="Wappen" height="30px" width="30px" />
      </Image> */}
      <Logo>
        <h1>HalloDorf</h1>
        {/* <img src={HalloDorfLogo} alt="HalloDorfLogo" height="22px" /> */}
      </Logo>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0 2px 2px #f0efef;
  height: 48px;
  z-index: 1;
`
/* const Image = styled.div`
  padding-right: 6px;
` */

const Logo = styled.div``
