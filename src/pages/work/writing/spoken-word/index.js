import React from "react"
import Layout from "../../../../components/Layout"
import classes from "../gridLayout.module.css"
import BackLink from "../../../../components/BackLink"
import Card from "../../../../components/Card"


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

const SpokenWord = () => {
  return (
    <Layout
      pageHeader='Spoken Word'
      mainClassName={classes.layout}
    >
      <div className={classes.items}>
        {
          items.map(({title, embedLink}) => (
            <div className={classes.item}>
              <h3 className={classes.itemName}>
                {title}
              </h3>
              <Card
                videoUrl={embedLink}
              />
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

export default SpokenWord
