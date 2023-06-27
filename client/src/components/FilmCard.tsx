import { ReactElement, useState } from "react";
import Image, { ImageLoader } from "next/image";

import classes from "@/styles/FilmsCard.module.css"
import Link from "next/link";
import getGenre from "@/utils/getGenre";
import CartController from "@/components/CartController";
import { Film } from "@/utils/types";
import { createPortal } from "react-dom";
import ModalWindow from "./ModalWindow";

const imageLoader: ImageLoader = ({ src }) => {
  return src
}

export default function FilmCard({ film, fromCart }: { film: Film, fromCart: boolean }): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Link href="" className={classes.fullBlock}>
      <div className={ classes.filmInfo }>
        <Image className={ classes.poster } unoptimized src={film.posterUrl} priority={ true } alt="Poster" width="100" height="120" loader={ imageLoader } />
        <div className={ classes.textInfo }>
          <span className={ classes.filmTitle }>{ film.title }</span>
          <span className={ classes.filmGenre }>{ getGenre(film.genre) }</span>
        </div>
      </div>
      <div className={ classes.cartOperators }>
        <CartController filmId={film.id} />
        {
          !fromCart
          && <button 
            className={ classes.deleteTickets }
            onClick={(event) => {
              event.preventDefault();
              setIsModalOpen(true);
            }}>
            <svg width="14px" height="14px" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0673 12.1829C13.1254 12.241 13.1714 12.3099 13.2028 12.3858C13.2343 12.4617 13.2505 12.543 13.2505 12.6251C13.2505 12.7072 13.2343 12.7885 13.2028 12.8644C13.1714 12.9403 13.1254 13.0092 13.0673 13.0673C13.0092 13.1254 12.9403 13.1714 12.8644 13.2028C12.7885 13.2343 12.7072 13.2505 12.6251 13.2505C12.543 13.2505 12.4617 13.2343 12.3858 13.2028C12.3099 13.1714 12.241 13.1254 12.1829 13.0673L7.0001 7.8837L1.81729 13.0673C1.70002 13.1846 1.54096 13.2505 1.3751 13.2505C1.20925 13.2505 1.05019 13.1846 0.932916 13.0673C0.81564 12.95 0.749756 12.791 0.749756 12.6251C0.749756 12.4593 0.81564 12.3002 0.932916 12.1829L6.11651 7.0001L0.932916 1.81729C0.81564 1.70002 0.749756 1.54096 0.749756 1.3751C0.749756 1.20925 0.81564 1.05019 0.932916 0.932916C1.05019 0.81564 1.20925 0.749756 1.3751 0.749756C1.54096 0.749756 1.70002 0.81564 1.81729 0.932916L7.0001 6.11651L12.1829 0.932916C12.3002 0.81564 12.4593 0.749756 12.6251 0.749756C12.791 0.749756 12.95 0.81564 13.0673 0.932916C13.1846 1.05019 13.2505 1.20925 13.2505 1.3751C13.2505 1.54096 13.1846 1.70002 13.0673 1.81729L7.8837 7.0001L13.0673 12.1829Z" fill="#333333"/>
            </svg>
          </button>
        }
      </div>
      { isModalOpen && createPortal(<ModalWindow filmId={ film.id } setIsModalOpen={setIsModalOpen} />, document.body) }
    </Link>
  )
}