import Question from "@/components/Question";
import PageContainer from "@/containers/PageContainer";
import classes from "@/styles/QNAPage.module.css";


const questions: {question: string, answer: string}[] = [
 {
  question: "Что такое Билетопоиск?",
  answer: "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
 },
 {
  question: "Какой компании принадлежит Билетопоиск?",
  answer: "Яндекс"
 },
 {
  question: "Как купить билет на Билетопоиск?",
  answer: "Никак :)"
 },
 {
  question: "Как оставить отзыв на Билетопоиск?",
  answer: "Никак :)"
 }
]

export default function Page() {
  return (
    <PageContainer>
      <main className={ classes.mainBlock }>
        <div className={ classes.blockWithTitle }>
          <h1 className={ classes.heading }>Вопросы-ответы</h1>
        </div>
        <div className={ classes.mainInfo }>
          {
            questions.map(block => <Question key={block.question} {...block} />)
          }
        </div>
      </main>
    </PageContainer>
  )
}