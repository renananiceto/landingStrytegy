import React from 'react'
import * as S from './styles'

export default function Menu({
  menuItems
}) {
  return (
    <S.Container>
      {
        menuItems.map((item) =>(
          <div>
            {console.log(item)}
            <p>{item}</p>
          </div>
        ))
      }
    </S.Container>
  )
}
