import React from "react"
import style from "./layout.module.css"

export default ({ children }) => (
  <div className={style.app}>
    <main>{children}</main>
  </div>
)
