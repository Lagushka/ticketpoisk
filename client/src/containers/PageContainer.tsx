import { PropsWithChildren, ReactElement } from "react";

import classes from "@/styles/PageContainer.module.css";
import Header from "@/components/Header";

export default function PageContainer(props: PropsWithChildren): ReactElement {
  return (
    <div className={classes.page}>
      <Header />
      {
        props.children
      }
    </div>
  )
};