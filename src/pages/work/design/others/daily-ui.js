import React, { useMemo } from "react"
import ArticleLayout from "../../../../components/Article/articleLayout"
import { ArticleTextSmall } from "../../../../components/Article/articleText"
import ArticleHeader from "../../../../components/Article/articleHeader"
import Carousel from "../../../../components/Carousel"
import gif15 from "../../../../assets/images/digital/daily-ui/15_16.gif"
import gif22 from "../../../../assets/images/digital/daily-ui/22.gif"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import classes from "./others.module.css"
import { classNames } from "../../../../util/functions"
import ArticleCarouselItem from "../../../../components/Article/articleCarouselItem"

const days = [
  {
    key: 1,
    title: "Day 1",
    description: "Create a sign up page, modal, form, or app screen related to signing up for something. It could be for a volunteer event, contest registration, a giveaway, or anything you can image. I decided to design a signup page for a fashion website.",
    carousel: true,
    count: 2
  },
  {
    key: 2,
    title: "Day 2",
    description: "Design a credit card checkout form or page. The checkout design I did is for booking a movie ticket on a cinema website.",
    carousel: true,
    count: 3
  },
  {
    key: 3,
    title: "Day 3",
    description: "Design a landing page. I designed two landing page options for a photography portfolio website. ",
    carousel: true,
    count: 2
  },
  {
    key: 4,
    title: "Day 4",
    description: "Design a calculator. I designed 2 types of calculators; a basic one for a smart watch and a currency converter calculator.",
    carousel: true,
    count: 2,
    textWidth: true
  },
  {
    key: 5,
    title: "Day 5",
    description: "Design an app icon. I designed a simple icon for a podcast app."
  },
  {
    key: 6,
    title: "Day 6",
    description: "Design a user profile and be mindful of the most important data, names, imagery, placement, etc. I designed a mock user profile for a dating app."
  },
  {
    key: 7,
    title: "Day 7",
    description: "Design settings for something. I designed a dark mode settings for an app."
  },
  {
    key: 8,
    title: "Day 8",
    description: "Design a 404 page. Landing on an unavailable page can be annoying so I did two 404 pages that would help the user easily navigate back or find what they need.",
    carousel: true,
    count: 2
  },
  {
    key: 9,
    title: "Day 9",
    description: "Design a music player considering the controls, placements, imagery such as the artist or album cover, etc.",
    carousel: true,
    count: 4
  },
  {
    key: 10,
    title: "Day 10",
    description: "Design a social share button/icon and be mindful of the size, imagery, placement, and purpose for sharing."
  },
  {
    key: 11,
    title: "Day 11",
    description: "Design a Flash Message with both the outcome for an error and success. I played around with this challenge and used a popular meme and joke.",
    textWidth: true
  },
  {
    key: 12,
    title: "Day 12",
    description: "Design an e-commerce shop.",
    carousel: true,
    count: 2
  },
  {
    key: 13,
    title: "Day 13",
    description: "Design a Direct Messaging app, profile, or chatbox. I designed a chatbox of a learning platform for kids."
  },
  {
    key: 14,
    title: "Day 14",
    description: "Design a Countdown Timer. I designed a countdown timer for a pregnancy app. I once read something online that compared babies in the womb to fruits to show their size and I thought it was cute so I recreated it for this countdown.",
    textWidth: true
  },
  {
    key: 15,
    title: "Day 15/16",
    description: "I combined the challenges for the 2 days into one. Design an On/Off switch. Design a pop-up overlay. Have you ever wished you could switch on or off your feelings and emotions at any point? That’s what inspired this design.",
    textWidth: true,
    gif: gif15
  },
  {
    key: 17,
    title: "Day 17",
    description: "Design an Email Receipt.",
    textWidth: true
  },
  {
    key: 18,
    title: "Day 18",
    description: "Design an analytics chart.",
    textWidth: true
  },
  {
    key: 19,
    title: "Day 19",
    description: "Design a leaderboard.",
    textWidth: true
  },
  {
    key: 20,
    title: "Day 20",
    description: "Design a location tracker.",
    textWidth: true
  },
  {
    key: 21,
    title: "Day 21",
    description: "Design a home monitoring dashboard."
  },
  {
    key: 22,
    title: "Day 22",
    description: "Design something search related.",
    textWidth: true,
    gif: gif22
  },
  {
    key: 23,
    title: "Day 23",
    description: "Design something onboarding related. I designed onboarding screens for a goal setting app",
    textWidth: true
  },
  {
    key: 24,
    title: "Day 24",
    description: "Design a boarding pass.",
    textWidth: true
  }
]

const renderRowImages = ({ textWidth, gif, carousel, count, key, name }, images) => {
  if (gif) {
    return (
      <img
        src={gif}
        alt={name}
        className={
          classNames(
            classes.gifImage,
            classes.textWidth
          )
        }
      />
    )
  } else if (carousel) {
    return (
      <Carousel marginBottom={0}>
        {
          Array.from({ length: count }).map((_, idx) => (
            <ArticleCarouselItem
              fluid={images[`${key}.${idx + 1}`]}
              maxWidth={textWidth ? '80%' : undefined}
            />
          ))
        }
      </Carousel>
    )
  }

  return (
    <div
      className={textWidth ? classes.textWidth : classes.fullWidth}
    >
      <Img
        fluid={images[key]}
        alt={name}
      />
    </div>

  )
}

const DailyUi = ({ data }) => {
  const fluidImages = useMemo(() => {
    const nodes = data.allFile.nodes

    return nodes.reduce((images, image) => {
      return {
        ...images,
        [image.name]: image.childImageSharp?.fluid
      }
    }, {})
  }, [data])

  return (
    <ArticleLayout
      pageContext={{
        frontmatter: {
          type: "Design",
          title: "Daily UI Challenge",
          marginTop: 50
        }
      }}
    >
      <ArticleTextSmall>
        I signed up for the Daily UI Challenge and got mail prompts to design user interface elements for web and
        mobile. I did 24 of them and enjoyed working on it.
      </ArticleTextSmall>
      <div className={classes.itemsWrapper}>
      {
        days.map((day, index) => (
          <div
            className={classes.item}
            key={`Day-${day.key}`}
          >
            <ArticleHeader>
              {day.title}
            </ArticleHeader>
            <ArticleTextSmall>
              {day.description}
            </ArticleTextSmall>
            {renderRowImages({ ...day, name: day.title, index: index + 1 }, fluidImages)}
          </div>
        ))
      }
      </div>
    </ArticleLayout>
  )
}

export default DailyUi

export const query = graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "digital/daily-ui"}}){
            nodes{
                childImageSharp{
                    fluid(quality: 90, maxWidth: 3000){
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
                name
            }
        }
    }
`
