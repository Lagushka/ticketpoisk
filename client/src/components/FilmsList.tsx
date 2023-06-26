'use client'

import { fetchCinemas } from "@/utils/fetch"
import { RootState } from "@/utils/store"
import { ReactElement, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import FilmCard from "./FilmCard"
import classes from "@/styles/FilmsList.module.css"

export default function FilmsList(): ReactElement {
  const dispatch = useDispatch()
  const films = useSelector((state: RootState) => state.films)

  useEffect(() => {
    fetchCinemas(dispatch)
  }, [dispatch])

  return (
    <ul className={ classes.list }>
      {
        films.map((film, index) => (
          <li key={film.id} className={ classes.card }>
            <FilmCard filmIndex={index} />
          </li>
        ))
      }
    </ul>
  )
}