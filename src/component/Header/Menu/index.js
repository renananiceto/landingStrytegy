import React from 'react'
import * as S from './styles'

export default function Menu(props) {
  const {logo, menuNav} = props
  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxLogo>
          <S.Logo src={logo[0].url} alt={logo[0].updatedAt} />
        </S.BoxLogo>
        <S.BoxMenu>
          {
            menuNav.map((item,index) => (
                <S.Paragraph key={index}>{item}</S.Paragraph>
            ))
          }
        </S.BoxMenu>
      </S.Wrapper>
    </S.Container>
  )
}
