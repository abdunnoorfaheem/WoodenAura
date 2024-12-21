import React from 'react'

const PageHeading = (props) => {
  return (
    <section className='bg-[#F6F5FF]'>
        <div className="container mx-auto py-[96px]">
<div>
    <h2 className='font-bold text-[36px] text-[#101750]'>{props.title}</h2>
</div>
<div>
    <p>Home . Pages . <span className='text-[#FB2E86]'>{props.pageName}</span></p>
</div>
        </div>
    </section>
  )
}

export default PageHeading;