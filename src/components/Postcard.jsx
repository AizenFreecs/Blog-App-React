import React from 'react'
import appwriteService from '../appwrite/configDB'
import {Link} from 'react-router-dom'

function Postcard({$id,title,featuredImage}) {

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gradient-to-b from-white to-primary-200 drop-shadow-lg rounded-md p-4 h-60'>
            <div className='w-full h-40 justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl h-40 aspect-video drop-shadow-lg'/>
            </div>
            <h2 className='text-xl text-center font-mono '>
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default Postcard