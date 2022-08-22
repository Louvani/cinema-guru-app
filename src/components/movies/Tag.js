import { useState } from 'react';
import './movies.css';

function Tag({genre, filter, genres, setGenres}) {
    const [selected, setSelected] = useState(false);

    const handleTag = () => {
        if (selected) {
            const newGenres = genres.filter((x) => x !== genre);
            setGenres(newGenres);
            setSelected(false);
        } else {
            setSelected(true);
            setGenres([...genres, genre]);
        }
    }

    return (
        <li className={`tag ${selected ? 'selected' : ''}`} onClick={handleTag}>
            {genre}
        </li>
    );
}

export default Tag;
