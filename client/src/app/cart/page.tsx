'use client'

import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import FilmsList from "@/components/FilmsList";
import PageContainer from "@/containers/PageContainer";
import { RootState } from "@/utils/store";
import classes from "@/styles/CartPage.module.css";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Page() {
  const findBuyed = (state: RootState) => state.films.filter((film) => (film.id in state.cart.byFilm && state.cart.byFilm[film.id] > 0));
  const commonQuantity = useSelector((state: RootState) => state.cart.sum)

  const selectFilms = createSelector([(state: RootState) => state], findBuyed);
  const films = useSelector((state: RootState) => selectFilms(state));

  return (
    <PageContainer>
      <main className={ classes.block }>
        <FilmsList films={films} />
        <div className={ classes.summary }>
          <span className={ classes.text }>Итого билетов:</span>
          <span className={ classes.text }>{ commonQuantity }</span>
        </div>
      </main>
    </PageContainer>
  )
}