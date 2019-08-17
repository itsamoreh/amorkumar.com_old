import React from "react"
import styles from "./about.module.css"

export default () => (
  <div className={styles.page}>
    <div className={styles.pageInner}>
      <h1>
        Hello, I'm <span className={styles.red}>Amor</span> - yes as in love! A
        front-end developer currently using the latest tech to make web apps and
        sites for awesome companies.
      </h1>
      <a href="mailto:contact@amorkumar.com">
        <h2>contact@amorkumar.com</h2>
      </a>
      <br />
      <a href="https://linkedin.com/in/amorkumar">
        <h2>/in/amorkumar</h2>
      </a>
    </div>
  </div>
)
