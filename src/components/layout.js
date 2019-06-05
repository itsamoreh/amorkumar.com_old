import React from "react"
import { Link } from "gatsby"
const HeaderLink = props => (
  <li style={{ display: `inline-flex`, margin: `0 0 0 1rem` }}>
    <Link
      to={props.to}
      style={{
        textDecoration: `none`,
        fontFamily: `Francois One`,
        fontSize: `18px`,
        textTransform: `uppercase`,
      }}
    >
      {props.children}
    </Link>
  </li>
)

export default ({ children }) => (
  <div>
    <header
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        margin: `0 auto`,
        maxWidth: 650,
        padding: `1rem 1rem 0 1rem`,
      }}
    >
      <Link to="/" style={{ textDecoration: `none` }}>
        <h1 style={{ fontSize: `18px`, textTransform: `uppercase` }}>
          Amor Kumar
        </h1>
      </Link>
      <ul
        style={{
          display: `flex`,
          justifyContent: `flex-end`,
          listStyle: `none`,
        }}
      >
        <HeaderLink to="/about">About</HeaderLink>
        <HeaderLink to="/contact">Contact</HeaderLink>
      </ul>
    </header>
    <div style={{ margin: `1rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  </div>
)
