import './general.css';


function SearchBar({setTitle}) {
    const handleInput = (onChange) => {
        setTitle(onChange.target.value);
    }

    return(
        <input className="searchBar" type="text" onChange={handleInput} placeholder="Search Movies" />
    );
}

export default SearchBar;
