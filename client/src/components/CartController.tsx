import { ReactElement } from "react";
import CartButton from "./CartButton";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";
import { useDispatch } from "react-redux";
import { decrement, increment } from "@/utils/cartSlice";
import classes from "@/styles/CartController.module.css";

export default function CartController({ filmId }: { filmId: string }): ReactElement {
  const filmCart = useSelector((state: RootState) => {
    const quantity = state.cart.byFilm[filmId];
    if (isNaN(quantity)) {
      return 0
    }

    return quantity;
  })

  const dispatch = useDispatch();

  return (
    <div className={classes.mainBlock}>
      <CartButton handleClick={ () => {dispatch(decrement(filmId))} } disabled={ filmCart <= 0 }>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 6C10.5 6.09946 10.4605 6.19484 10.3902 6.26517C10.3198 6.33549 10.2245 6.375 10.125 6.375H1.875C1.77554 6.375 1.68016 6.33549 1.60984 6.26517C1.53951 6.19484 1.5 6.09946 1.5 6C1.5 5.90054 1.53951 5.80516 1.60984 5.73484C1.68016 5.66451 1.77554 5.625 1.875 5.625H10.125C10.2245 5.625 10.3198 5.66451 10.3902 5.73484C10.4605 5.80516 10.5 5.90054 10.5 6Z" fill="white"/>
        </svg>
      </CartButton>
      <span className={classes.quantity}>{ filmCart }</span>
      <CartButton handleClick={ () => {dispatch(increment(filmId))} } disabled={ filmCart >= 30 } >
        <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 5C9.5 5.09946 9.46049 5.19484 9.39017 5.26517C9.31984 5.33549 9.22446 5.375 9.125 5.375H5.375V9.125C5.375 9.22446 5.33549 9.31984 5.26517 9.39017C5.19484 9.46049 5.09946 9.5 5 9.5C4.90054 9.5 4.80516 9.46049 4.73484 9.39017C4.66451 9.31984 4.625 9.22446 4.625 9.125V5.375H0.875C0.775544 5.375 0.680161 5.33549 0.609835 5.26517C0.539509 5.19484 0.5 5.09946 0.5 5C0.5 4.90054 0.539509 4.80516 0.609835 4.73484C0.680161 4.66451 0.775544 4.625 0.875 4.625H4.625V0.875C4.625 0.775544 4.66451 0.680161 4.73484 0.609835C4.80516 0.539509 4.90054 0.5 5 0.5C5.09946 0.5 5.19484 0.539509 5.26517 0.609835C5.33549 0.680161 5.375 0.775544 5.375 0.875V4.625H9.125C9.22446 4.625 9.31984 4.66451 9.39017 4.73484C9.46049 4.80516 9.5 4.90054 9.5 5Z" fill="white"/>
        </svg>
      </CartButton>
    </div>
  )
} 