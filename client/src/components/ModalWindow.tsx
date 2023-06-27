import { Dispatch, ReactElement, SetStateAction } from "react";

import classes from "@/styles/ModalWindow.module.css";
import { useDispatch } from "react-redux";
import { deleteTickets } from "@/utils/cartSlice";

export default function ModalWindow({ filmId, setIsModalOpen }: { filmId: string, setIsModalOpen: Dispatch<SetStateAction<boolean>> }): ReactElement {
  const dispatch = useDispatch();

  return (
    <div 
      className={ classes.container }
      onClick={() => {
        setIsModalOpen(false)
      }}>
      <div
        className={ classes.modalBlock }
        onClick={(event) => {
          event.stopPropagation()
        }}>
        <div className={ classes.infoBlock }>
          <div className={ classes.topLine }>
            <span className={ classes.heading }>Удаление билета</span>
            <button
              className={ classes.closeButton }
              type="button"
              onClick={ () => {
                setIsModalOpen(false);
              }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.85372 9.14628C9.90018 9.19274 9.93703 9.24789 9.96217 9.30859C9.98731 9.36928 10.0003 9.43434 10.0003 9.50003C10.0003 9.56573 9.98731 9.63079 9.96217 9.69148C9.93703 9.75218 9.90018 9.80733 9.85372 9.85378C9.80727 9.90024 9.75212 9.93709 9.69142 9.96223C9.63072 9.98737 9.56567 10.0003 9.49997 10.0003C9.43428 10.0003 9.36922 9.98737 9.30853 9.96223C9.24783 9.93709 9.19268 9.90024 9.14622 9.85378L4.99997 5.70691L0.853723 9.85378C0.759902 9.94761 0.632655 10.0003 0.499973 10.0003C0.367291 10.0003 0.240043 9.94761 0.146223 9.85378C0.0524025 9.75996 -0.000305173 9.63272 -0.000305176 9.50003C-0.000305178 9.36735 0.0524025 9.2401 0.146223 9.14628L4.2931 5.00003L0.146223 0.853784C0.0524025 0.759964 -0.000305176 0.632716 -0.000305176 0.500034C-0.000305176 0.367352 0.0524025 0.240104 0.146223 0.146284C0.240043 0.0524635 0.367291 -0.000244141 0.499973 -0.000244141C0.632655 -0.000244141 0.759902 0.0524635 0.853723 0.146284L4.99997 4.29316L9.14622 0.146284C9.24004 0.0524635 9.36729 -0.000244143 9.49997 -0.000244141C9.63266 -0.000244138 9.7599 0.0524635 9.85372 0.146284C9.94754 0.240104 10.0003 0.367352 10.0003 0.500034C10.0003 0.632716 9.94754 0.759964 9.85372 0.853784L5.70685 5.00003L9.85372 9.14628Z" fill="#333333"/>
              </svg>
            </button>
          </div>
          <span className={ classes.warning }>Вы уверены, что хотите удалить билет?</span>
        </div>
        <div className={ classes.buttonsBlock }>
          <button
            className={ classes.yesButton }
            onClick={() => {
              dispatch(deleteTickets(filmId));
              setIsModalOpen(false);
            }}>Да</button>
          <button
            className={ classes.noButton }
            onClick={() => {
              setIsModalOpen(false);
            }}>
            Нет
          </button>
        </div>
      </div>
    </div>
  )
}