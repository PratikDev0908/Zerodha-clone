import React from 'react'
function UniverSection() {
  return ( <div className="container p-5 text-center">
    <div className="row">
      <h2 className='mt-5 text-center text-muted'>The Zerodha Universe</h2>
      <p className='mt-3 text-center'>Extend your trading and investment experience even further with our partner platforms</p>
     <div className="col-4 p-3 mt-5">
      <img src='media/images/smallcaseLogo.png' />
      <p className='text-small text-muted mt-3'>Investing in multiple stocks protects you against volatility in a specific stock, making smallcases less riskier</p>
     </div>
     <div className="col-4 p-3 mt-5">
      <img src='media/images/streakLogo.png' style={{width:"50%"}}/>
      <p className='text-small text-muted mt-3'>Algo & strategy platform</p>
     </div>
     <div className="col-4 p-4 mt-5">
      <img src='media/images/sensibullLogo.svg' style={{width:"50%"}}/>
      <p className='text-small text-muted mt-4'>Options trading platform</p>
     </div>
     <div className="col-4 p-3 mt-5">
      <img src='media/images/zerodhaFundhouse.png' style={{width:"60%"}} />
      <p className='text-small text-muted mt-3'>Asset management</p>
     </div>
     <div className="col-4 p-3 mt-5">
      <img src='media/images/goldenpiLogo.png' style={{width:"50%"}}/>
      <p className='text-small text-muted mt-3'>Bonds trading platform</p>
     </div>
     <div className="col-4 p-3 mt-5">
      <img src='media/images/dittoLogo.png' style={{width:"30%"}}/>
      <p className='text-small text-muted mt-3'>Insurance</p>
     </div>
     <button className="p-1 btn btn-primary fs-5 mt-5" style={{width:"15%", margin:"0 auto",height:"50px"}}>Signup up for free</button>
    </div>
  </div> );
}

export default UniverSection;