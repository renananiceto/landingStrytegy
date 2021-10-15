import React from "react"
import Menu from "../component/Header/Menu"
import Header from "../component/Header"
import { graphql } from "gatsby"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  };
`

export const query = graphql`

{

  alldata{
    contentHeaders{
      content
    }
    headers {
      logo{
        id
        url
        updatedAt
      }
      menuNav
    }
  }
}

`

const IndexPage = ({data}) => {
  return (
    <main>
      <GlobalStyle />
      <Menu
      {...data.alldata.headers[0]}
      />
      <Header 
      {...data.alldata.contentHeaders[0]}
      />
    </main>
  )
}

export default IndexPage
