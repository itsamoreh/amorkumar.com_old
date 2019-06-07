import React from "react"
import { Link } from "gatsby"
import "./header.scss"
import "./speech-bubble.css"

const HeaderLink = props => (
  <li class="header-link">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <header>
    <Link class="home" to="/">
      <h1>
        Amor
        <div class="speech-bubble">
          <span class="heart">♡&nbsp;</span>
          Vue.js
        </div>
      </h1>
    </Link>
    <nav>
      <ul>
        <HeaderLink to="/blog">Blog</HeaderLink>
        <HeaderLink to="/contact">Contact</HeaderLink>
      </ul>
    </nav>
  </header>
)
