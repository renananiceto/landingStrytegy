import React from 'react'
import * as S from './styles'

export default function Header(props) {
  console.log(props)
  const { content } = props
  return (
    <S.Container>
      <S.Wrapper>
        {
          content.map((item, index) => (
            <div key={index} >
              <S.BoxMap>
                <S.ContainerTitle>
                  <S.BigTitle>{item.bitTitle}</S.BigTitle>
                  <S.Title>{item.title}</S.Title>
                  <S.BoxBtn>
                    <S.Btn>{item.brnTible}</S.Btn>
                  </S.BoxBtn>
                </S.ContainerTitle>
                <S.BoxLogo>
                  <S.Logo src={item.url} alt={item.alternativeText} />
                </S.BoxLogo>
              </S.BoxMap>
              <S.ContainerText>
                <S.Text>{item.bitTitleCenter}</S.Text>
                <S.SubText>{item.titleCenter}</S.SubText>
              </S.ContainerText>
            </div>
          ))
        }
      </S.Wrapper>
    </S.Container>
  )
}
