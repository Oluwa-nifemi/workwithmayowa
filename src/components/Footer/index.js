import React from 'react';
import classes from './footer.module.css';
import tw from '../../assets/images/tw.svg';
import ig from '../../assets/images/ig.svg';
import ln from '../../assets/images/ln.svg';
import mail from '../../assets/images/mail.svg';

const smLinks = [
  {
    url: 'mailto:oluwamayowaadeyemi@gmail.com',
    icon: mail,
    name: 'Email'
  },
  {
    url: 'https://www.linkedin.com/in/oluwamayowaadeyemi',
    icon: ln,
    name: 'LinkedIn'
  },
  {
    url: 'https://twitter.com/mayowady',
    icon: tw,
    name: 'Twitter'
  },
  {
    url: 'https://www.instagram.com/mayowady/',
    icon: ig,
    name: 'Instagram'
  },
]

const Footer = () => {
  return (
    <footer className={classes.footer}>
      {
        smLinks.map(({url, icon, name}) => (
          <a
            href={url}
            target='_blank'
            rel='noreferrer'
          >
            <img src={icon} alt={name}/>
          </a>
        ))
      }
    </footer>
  );
};

export default Footer;
