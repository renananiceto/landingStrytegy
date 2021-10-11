import React from 'react'
import * as S from './styles'

export default function Menu({
  menuItems,
  logo,
  alternativeAlt
}) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxLogo>
          <S.Logo src={logo} alt={alternativeAlt} />
        </S.BoxLogo>
        <S.BoxMenu>
          {
            menuItems.map((item) => (
                <S.Paragraph>{item}</S.Paragraph>
            ))
          }
        </S.BoxMenu>
      </S.Wrapper>
    </S.Container>
  )
}
