'use client'

import FilmsList from "@/components/FilmsList";
import Filters from "@/components/Filters";
import PageContainer from "@/containers/PageContainer";
import classes from "@/styles/MainPage.module.css";
import { ALL_FETCHED, fetchCinemas } from "@/utils/fetch";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!ALL_FETCHED) {
      fetchCinemas(dispatch)
    }
  }, [dispatch])

  return (
    <PageContainer>
      <main className={classes.contentBlock}>
        <Filters />
        <FilmsList />
      </main>
    </PageContainer>
  )
}
