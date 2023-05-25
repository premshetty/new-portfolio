"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CharacterModal = ({ onClose, data }) => {
    const [speciesData, setSpeciesData] = useState({})
    const [movies, setMovies] = useState([])
    const { name, birth_year, hair_color, species, mass, height, average_lifespan, eye_color, skin_color } = data;
    console.log(speciesData)



    console.log(data)
    return (

        <div className={`fixed inset-0 flex items-center justify-center z-[500] rounded-lg`}>
            <div className=" cursor-pointer mx-auto rounded-lg overflow-hidden shadow-2xl">
                <div
                    style={{
                        backgroundImage: 'url("/characterBg.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    className="h-screen md:h-96 max-w-lg w-screen md:w-auto md:min-w-[1000px] relative"
                >
                    <div className="absolute inset-0 bg-black opacity-75"></div>
                    <img src="/hero.png" className='w-auto h-[280px] object-cover md:w-1/2 absolute  md:h-auto opacity-100 bottom-0  md:right-[20px] md:top-5' alt="" />
                    <div className="flex flex-col md:flex-row relative text-white">
                        <h1 className='absolute h-auto opacity-100 left-[520px] bottom-5 text-5xl shadow-md '>{name}</h1>
                        <div className="bg-gray-950 w-full md:max-w-[50%] md:w-1/2 h-96 p-5 float-right flex flex-col gap-5 justify-start">
                            <div className='grid grid-cols-3 mt-10  gap-5 max-w-full'>
                                <div className='flex flex-col gap-2 px-5 py-3  w-20 md:min-w-[130px]   bg-opacity-60 md:shadow-yellow-200 bg-gray-950 rounded-lg  shadow-sm'>
                                    <p className='whitespace-nowrap text-slate-400'>Height:</p>
                                    <p className='text-white whitespace-nowrap font-bold'>{`${height ?? 'n/a'}`}</p>
                                </div>
                                <div className='flex flex-col gap-2 px-5 py-3  w-20 md:min-w-[130px]   bg-opacity-60 md:shadow-yellow-200 bg-gray-950 rounded-lg  shadow-sm'>
                                    <p className='whitespace-nowrap text-slate-400'>Weight:</p>
                                    <p className='text-white whitespace-nowrap font-bold'>{`${mass ?? 'n/a'}`}</p>
                                </div>
                                <div className='flex flex-col gap-2 px-5 py-3  w-20 md:min-w-[130px]   bg-opacity-60 md:shadow-yellow-200 bg-gray-950 rounded-lg  shadow-sm'>
                                    <p className='whitespace-nowrap text-slate-400'>Hair:</p>
                                    <p className='text-white whitespace-nowrap font-bold'>{hair_color}</p>
                                </div>
                                <div className='flex flex-col gap-2 px-5 py-3  w-20 md:min-w-[130px]   bg-opacity-60 md:shadow-yellow-200 bg-gray-950 rounded-lg  shadow-sm'>
                                    <p className='whitespace-nowrap text-slate-400'>Skin:</p>
                                    <p className='text-white whitespace-nowrap font-bold'>{skin_color}</p>
                                </div>
                                <div className='flex flex-col gap-2 px-5 py-3  w-20 md:min-w-[130px]   bg-opacity-60 md:shadow-yellow-200 bg-gray-950 rounded-lg  shadow-sm'>
                                    <p className='whitespace-nowrap text-slate-400'>Eye:</p>
                                    <p className='text-white whitespace-nowrap font-bold'>{eye_color ?? 'n/a'}</p>
                                </div>
                                <div className='flex flex-col gap-2 px-5 py-3  w-20 md:min-w-[130px]   bg-opacity-60 md:shadow-yellow-200 bg-gray-950 rounded-lg  shadow-sm'>
                                    <p className='whitespace-nowrap text-slate-400'>Life Span:</p>
                                    <p className='text-white whitespace-nowrap font-bold'>{`${average_lifespan ?? 'n/a'}`}</p>
                                </div>
                                <div className='flex flex-col gap-2 px-5 py-3  w-20 md:min-w-[130px]   bg-opacity-60 md:shadow-yellow-200 bg-gray-950 rounded-lg  shadow-sm'>
                                    <p className='whitespace-nowrap text-slate-400'>Birth year:</p>
                                    <p className='text-white whitespace-nowrap font-bold'>{birth_year ?? "n/a"}</p>
                                </div>

                            </div>

                            <button className='absolute top-4 right-4' onClick={onClose}>close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default CharacterModal