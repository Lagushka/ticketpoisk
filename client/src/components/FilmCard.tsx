import { ReactElement } from "react";
import { useSelector } from "react-redux";
import Image, { ImageLoader } from "next/image";

import { RootState } from "@/utils/store";

const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return src
}

export default function FilmCard({ filmIndex }: { filmIndex: number }): ReactElement {
  const film = useSelector((state: RootState) => state.films[filmIndex])

  return (
    <a href="">
      <div>
        <Image unoptimized src={film.posterUrl} priority={ true } alt="Poster" width="100" height="120" loader={ imageLoader } />
        <div>
          <span>{ film.title }</span>
          <span>{ film.genre }</span>
        </div>
      </div>
    </a>
  )
}