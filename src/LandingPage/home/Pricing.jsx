import React from 'react'
function Pricing() {
  return (<div className='container mb-5'>
    <div className="row">
      <div className='col-4'>
        <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
        <p className='mb-2'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        <a className='mb-5'style={{textDecoration:"none"}}>See Pricing <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
      </div>
      <div className='col-2'></div>
      <div className='col-6'>
        <img src='media/images/pricing.png' style={{width:"90%"}} className='mb-5'/>
      </div>
    </div>
  </div>);
}

export default Pricing;