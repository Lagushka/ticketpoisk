import { MouseEvent, PropsWithChildren, ReactElement } from "react";

import classes from "@/styles/CartButton.module.css"

interface Props extends PropsWithChildren {
  handleClick: () => void,
  disabled?: boolean
}

export default function CartButton({ handleClick, disabled = false, children }: Props): ReactElement {

  return (
    <button 
      className={classes.button}
      onClick={(event) => {
        event.preventDefault();
        handleClick(); 
      }}
      disabled={disabled}
    >
      { children }
    </button>
  )
}