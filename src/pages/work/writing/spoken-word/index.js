import React, { useMemo } from "react"
import Layout from "../../../../components/Layout"
import classes from "../gridLayout.module.css"
import Card from "../../../../components/Card"
import BackLink from "../../../../components/BackLink"
import ReactPlayer from "react-player"


const items = [
  {
    title: 'Conflict',
    embedLink: 'https://youtu.be/k2QfNS-aTEU'
  },
  {
    title: 'It’s Time to Wake Up',
    embedLink: 'https://youtu.be/bEM8scWowa8'
  },
  {
    title: 'I (Eye)',
    embedLink: 'https://youtu.be/y7JE8Js8QsE'
  },
  {
    title: 'Picture Perfect Girl',
    embedLink: 'https://youtu.be/IYVf93PVwpA'
  },
]

const FreeVerse = () => {
  return (
    <Layout
      pageTitle='Free Verse'
      mainClassName={classes.layout}
    >
      <div className={classes.items}>
        {
          items.map(({title, embedLink}) => (
            <div className={classes.item}>
              <ReactPlayer
                url={embedLink}
                light
              />
              <div>
                <h3 className={classes.itemName}>
                  {title}
                </h3>
              </div>
            </div>
          ))
        }
      </div>
      <BackLink to='/work/writing'>
        Back To Writing
      </BackLink>
    </Layout>
  )
}

export default FreeVerse
