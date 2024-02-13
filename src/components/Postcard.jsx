import React from 'react'
import appwriteService from '../appwrite/configDB'
import { Link } from 'react-router-dom'
import { titleCase } from '../utility/conversion'

function Postcard({$id,title,featuredImage,author,createdOn}) {

  return (
    <Link to={`/post/${$id}`}>
        <div className='relative w-72 bg-gradient-to-b from-white to-primary-200 drop-shadow-lg rounded-md p-4 h-72'>
            <div className='w-full h-40 justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl h-40 aspect-video drop-shadow-lg'/>
            </div>
            <h4 className='text-m text-center font-mono line-clamp-2 overflow-ellipsis'>
                {titleCase(title)}
        </h4>
        <div className='absolute bottom-1 left-4 right-4'>
        <div className='p-2 flex justify-between text-primary-500 '>
          <p>- {titleCase(author)}</p>
          <p>{ titleCase(createdOn) }</p>
          </div>
        </div>
        </div>
    </Link>
  )
}

export default Postcard