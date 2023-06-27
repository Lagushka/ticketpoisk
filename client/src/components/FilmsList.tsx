'use client'

import { fetchCinemas } from "@/utils/fetch"
import { RootState } from "@/utils/store"
import { ReactElement, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import FilmCard from "./FilmCard"
import classes from "@/styles/FilmsList.module.css"
import { Film } from "@/utils/types"

export default function FilmsList({ films }: { films?: Film[] }): ReactElement {
  const possibleFilms = useSelector((state: RootState) => state.films)
  let fromCart = false
  if (!films) {
    films = possibleFilms
    fromCart = true
  }

  return (
    <ul className={ classes.list }>
      {
        films.map((film) => (
          <li key={film.id} className={ classes.card }>
            <FilmCard film={film} fromCart={fromCart} />
          </li>
        ))
      }
    </ul>
  )
}