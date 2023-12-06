import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:chakribala02@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
          <a className={styles.anc} href="mailto:chakribala02@gmail.com">
            myemail@email.com
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/chakrinya-balabadra-94814a211/"
            target="_blank"
          >
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>
          <a
            className={styles.anc}
            href="https://www.linkedin.com/in/chakrinya-balabadra-94814a211/"
            target="_blank"
          >
            linkedin.com/myname
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.github.com/chakrinya009" target="_blank">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
          </a>
          <a
            className={styles.anc}
            href="https://www.github.com/chakrinya009"
            target="_blank"
          >
            github.com/myname
          </a>
        </li>
      </ul>
    </footer>
  );
};
