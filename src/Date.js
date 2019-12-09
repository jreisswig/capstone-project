import React from 'react'
import styled from 'styled-components/macro'

export default function Date({ date }) {
  console.log(date)
  return <DateAndTime datetime={date}>{date}</DateAndTime>
}

const DateAndTime = styled.time`
  position: absolute;
  top: 13px;
  right: 13px;
  font-size: 0.9rem;
`
