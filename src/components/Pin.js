import React from 'react'
import styled from 'styled-components/macro'
import pin from '../images/Pin.png'

export default function Pin() {
  return (
    <PinStyle>
      <img src={pin} alt="Pin" height="17px" width="17px" />
    </PinStyle>
  )
}

const PinStyle = styled.div`
  position: absolute;
  top: -3px;
  right: 50%;
`
