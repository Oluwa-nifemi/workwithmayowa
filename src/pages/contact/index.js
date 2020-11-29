import React from "react"
import Layout from "../../components/Layout"
import classes from "./contact.module.css"
import { classNames } from "../../util/functions"

const Contact = () => {
  return (
    <Layout
      pageTitle='Contact'
      mainClassName={classes.main}
    >
      <h3 className={classes.header}>
        Say Hello
      </h3>
      <h5 className={classes.description}>
        You can reach me on{' '}
        <a href="https://www.linkedin.com/in/oluwamayowaadeyemi" target='_blank' rel='noreferrer'>LinkedIn</a>,{' '}
        <a href="https://twitter.com/mayowady" target='_blank' rel='noreferrer'>Twitter</a>  &{' '}
        <a href="https://www.instagram.com/mayowady/" target='_blank' rel='noreferrer'>Instagram</a>{' '}
        {' '}or send a mail to{' '}
        <a href="mailto:oluwamayowaadeyemi@gmail.com" target='_blank' rel='noreferrer'>hello@workwithmayowa.com.</a>{' '}
        You can also fill the form below and I’ll get in touch with you.
      </h5>
      <form className={classes.form}>
        <div className={classes.formRow}>
          <label htmlFor="name" className={classes.formLabel}>
            Your Name
          </label>
          <input type="text" id="name" className={classes.formInput}/>
        </div>
        <div className={classes.formRow}>
          <label htmlFor="email" className={classes.formLabel}>
            Email Address
          </label>
          <input type="text" id="email" className={classes.formInput}/>
        </div>
        <div className={classes.formRow}>
          <label htmlFor="message" className={classes.formLabel}>
            Message
          </label>
          <textarea
            id="message"
            className={
              classNames(
                classes.formInput,
                classes.formTextArea
              )
            }
          />
        </div>
        <button className={classes.formSendButton}>
          Send Message
        </button>
        <p className={classes.formShy}>
          Don’t be shy, I’m waiting to hear from you!
        </p>
      </form>
    </Layout>
  )
}


export default Contact
