import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import classes from "./about.module.css"
import Img from "gatsby-image"

const About = ({ data }) => {
  return (
    <Layout mainClassName={classes.main} pageTitle='About Mayowa'>
      <Img
        fluid={data.file?.childImageSharp?.fluid}
        alt="Mayowa"
        className={classes.image}
      />
      <p className={classes.text}>
        My full name is Oluwamayowa Adeyemi but everyone just calls me Mayowa. Words have always been very special to me, from using it to tell stories and share my heart as a poet, to using it to delight customers and elicit emotions about brands as a creative copywriter.  Words gained a new meaning to me with UX Writing, I learnt to drop the feelings and attachment to my words as a poet and copywriter. Words became a tool to help guide people by making their interactions within and outside a product as seamless as possible.
      </p>
      <p className={classes.text}>
        Design is my second love, my faithful side chic. My interest in design started from watching my dad work as a graphic designer. I started watching tutorials on YouTube and taking online courses to understand design. My friends were my initial test subjects, I designed flyers and logos for brands they wanted to build. I stumbled upon Design Thinking and this refined how I saw design  and its ability to solve real problems and make people’s lives better.
      </p>
      <p className={classes.text}>
        My understanding of writing and design helps me collaborate effectively in teams whether in advertising or UX. You can view my resume <a
        href="https://drive.google.com/file/d/1mDREzzqL1r64bnpsZeRNzeXiokDQuT6I/view?usp=sharing" target="_blank" rel='noreferrer'>here</a> to see where I’ve worked so far.
      </p>
      <p className={classes.text}>
        Think I’ll make a good fit for your next project?
      </p>
      <a
        href='mailto:oluwamayowaadeyemi@gmail.com'
        target='_blank'
        rel='noreferrer'
        className={classes.talkLink}
      >
        Let's talk
      </a>
    </Layout>
  );
};

export default About;


export const query = graphql`
    {
        file(relativePath:{eq:"potrait-2.jpg"}){
            childImageSharp{
                fluid(quality: 80){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
