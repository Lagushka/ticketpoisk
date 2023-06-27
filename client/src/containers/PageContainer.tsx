import { PropsWithChildren, ReactElement } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import classes from "@/styles/PageContainer.module.css"

export default function PageContainer(props: PropsWithChildren): ReactElement {
  return (
    <div className={ classes.container }>
      <Header />
      <div className={ classes.block }>
        {
          props.children
        }
      </div>
      <Footer />
    </div>
  )
};