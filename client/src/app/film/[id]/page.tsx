'use client'

import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/utils/store";
import classes from "@/styles/FilmPage.module.css"
import Image, { ImageLoader } from "next/image";
import { Review } from "@/utils/types";
import PageContainer from "@/containers/PageContainer";
import getGenre from "@/utils/getGenre";
import CommonFilmBlock from "@/components/CommonFilmBlock";
import CartController from "@/components/CartController";
import { fetchReviews } from "@/utils/fetch";
import ReviewBlock from "@/components/Review";

const imageLoader: ImageLoader = ({ src }) => {
  return src
}

export default function Page({ params }: { params: { id: string } }): ReactElement {
  const film = useSelector((state: RootState) => state.films.find(element => element.id === params.id));
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const getReviews = async () => {
      if (film) {
        const data = await fetchReviews(film.id)
        setReviews(data)
      }
    }

    getReviews()
  }, [film])

  return (
    <PageContainer>
      <main className={ classes.mainBlock }>
        {
          film != null &&  
          <div className={ classes.filmInfo }>
            <Image className={ classes.poster } unoptimized src={film.posterUrl} priority={ true } alt="Poster" width="400" height="500" loader={ imageLoader } />
            <div className={ classes.textInfo }>
              <div className={ classes.topLine }>
                <h1 className={ classes.title }>{ film.title }</h1>
                <CartController filmId={ film.id } />
              </div>
              <div className={ classes.commonInfo }>
                <CommonFilmBlock heading="Жанр:" value={ getGenre(film.genre) } />
                <CommonFilmBlock heading="Год выпуска:" value={ film.releaseYear.toString() } />
                <CommonFilmBlock heading="Рейтинг:" value={ film.rating.toString() } />
                <CommonFilmBlock heading="Режиссер:" value={ film.director } />
              </div>
              <div className={ classes.description }>
                <h2 className={ classes.paragraphTitle }>Описание</h2>
                <span className={ classes.descText }>{ film.description }</span>
              </div>
            </div>
          </div>
        }
        {
          reviews.length > 0 &&
          <div className={ classes.reviews }>
            {
              reviews.map((review) => (
                <ReviewBlock key={review.id} review={review} />
              ))
            }
          </div>
        }
      </main>
    </PageContainer>
  )
}