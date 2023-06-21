import { PropsWithChildren, ReactElement } from "react";

import classes from "@/styles/PageContainer.module.css"

export default function PageContainer(props: PropsWithChildren): ReactElement {
  return (
    <div className={classes.page}>
      {
        props.children
      }
    </div>
  )
}