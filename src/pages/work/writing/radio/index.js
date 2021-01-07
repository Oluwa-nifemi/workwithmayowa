import React from "react"
import Layout from "../../../../components/Layout"
import classes from "./radio.module.css"
import BackLink from "../../../../components/BackLink"

const items = [
  {
    fileName: "verve.mpeg",
    name: "Verve Life 3.0",
    description: "Verve Life is a fitness event organized by Verve. The theme for Verve Life 3.0 was “Go Hard or Go Home”."
  },
  {
    fileName: "gridcode.mpeg",
    name: "GridCode",
    description: "Gridcodes are easy unique codes that can be generated to digitize your unique address for easy location."
  },
  {
    fileName: "fets.mp3",
    name: "Fetswallet IBEDC",
    description: "Fetswallet, a mobile payment platform, wanted people to know they can now easily pay their Ibadan Electricity Distribution Company (IBEDC) bills from various convenient channels."
  },
  {
    fileName: "mtn.mp3",
    name: "MTN VTU Bonus",
    description: "MTN was introducing a bonus promo for airtime recharge done via Virtual Top-Up."
  }
]

const Radio = () => {
  return (
    <Layout
      pageHeader='Radio/Audio'
      pageTitle='Writing: Radio commercials'
      description='These are some produced radio ad commercials I’ve written for brands as a creative copywriter.'
    >
      <div className={classes.items}>
        {
          items.map(({ name, description, fileName }) => (
            <div className={classes.item}>
              <div>
                <h3 className={classes.itemName}>
                  {name}
                </h3>
                <p className={classes.itemDescription}>
                  {description}
                </p>
              </div>
              <audio
                src={`/audio/${fileName}`}
                controls
                className={classes.itemAudio}
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

export default Radio
