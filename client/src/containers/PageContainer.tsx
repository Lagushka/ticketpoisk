import { PropsWithChildren, ReactElement } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PageContainer(props: PropsWithChildren): ReactElement {
  return (
    <div>
      <Header />
      {
        props.children
      }
      <Footer />
    </div>
  )
};