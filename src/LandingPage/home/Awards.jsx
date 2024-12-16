import React from "react";
function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5">
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className="col-6 p-5">
          <h1 className="mt-2">Larget stock broker in India</h1>
          <p className="mb-2">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <div className="row">
            <div className="col-6 p-4">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6 p-4">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mtutual funds</p>
                </li>
                <li>
                  <p>Bonds and Goverment Security</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
