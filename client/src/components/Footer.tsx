import { ReactElement } from "react";

import classes from "@/styles/Footer.module.css";

export default function Footer(): ReactElement {
  return (
    <footer className={ classes.footer }>
      <a href="" className={ classes.link }>Вопросы-ответы</a>
      <a href="/about" className={ classes.link }>О нас</a>
    </footer>
  )
}