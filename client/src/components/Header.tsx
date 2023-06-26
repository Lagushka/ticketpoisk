import { ReactElement } from "react";
import Link from "next/link";

import classes from "@/styles/Header.module.css";

export default function Header(): ReactElement {
  return (
    <header className={ classes.header }>
      <Link href="/" className={classes.link}>
        <h1 className={ classes.heading }>Билетопоиск</h1>
      </Link>
      <button className={ classes.cart } type="button">
        <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M27.4936 6.675C27.304 6.46212 27.0713 6.29189 26.811 6.17554C26.5507 6.05918 26.2687 5.99935 25.9836 6H19.9936C19.9936 4.4087 19.3615 2.88258 18.2363 1.75736C17.111 0.632141 15.5849 0 13.9936 0C12.4023 0 10.8762 0.632141 9.75098 1.75736C8.62576 2.88258 7.99362 4.4087 7.99362 6H2.00362C1.7202 6.00076 1.44012 6.06127 1.18166 6.17758C0.923197 6.29389 0.692161 6.46338 0.503622 6.675C0.316658 6.88583 0.176356 7.1338 0.0919129 7.40264C0.0074692 7.67148 -0.0192106 7.95513 0.0136221 8.235L1.79612 23.235C1.85394 23.7237 2.08991 24.174 2.45891 24.4996C2.8279 24.8253 3.304 25.0034 3.79612 25H24.2024C24.6945 25.0034 25.1706 24.8253 25.5396 24.4996C25.9086 24.174 26.1446 23.7237 26.2024 23.235L27.9849 8.235C28.0175 7.95504 27.9907 7.67134 27.906 7.40249C27.8213 7.13364 27.6808 6.88573 27.4936 6.675ZM13.9936 2C15.0545 2 16.0719 2.42143 16.822 3.17157C17.5722 3.92172 17.9936 4.93913 17.9936 6H9.99362C9.99362 4.93913 10.415 3.92172 11.1652 3.17157C11.9153 2.42143 12.9328 2 13.9936 2ZM24.2136 23C24.21 23.0013 24.206 23.0013 24.2024 23H3.77487L2.00362 8H7.99362V11C7.99362 11.2652 8.09898 11.5196 8.28652 11.7071C8.47405 11.8946 8.7284 12 8.99362 12C9.25884 12 9.51319 11.8946 9.70073 11.7071C9.88826 11.5196 9.99362 11.2652 9.99362 11V8H17.9936V11C17.9936 11.2652 18.099 11.5196 18.2865 11.7071C18.4741 11.8946 18.7284 12 18.9936 12C19.2588 12 19.5132 11.8946 19.7007 11.7071C19.8883 11.5196 19.9936 11.2652 19.9936 11V8H25.9936L24.2136 23Z" 
            fill="white"/>
        </svg>
      </button>
    </header>
  )
};