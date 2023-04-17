import { useState } from 'react';
import './movies.css';

import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';

function Filter({minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle}) {
    const options = ['latest', 'oldest', 'highestrated', 'lowestrated', 'default'];
    const tags = [
        'Action', 'Drama', 'Comedy',
        'Biography', 'Romance', 'Thriller',
        'War', 'History', 'Sport', 'Sci-fi',
        'Documentary', 'Crime', 'Fantasy'
    ]
    return (
        <div className='filter-container'>
            <div className="section-filter">
                <SearchBar setTitle={setTitle} />
                <div className='imput-filter'>
                    <Input  label={'Min Date'} type={'date'} className={'input-dark first-input'}
                        value={minYear} setValue={setMinYear} inputAttributes={{ for: 'min-date' }} />
                    <Input  label={'Max Date'} type={'date'} className={'input-dark second-input'}
                        value={maxYear} setValue={setMaxYear} inputAttributes={{ for: 'max-date' }} />
                    <SelectInput label={'Sort:'} options={options} className={'select-input'} setValue={setSort} />
                </div>
            </div>
            <div className="tags-filter">
            {tags.map((item) => (
                <Tag genre={item} genres={genres} setGenres={setGenres} key={item} />
            ))}
            </div>
        </div>
    );
}

export default Filter;
