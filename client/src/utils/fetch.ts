import { useDispatch } from "react-redux";
import { add } from "./filmsSlice";

const API_URL = "http://localhost:3001";

export const fetchFilms = async (dispatch: ReturnType<typeof useDispatch>): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/api/movies`);
    const films = await response.json();
    console.log(films)
    dispatch(add(films));
  } catch (error) {
    console.log(error);
  }
}