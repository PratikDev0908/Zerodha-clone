import React from "react";
function BrokerageSection() {
  return (
    <div className="conatiner">
      <div className="row p-5 text-center border-top mt-5">
        <div className="col-8">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
            </a>
            <ul style={{textAlign:"left",lineHeight:"2.5",fontSize:"17px"}} className="mt-1 p-4 text-muted">
            <li>equity, currency, and commodity trades. Flat</li>
            <li>Equity Delivery Trade: Calculate total cost with zero brokerage and only transaction fees.</li>
            <li>Determine the price movement required to cover all costs and reach profitability.</li>
            <li>Use charts to show how different fee structures impact profitability at varying levels of trading frequency.</li>
            <li>Historical Performance: Track how fees impact long-term investment returns.</li>
            <li>Tax Implications: Brief info on how trading profits may be taxed.</li>
            <li>Consider total transaction costs: brokerage + transaction charges + GST + stamp duty.</li>
            <li>Deduct total costs from gross profits to determine net profit/loss.</li>
          </ul>
        </div>
        <div className="col-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BrokerageSection;
