import React from "react"
import Menu from "../component/Header/Menu"
import { graphql } from "gatsby"

export const query = graphql`

{
  alldata{
    headers {
      logo{
        id
        url
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
      <Menu
      menuItems={data.alldata.headers[0].menuNav}
      />
    </main>
  )
}

export default IndexPage
