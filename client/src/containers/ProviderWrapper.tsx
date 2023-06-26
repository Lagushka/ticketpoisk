'use client'

import { serviceStore } from "@/utils/store";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";

export const ProviderWrapper = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <Provider store = { serviceStore }>
      {children}
    </Provider>
  )
}