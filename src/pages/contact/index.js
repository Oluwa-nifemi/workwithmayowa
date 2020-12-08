import React, { useMemo, useState } from "react"
import Layout from "../../components/Layout"
import classes from "./contact.module.css"
import { classNames } from "../../util/functions"
import axios from "axios"

const mappings = {
  name: 'Name',
  email: 'Email Address',
  message: 'Message'
}

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isLoading, setIsLoading] = useState(false)

  const onChange = (key) => ({ target }) => {
    setFormValues(prevState => ({
      ...prevState,
      [key]: target.value
    }))
  }

  const onSubmit = async () => {
    setIsLoading(true)

    const data = new URLSearchParams()

    Object.entries(formValues).forEach(([key, value]) => {
      data.append(mappings[key], value)
    })

    data.append('form-name', 'contact')

    if(process.env.NODE_ENV === 'production'){
      await axios.post(
        '/',
        data.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )

      setIsLoading(false)
    }else{
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
  }

  const buttonIsDisabled = useMemo(
    () => {
      return isLoading || Object.values(formValues).some(value => !value)
    },
    [isLoading, formValues]
  )
  return (
    <Layout
      pageTitle='Contact'
      mainClassName={classes.main}
    >
      <h3 className={classes.header}>
        Say Hello
      </h3>
      <h5 className={classes.description}>
        You can reach me on{" "}
        <a href="https://www.linkedin.com/in/oluwamayowaadeyemi" target='_blank' rel='noreferrer'>LinkedIn</a>,{" "}
        <a href="https://twitter.com/mayowady" target='_blank' rel='noreferrer'>Twitter</a> &{" "}
        <a href="https://www.instagram.com/mayowady/" target='_blank' rel='noreferrer'>Instagram</a>{" "}
        {" "}or send a mail to{" "}
        <a
          href="mailto:oluwamayowaadeyemi@gmail.com" target='_blank' rel='noreferrer'
        >hello@workwithmayowa.com.</a>{" "}
        You can also fill the form below and I’ll get in touch with you.
      </h5>
      <form
        className={classes.form}
        data-netlify="true"
      >
        <div className={classes.formRow}>
          <label htmlFor="name" className={classes.formLabel}>
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className={classes.formInput}
            onChange={onChange('name')}
            value={formValues.name}
          />
        </div>
        <div className={classes.formRow}>
          <label htmlFor="email" className={classes.formLabel}>
            Email Address
          </label>
          <input
            type="text"
            id="email"
            className={classes.formInput}
            onChange={onChange('email')}
            value={formValues.email}
          />
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
            onChange={onChange('message')}
            value={formValues.message}
          />
        </div>
        <button
          className={
            classNames(
              classes.formSendButton,
              isLoading && classes.formSendButtonIsLoading
            )
          }
          disabled={buttonIsDisabled}
          onClick={onSubmit}
        >
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
