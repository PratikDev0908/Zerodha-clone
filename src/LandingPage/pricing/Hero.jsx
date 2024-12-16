import React from "react";
function Hero() {
  return (
    <div className="container text-center mt-5 p-5">
      <div className="row">
        <h1 className="mt-5" style={{ color: "#424242", fontSize: "43px" }}>
          Charges
        </h1>
        <h4 className="text-muted mt-2 mb-5">List of all charges and taxes</h4> 
        <div className="col-4 mt-5">
          <img src="media/images/zeroRuppee.png" style={{width:"70%"}}/>
          <h2 className="mb-3" style={{color:"#424242"}}>Free equity delivery</h2>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/images/twentyRuppee.png" style={{width:"87%"}}/>
          <h2 className="mb-3" style={{color:"#424242"}}>Intraday and F&O trades</h2>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per <br/>executed order on intraday trades across<br/> equity, currency, and commodity trades. Flat<br/> ₹20 on all option trades.</p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/images/zeroRuppee.png" style={{width:"70%"}}/>
          <h2 className="mb-3" style={{color:"#424242"}}>Free direct MF</h2>
          <p>All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP <br/>charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
