import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        I specialize in MERN stack development, using MongoDB, Express.js,
        React.js, and Node.js to create powerful web applications. With a knack
        for problem-solving cultivated through competitive programming, I craft
        user-friendly digital solutions. Continuously learning and adapting to
        new technologies
      </div>
    </section>
  );
};
