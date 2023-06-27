import { ReactElement } from "react";

import classes from "@/styles/CommonFilmBlock.module.css"

export default function CommonFilmBlock({ heading, value }: { heading: string, value: string }): ReactElement {
  return (
    <div className={ classes.commonBlock }>
      <span className={ classes.commonHeading }>{ heading }</span>
      <span className={ classes.commonValue }>{ value }</span>
    </div>
  )
}