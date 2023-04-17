import './general.css';


function SearchBar({setTitle, placeholder}) {
    const handleInput = (onChange) => {
        setTitle(onChange.target.value);
    }

    return(
        <input className="searchBar" type="text" onChange={handleInput} placeholder={placeholder} />
        // <input className="searchBar" type="text" onChange={handleInput} placeholder="Search MoviesMovies" />
    );
}

export default SearchBar;
