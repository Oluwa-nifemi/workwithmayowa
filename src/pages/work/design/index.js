import React from "react"
import { graphql } from "gatsby"
import WritingDesignLayout from "../../../layout/writing-design-layout"

const sections = [
  {
    title: "Logos",
    items: [
      {
        imageId: "melange",
        title: "Melange",
        to: "/work/design/logos/melange"
      },
      {
        imageId: "tinkerman",
        title: "Tinkerman",
        to: "/work/design/logos/tinkerman"
      },
      {
        imageId: "chuko",
        title: "Chuko’s Food & Spices",
        to: "/work/design/logos/chuko"
      },
    ]
  },
  {
    title: "Others",
    items: [
      {
        imageId: "flyers",
        title: "Digital Flyers",
        to: "/work/design/others/flyers"
      },
      {
        imageId: "print",
        title: "Print",
        to: "/work/design/others/print"
      },
      {
        imageId: "daily-ui",
        title: "Daily UI Challenge",
        to: "/work/design/others/daily-ui"
      }
    ]
  }
]

const Design = ({ data }) => {
  return (
    <WritingDesignLayout
      data={data}
      sections={sections}
      pageTitle='Design'
    />
  )
}

export default Design

export const query = graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "digital"}}){
            nodes{
                childImageSharp{
                    fluid(quality: 90){
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
                name
            }
        }
    }
`
