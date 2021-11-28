import './FilterCheckbox.css'

function FilterCheckbox ({isShortMovies, handelChangeCheckbox }) {
    function handleChange() {
        handelChangeCheckbox();
      }

    return (
        <div className="short__films">
            <input type="checkbox" id="switchFor" onChange={handleChange} checked={isShortMovies} className="switch" />
            <label for="switchFor" className="short__films-text">Короткометражки</label>
        </div>
    )
}

export default FilterCheckbox;
