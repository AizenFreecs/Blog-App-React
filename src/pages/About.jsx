import React,{useState} from 'react'
import { TagSearchBox } from '../components/index'
import NmSelect from '../components/nmComp/NmSelect'
function About() {
  
  return (
    <div className='bg-gray-200 p-4 '>
      <NmSelect
       options={["active", "inactive"]}
       label="Status"
       className="mb-4"/>
     
    </div>
  )
}

export default About