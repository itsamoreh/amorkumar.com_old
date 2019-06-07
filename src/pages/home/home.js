import React from "react"
import Layout from "../../components/layout"

const pageHeadingStyle = {
  // fontSize: `1.5em`,
}

export default () => (
  <Layout>
    <div
      style={{
        marginBottom: `4rem`,
        height: `20rem`,
        backgroundImage: `url(./components/header/polka-dots.svg)`,
      }}
    >
      <h1 style={pageHeadingStyle}>Creative Web Developer</h1>
      <p style={{ marginBottom: `0` }}>
        Amet nisi proident ullamco ut magna consequat incididunt. Deserunt
        tempor tempor enim ullamco. Ex laborum et aute aute minim veniam officia
        ullamco consequat. In ex ad commodo esse amet veniam officia est non
        ipsum ut ullamco velit.
      </p>
    </div>
    <h2>Skills</h2>

    <h3>Expertise</h3>
    <p>
      Web Applications, Websites, Information Architecture, Accessibility and
      SEO
    </p>

    <h3>Languages</h3>
    <p>JavaScript (ES6), HTML, CSS, and PHP</p>

    <h3>Tools</h3>
    <p>Vue.js, SCSS, TypeScript, GIT and APIs</p>
  </Layout>
)
