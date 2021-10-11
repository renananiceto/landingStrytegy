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
  console.log(data)
  return (
    <main>
      <GlobalStyle />
      <Menu
      alternativeAlt={data.alldata.headers[0].logo[0].updatedAt}
      logo={data.alldata.headers[0].logo[0].url}
      menuItems={data.alldata.headers[0].menuNav}
      />
      <Header />
    </main>
  )
}

export default IndexPage
