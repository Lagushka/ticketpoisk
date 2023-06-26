import { useDispatch } from "react-redux";
import { addFilms } from "./filmsSlice";
import { addCinemas } from "./cinemasSlice";
import { Cinema, Film } from "./types";

const API_URL = "http://localhost:3001";

const fetchFilm = async (dispatch: ReturnType<typeof useDispatch>, filmId: string): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/api/movie?movieId=${filmId}`);
    const film: Film = await response.json();
    dispatch(addFilms([film]));
  } catch (error) {
    console.log(error);
  }
}

function getActualMovies(cinemas: Cinema[]): Record<string, boolean> {
  const movies: Record<string, boolean> = {};
  for (const cinema of cinemas) {
    for (const movieId of cinema.movieIds) {
      if (!movies[movieId]) {
        movies[movieId] = true;
      }
    }
  }

  return {...movies};
}

export const fetchCinemas = async (dispatch : ReturnType<typeof useDispatch>): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/api/cinemas`);
    const cinemas = await response.json();
    dispatch(addCinemas(cinemas))

    const actualMovies = getActualMovies(cinemas)
    const promises = [];
    for (const movieId in actualMovies) {
      promises.push(fetchFilm(dispatch, movieId));
    }

    await Promise.all(promises);
  } catch (error) {
    console.log(error);
  }
}