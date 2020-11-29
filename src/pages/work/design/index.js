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
        to: "/logos/melange"
      },
      {
        imageId: "tinkerman",
        title: "Tinkerman",
        to: "/logos/tinkerman"
      },
      {
        imageId: "chuko",
        title: "Chuko’s Food & Spices",
        to: "/logos/chuko"
      },
    ]
  },
  {
    title: "Others",
    items: [
      {
        imageId: "flyers",
        title: "Digital Flyers",
        to: "/others/flyers"
      },
      {
        imageId: "print",
        title: "Print",
        to: "/others/print"
      },
      {
        imageId: "daily-ui",
        title: "Daily UI Challenge",
        to: "/others/daily-ui"
      }
    ]
  }
]

const Writing = ({ data }) => {
  return (
    <WritingDesignLayout
      data={data}
      sections={sections}
      pageTitle='Design'
    />
  )
}

export default Writing

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
