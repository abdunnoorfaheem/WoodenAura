import React from 'react';
import Company from './Company';
import PageHeading from './PageHeading';
import error from '../assets/error.png';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <>
    <PageHeading title="Error 404" pageName="Error 404"/>
    

    <section>
        <div className='flex justify-center items-center'>
            <div>
                <img src={error} alt="" />
            
            
            </div>
        </div>
        <div>
        <div className='flex justify-center items-center'>
                <Link to="/"><button className='bg-[#FB2E86] text-white px-4 py-2'>Back To Home</button></Link>
            </div>
        </div>
    </section>

    <Company/>
    
    </>
  )
}

export default Error