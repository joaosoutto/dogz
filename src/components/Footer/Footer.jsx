import React from 'react';
import styles from './Footer.module.css';
import linkedin from '../../Assets/linkedin.png';
import github from '../../Assets/github.png';
import logo from '../../Assets/logo_robot.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Dogs. Some rights reserved</p>
      <div className={styles.more}>
        <a
          className={styles.link}
          href="https://soutto.herokuapp.com/"
          target="blank"
        >
          <img src={logo} alt="soutto" width="30px" />
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/joaosoutto/"
          target="blank"
        >
          <img src={linkedin} alt="linkedin" width="30px" />
        </a>
        <a
          className={styles.link}
          href="https://github.com/joaosoutto"
          target="blank"
        >
          <img src={github} alt="github" width="30px" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
