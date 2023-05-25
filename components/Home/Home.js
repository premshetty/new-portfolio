"use client"
import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import axios from 'axios';
import { combineArraysIfValueExists, extractNumberFromString } from '../../utils/helper';

const Home = ({ data }) => {
    const [filteredData, setFilteredData] = useState(data);
    const [searchText, setSearchText] = useState('');
    const [filterByData, setFilterByData] = useState({
        movies: [],
        species: [],
    });

    const [selectedMovie, setSelectedMovie] = useState('');
    const [selectedSpecies, setSelectedSpecies] = useState('');
    const [birthYearRange, setBirthYearRange] = useState({ min: "", max: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedMovieUrl, setSelectedMovieUrl] = useState("")
    const [selectedSpeciesUrl, setSelectedSpeciesUrl] = useState("")
    const [isShowFilter, setIsShowFilter] = useState(false)

    console.log(filteredData)

    useEffect(() => {
        const fetchFilterByData = async () => {
            try {
                const [speciesResponse, filmsResponse] = await Promise.all([
                    axios.get('https://swapi.dev/api/species/'),
                    axios.get('https://swapi.dev/api/films/'),

                ]);

                const speciesData = speciesResponse.data.results;
                const filmsData = filmsResponse.data.results;


                setFilterByData({
                    movies: filmsData,
                    species: speciesData,

                });
            } catch (error) {
                console.log('Error fetching filter data:', error);
            }
        };

        fetchFilterByData();
    }, []);

    useEffect(() => {
        if (birthYearRange.min !== "" && birthYearRange.max !== "") {

            setErrorMessage("");
        } else if (birthYearRange.min !== "" || birthYearRange.max !== "") {
            setErrorMessage("Please enter both min and max years.");
        } else {
            setErrorMessage("");
        }
    }, [birthYearRange]);

    console.log(filterByData)
    const searchHandler = searchTerm => {
        setSearchText(searchTerm);
        const search = searchTerm.toLowerCase();

        const filtered = data.filter(character => {
            const name = character.name.toLowerCase();
            return name.includes(search);
        });

        setFilteredData(filtered);
    };
    const handleSpeciesFilter = (event) => {
        const selectedSpecies = event.target.value;
        const selectedData = event.target.options[event.target.selectedIndex].dataset.info;
        setSelectedSpecies(selectedSpecies);
        setSelectedSpeciesUrl(selectedData)
    };

    const handleMovieFilter = event => {
        const selectedmovie = event.target.value;
        const selectedData = event.target.options[event.target.selectedIndex].dataset.info;
        setSelectedMovie(selectedmovie);
        setSelectedMovieUrl(selectedData)
    };


    // const handleBirthYearFilter = () => {
    //     const previousFilters = filteredUniqueData.birthYear.length > filteredUniqueData.movies.length
    //         ? [...filteredUniqueData.movies]
    //         : [...filteredUniqueData.birthYear];

    //     if (filteredUniqueData.movies.length === 0 && filteredUniqueData.birthYear.length > 0) {
    //         previousFilters.push(...filteredUniqueData.birthYear);
    //     } else if (filteredUniqueData.birthYear.length === 0 && filteredUniqueData.movies.length > 0) {
    //         previousFilters.push(...filteredUniqueData.movies);
    //     }
    //     let filtered;
    //     if (previousFilters.length > 0) {
    //         filtered = previousFilters.filter(character => {

    //             const birthYear = extractNumberFromString(character.birth_year);
    //             if (isNaN(birthYear)) {
    //                 return false;
    //             }
    //             const { min, max } = birthYearRange;
    //             return birthYear >= extractNumberFromString(min) && birthYear <= extractNumberFromString(max);
    //         });
    //     } else {
    //         filtered = data.filter(character => {
    //             const birthYear = extractNumberFromString(character.birth_year);
    //             if (isNaN(birthYear)) {
    //                 return false;
    //             }
    //             const { min, max } = birthYearRange;
    //             return birthYear >= extractNumberFromString(min) && birthYear <= extractNumberFromString(max);
    //         });
    //     }

    //     setFilteredUniqueData({ birthYear: filtered, movies: [], species: [] })
    //     setFilteredData(filtered);
    // };

    const handleMinYearChange = event => {
        const value = event.target.value;
        if (value >= 0) {
            setBirthYearRange(prevRange => ({ ...prevRange, min: value }));
        }
    };

    const handleMaxYearChange = event => {
        const value = event.target.value;
        if (value >= 0) {
            setBirthYearRange(prevRange => ({ ...prevRange, max: value }));
        }
    };
    useEffect(() => {
        let filtered = [...data];

        if (selectedMovie === "" && selectedSpecies === "" && birthYearRange.min === "" && birthYearRange.max === "") {
            setFilteredData(data);
        } else {

            if (selectedSpecies !== "") {
                filtered = filtered.filter((character) => {
                    return character.species.includes(selectedSpeciesUrl)
                }
                );
            }
            if (selectedMovie !== "") {
                filtered = filtered.filter((character) =>
                    character.films.includes(selectedMovieUrl)
                );
            }
            if (birthYearRange.min !== "" && birthYearRange.max !== "") {
                filtered = filtered.filter((character) => {
                    const birthYear = extractNumberFromString(character.birth_year);
                    if (isNaN(birthYear)) {
                        return false;
                    }
                    const { min, max } = birthYearRange;
                    return (
                        birthYear >= extractNumberFromString(min) &&
                        birthYear <= extractNumberFromString(max)
                    );
                });
            }
            setFilteredData(filtered);
        }
    }, [selectedMovie, selectedSpecies, birthYearRange, data]);
    const claerFIlterHandler = () => {
        setSelectedMovie("")
        setSelectedSpecies("")
        setBirthYearRange({ min: "", max: "" })
    }
    console.log(filteredData)
    return (
        <div className='w-full flex flex-col gap-y-5'>

            <div className={`${isShowFilter ? "bg-gray-600" : ""} py-5  rounded-lg w-full flex flex-col  md:grid grid-cols-3 gap-2 `}>

                <input
                    type='text'
                    className=' col-span-3 h-12 p-4 rounded-lg mx-3 bg-gray-950 outline-none  w-auto text-slate-100'
                    onChange={e => searchHandler(e.target.value)}
                    value={searchText}
                    placeholder='Find your favorite character'
                />

                {isShowFilter &&
                    <>

                        <select value={selectedSpecies} onChange={handleSpeciesFilter} className="h-12 px-4 rounded-lg mx-3 bg-gray-950 outline-none  w-auto text-slate-100">
                            <option disabled defaultValue selected value="">Species</option>
                            {filterByData.species.map(({ name, url }) => (
                                <option data-info={url} key={name} value={name}>{name}</option>
                            ))}
                        </select>

                        <select value={selectedMovie} onChange={handleMovieFilter}
                            className="h-12 px-4 rounded-lg mx-3 bg-gray-950 outline-none  w-auto text-slate-100"
                        >
                            <option disabled defaultValue selected value="">Movies</option>
                            {
                                filterByData.movies.map(({ title, url }) => <option data-info={url} key={title} value={title}>{title}</option>)
                            }
                        </select>
                        <div className='grid grid-cols-2 grid-flow-row max-w-full px-4'>
                            <label className='flex gap-2 items-center'>
                                <span className='text-xs md:text-base'>    Min Year: </span>
                                <input
                                    className=' col-span-3 h-12 p-4 rounded-lg md:mx-3 bg-gray-950 outline-none  w-20 md:w-28 text-slate-100'
                                    type="number"
                                    placeholder='from'
                                    min="30 BBY"
                                    max="5 ABY"
                                    value={birthYearRange.min}
                                    onChange={handleMinYearChange}
                                />
                            </label>
                            <label className='flex gap-2 items-center'>
                                <span className='text-xs md:text-base'>    Max Year: </span>
                                <input
                                    className=' col-span-3 h-12 p-4 rounded-lg md:mx-3 bg-gray-950 outline-none  w-20 md:w-28 text-slate-100'
                                    type="number"
                                    placeholder='to'
                                    min="30 BBY"
                                    max="5 ABY"
                                    value={birthYearRange.max}
                                    onChange={handleMaxYearChange}
                                />
                            </label>
                        </div>
                    </>}
            </div>
            {errorMessage && <div className='text-red-600 '> {errorMessage} </div>}
            <div className='flex justify-between items-center w-full'>

                <p onClick={() => setIsShowFilter(!isShowFilter)} className='text-blue-600 underline underline-offset-2 w-28 cursor-pointer '>{!isShowFilter ? "Show Filter" : "Hide Filter"}</p>
                {isShowFilter && <p onClick={claerFIlterHandler} className='text-blue-600 underline underline-offset-2 w-28 cursor-pointer '>clear filter</p>}
            </div>
            <div className='flex flex-wrap gap-10 mt-5 justify-center items-start'>

                {filteredData.map(character => (
                    <CharacterCard key={character.name} characterData={character} />
                ))}
            </div>
        </div>
    );
};

export default Home;
