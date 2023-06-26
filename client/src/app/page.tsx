import FilmsList from "@/components/FilmsList";
import Filters from "@/components/Filters";
import PageContainer from "@/containers/PageContainer";
import classes from "@/styles/MainPage.module.css";

export default function Home() {
  return (
    <PageContainer>
      <main className={classes.contentBlock}>
        <Filters />
        <FilmsList />
      </main>
    </PageContainer>
  )
}
