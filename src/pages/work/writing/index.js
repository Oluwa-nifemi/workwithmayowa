import React from "react"
import { graphql } from "gatsby"
import WritingDesignLayout from "../../../layout/writing-design-layout"

const sections = [
  {
    title: "Copywriting",
    items: [
      {
        imageId: "digital",
        title: "Digital/Print",
        to: "/work/writing/digital"
      },
      {
        imageId: "radio",
        title: "Radio/Audio",
        to: "/work/writing/radio"
      },
      // {
      //   imageId: "digital",
      //   title: "Video",
      //   to: "/work/writing/video"
      // }
    ]
  },
  {
    title: "UX Writing",
    items: [
      {
        imageId: "handshake",
        title: "Case Study: Handshake App",
        to: "/work/writing/ux/handshake"
      },
      {
        imageId: "daily",
        title: "Daily UX Writing Challenge",
        to: "/work/writing/ux/daily"
      },
      {
        imageId: "suane",
        title: "Suane Digitals Website",
        to: "/work/writing/ux/suane"
      }
    ]
  },
  {
    title: "Poetry",
    items: [
      {
        imageId: "free-verse",
        title: "Free Verse",
        to: "/work/writing/free-verse"
      },
      {
        imageId: "spoken-word",
        title: "Spoken Word",
        to: "/work/writing/spoken-word"
      }
    ]
  }
]

const Writing = ({ data }) => {
  return (
    <WritingDesignLayout
      data={data}
      sections={sections}
      pageTitle='Writing: Copywriting, UX Writing'
      pageHeader='Writing'
      description='Words are special to me as copywriter and UX Writer. From delighting customers and eliciting emotions about brands, to guiding people’s seamless interactions within and outside a product.'
    />
  )
}

export default Writing

export const query = graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "writing"}}){
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
