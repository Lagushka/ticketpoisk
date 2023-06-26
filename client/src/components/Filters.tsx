import { FilterInput } from "@/utils/types";
import { ReactElement } from "react";
import InputBlock from "./InputBlock";
import classes from "@/styles/Filters.module.css"

export default function Filters(): ReactElement {
  const filterInputs: FilterInput[] = [
    {
      title: "Название",
      id: "title",
      placeholder: "Введите название"
    },
    {
      title: "Жанр",
      id: "genre",
      placeholder: "Выберите жанр"
    },
    {
      title: "Кинотеатр",
      id: "cinema",
      placeholder: "Выберите кинотеатр"
    }
  ];

  return (
    <div className={classes.filtersBlock}>
      <form action="" className={classes.filtersDirectly}>
        <h2 className={classes.heading}>Фильтр поиска</h2>
        {
          filterInputs.map(input => (
            <InputBlock key={input.id} {...input} />
          ))
        }
      </form>
    </div>
  )
}