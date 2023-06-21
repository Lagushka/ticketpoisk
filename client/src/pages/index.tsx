import Filters from "@/components/Filters"
import Header from "@/components/Header"
import PageContainer from "@/containers/PageContainer"
import classes from "@/styles/MainPage.module.css"

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <main className={classes.contentBlock}>
        <Filters />
      </main>
    </PageContainer>
  )
}
