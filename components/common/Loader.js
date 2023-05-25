import React from 'react'
import { logo } from '../../utils/svgs'

const Loader = () => {
    return (
        <div className=' h-screen w-screen flex justify-center items-center'><div className='loader'>{logo}
        </div></div>
    )
}

export default Loader