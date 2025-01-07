import React from 'react'
import imgCompany from '../assets/company.png';

const Company = () => {
  return (
    <section>
        <div className='flex justify-center py-4'>
            <img src={imgCompany} alt="" />
        </div>
    </section>
  )
}

export default Company