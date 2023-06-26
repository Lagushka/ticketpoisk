export type FilterInput = {
  title: string,
  id: string,
  placeholder: string
};

export type Film = {
  id: string,
  title: string,
  posterUrl: string,
  releaseYear: number,
  description: string,
  genre: string,
  rating: number,
  director: string,
  reviewIds: string[]
};