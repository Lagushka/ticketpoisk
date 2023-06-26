export default function getGenre(sourceGenre: string): string {
  switch (sourceGenre) {
    case "fantasy": return "Фэнтези";
    case "horror": return "Ужасы";
    case "action": return "Боевик";
    case "comedy": return "Комедия";
    default: return "Неизвестный жанр"
  }
}