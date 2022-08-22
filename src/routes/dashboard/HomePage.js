import { useState } from 'react';

import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import './dashboard.css';



const currentYear = () => {
    return new Date().getFullYear();
}

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [minYear, setMinYear] = useState(1970);
    const [maxYear, setMaxYear] = useState(currentYear());
    const [genres, setGenres] = useState([]);
    const [sort, setSort] = useState("");
    const [title, setTitle] = useState("");
    const [page, setPage] = useState(1);

    return(
        <div className='container-page Home-page'>
            <Filter
                minYear={minYear} setMinYear={setMinYear}
                maxYear={maxYear} setMaxYear={setMaxYear}
                sort={sort} setSort={setSort}
                genres={genres} setGenres={setGenres}
                title={title} setTitle={setTitle}/>
        </div>
    )

}

export default HomePage;
