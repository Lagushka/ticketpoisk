import { ReactElement } from "react"

import { FilterInput } from "@/utils/types"
import classes from "@/styles/InputBlock.module.css"

export default function InputBlock({title, id, placeholder}: FilterInput): ReactElement {
  return (
    <div className={classes.block}>
      <label className={classes.title} htmlFor={id}>{title}</label>
      <input className={classes.inputField} type="text" name={id} id={id} placeholder={placeholder} />
    </div>
  )
}