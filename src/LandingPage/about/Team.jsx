import React from 'react'
function Team() {
  return (<div className="container">
    <div className="row">
      <div className="col-6 p-5 text-center">
        <img src='/media/images/nithinKamath.jpg' style={{borderRadius:"100%",width:"60%  "}} className='mb-3'/>
        <h4 className='mb-3 text-muted'>Nithin Kamath</h4>
        <h5 className='text-muted fs-6'>Founder, CEO</h5>
      </div>
      <div className="col-6 p-5">
        <h2 className='mb-5 text-muted'>People</h2>
        <p>
        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
        </p>
        <br />
        <p>
        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
        </p>
        <br />
        <p>
        Playing basketball is his zen.
        </p>
        <p>Connect on <a href='/'style={{textDecoration:"none"}}>Homepage</a> / <a href=''style={{textDecoration:"none"}}>TradingQnA</a> / <a href=''style={{textDecoration:"none"}}>Twitter</a></p>
      </div>
    </div>
  </div>
  );
}

export default Team;