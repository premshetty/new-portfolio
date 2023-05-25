"use client"
import React, { useState } from 'react'
import CharacterModal from './CharacterModal'

const CharacterCard = ({ characterData }) => {
    const { name, birth_year, hair_color, gender } = characterData;
    const [showModal, setShowModal] = useState(false)
    const cardClickHandler = () => {
        setShowModal(true)
    }

    return (
        <>
            <div onClick={cardClickHandler}
                className="cursor-pointer flex flex-col items-center 
            w-full mx-10  md:w-60 h-96 md:mx-auto bg-black bg-opacity-80 rounded-lg 
             overflow-hidden 
             hover:shadow-yellow-300 shadow-md ">
                <div className="px-6 py-4">
                    <div className="font-bold text-center text-xl mb-6">{name}</div>
                    {gender === "n/a" ? <img src='/characterDemo.svg' /> : <img src='/characterDemo2.svg' />}
                </div>
                <div className="px-6 pt-4 pb-2 flex flex-wrap gap-y-2">
                    {birth_year === "unknown" ? "" : <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {birth_year}
                    </span>}
                    {hair_color === "n/a" ? "" : <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {hair_color}
                    </span>}
                    {gender === "n/a" ? "" : <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {gender}
                    </span>}

                </div>

            </div>
            {
                showModal && <CharacterModal onClose={() => setShowModal(false)} data={characterData} />
            }
        </>


    )
}

export default CharacterCard