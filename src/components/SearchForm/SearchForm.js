import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';
import { useFormWithValidation } from '../Validation/UseFormWithValidation';
import './SearchForm.css';

function SearchForm({
  isShortMovies,
  savedMovies,
  handelChangeCheckbox,
  getMovies,
  place,
}) {
    
  const { values, handleChange, isValid } = useFormWithValidation({});
  const [isError, setIsError] = useState(false);
      
  function handleChangeInputSearch(evt) {
    handleChange(evt);
    setIsError(false);
  }

  function onSubmit(evt) {
    setIsError(false);
    if (evt) {
      evt.preventDefault();
    }

    if (!isValid) {
      setIsError(true);
    } else if (!savedMovies) {
      getMovies(values.input, place);
      localStorage.setItem("request", values.input);
    } else if (savedMovies) {
      localStorage.setItem("requestSaved", values.input);
      return getMovies(values.input, place);
    }
    return;
  }

    return (
        <div className="movies__search">
            <span className={
              isError ? "error__input-search_active error__input-search" : "error__input-search"
              }>
                Не указано в поиске слово
                </span>
            <form className="search__form" noValidate onSubmit={onSubmit}>
                <input type="text" id="inputName" name="input" placeholder="Фильм" className="search__form-text" onChange={handleChangeInputSearch} required onblur="none"/>
                <button type="submit" className="search__form_button" value="Отправить на сервер" id="search__submit"></button>
            </form>

            <FilterCheckbox 
            isShortMovies={isShortMovies}
            handelChangeCheckbox={handelChangeCheckbox}
            />

        </div>
    )
}

export default SearchForm;
