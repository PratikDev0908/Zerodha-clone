import React from 'react'
function RightSection({imageUrl,productName,productDescription,tryDemo,learnMore}) {
  return ( <div className='container  p-5'>
    <div className="row">
      <div className="col-4 mt-5">
        <h1 className='mb-4 text-muted'>{productName}</h1>
        <p>{productDescription}</p>
        <div className='mb-4'>
        <a href={learnMore} style={{textDecoration:"none"}}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <div className="col-1"></div>
      <div className="col-7 mb-5 p-1">
        <img src={imageUrl} />
      </div>
    </div>
  </div> );
}

export default RightSection;