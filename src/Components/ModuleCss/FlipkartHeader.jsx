import React from 'react'
import style from "./Flipkart.module.css"

const FlipkartHeader = () => {
  return (
    <header id={style.header}>
        <article id={style.logo}></article>
        <article id={style.rightNav}></article>
    </header>
  )
}

export default FlipkartHeader