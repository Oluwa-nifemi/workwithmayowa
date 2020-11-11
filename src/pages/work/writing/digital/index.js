import React, { useMemo } from "react"
import Layout from "../../../../components/Layout"
import { graphql } from "gatsby"
import classes from './digital.module.css'
import Card from "../../../../components/Card"
import BackLink from "../../../../components/BackLink"

const items = [
  {
    title: 'Royco Children’s Day',
    description: 'Royco is a food seasoning brand that wanted to celebrate the beautiful and creative minds of children.',
    images: [
      'royco-1',
      'royco-2'
    ],
  },
  {
    title: 'Interswitch Easter',
    description: 'Easter is the celebration of the death and resurrection of Jesus Christ, a significant event for Christians believed to have happened over a weekend.',
    images: [
      'easter'
    ],
  },
  {
    title: 'Verve International Women’s Day',
    description: 'In celebration of the 2019 International Women’s Day with theme “Balance for Better”',
    images: [
      'verve'
    ]
  },
  {
    title: 'Interswitch International Women’s Day',
    description: 'In celebration of the 2020 International Women’s Day with theme “Each For Equal”',
    images: [
      'IWD1',
      {
        videoUrl: 'https://youtu.be/UNOoI1pswP8'
      }
    ]
  },
  {
    title: 'Interswitch Recruitment',
    description: 'Interswitch, a FinTech company was hiring for developers so we used lingo that spoke directly to the target audience',
    images: [
      'switch-1',
      'switch-2'
    ]
  }
]

const Digital = ({ data }) => {
  const fluidImages = useMemo(() => {
    const nodes = data.allFile.nodes

    return nodes.reduce((images, image) => {
      return {
        ...images,
        [image.name]: image.childImageSharp.fluid
      }
    }, {})

  }, [data.allFile.nodes])

  return (
    <Layout
      pageTitle='Digital/Print'
      mainClassName={classes.layout}
    >
      <div className={classes.items}>
        {
          items.map(({title, description, images}) => (
            <div className={classes.item}>
              <div className={classes.itemImages}>
                {
                  images.map(image => (
                    <Card
                      fluid={fluidImages[image]}
                      heightUnset
                      noBorderRadius
                      videoUrl={image.videoUrl}
                    />
                  ))
                }
              </div>
              <div>
                <h3 className={classes.itemName}>
                  {title}
                </h3>
                <p className={classes.itemDescription}>
                  {description}
                </p>
              </div>
            </div>
          ))
        }
      </div>
      <div className={classes.backLinkWrapper}>
        <BackLink to='/work/writing'>
          Back To Writing
        </BackLink>
      </div>
    </Layout>
  )
}

export default Digital

export const query = graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "writing/digital"}}){
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
