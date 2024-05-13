import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  return (
    <div className={css.inputBlock}>
      <label className={css.description}>Find contact by name</label>
      <input
        className={css.input}
        type="text"
        // value={inputValue}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
}
