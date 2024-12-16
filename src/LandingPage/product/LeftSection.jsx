import React from 'react'
function LeftSection({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
  return ( <div className='container  p-5'>
    <div className="row">
      <div className="col-8 p-3">
        <img src={imageUrl} />
      </div>
      <div className="col-4">
        <h1 className='mb-4 text-muted '>{productName}</h1>
        <p>{productDescription}</p>
        <div className='mb-4'>
        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
        <a href={learnMore} style={{marginLeft:"70px",textDecoration:"none"}}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div>
        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
        <a href={appStore} style={{marginLeft:"20px"}}><img src="media\images\appstoreBadge (2).svg"/></a>
        </div>
      </div>
    </div>
  </div> );
}

export default LeftSection;