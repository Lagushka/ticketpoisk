import { ReactElement } from "react";
import { useSelector } from "react-redux";
import Image, { ImageLoader } from "next/image";

import { RootState } from "@/utils/store";
import classes from "@/styles/FilmsCard.module.css"
import Link from "next/link";
import getGenre from "@/utils/getGenre";
import CartController from "@/components/CartController";

const imageLoader: ImageLoader = ({ src }) => {
  return src
}

export default function FilmCard({ filmIndex }: { filmIndex: number }): ReactElement {
  const film = useSelector((state: RootState) => state.films[filmIndex])

  return (
    <Link href="" className={classes.fullBlock}>
      <div className={ classes.filmInfo }>
        <Image className={ classes.poster } unoptimized src={film.posterUrl} priority={ true } alt="Poster" width="100" height="120" loader={ imageLoader } />
        <div className={ classes.textInfo }>
          <span className={ classes.filmTitle }>{ film.title }</span>
          <span className={ classes.filmGenre }>{ getGenre(film.genre) }</span>
        </div>
      </div>
      <CartController filmId={film.id} />
    </Link>
  )
}