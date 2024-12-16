import React from "react";
function Hero() {
  return (
    <section className="container-fluid mt-5 " id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h4 style={{ color: "white" }}>Support Portal</h4>
        <a href="" style={{ color: "white" }}>
          Track ticket
        </a>
      </div>
      <div className="row p-3 mx-5">
        <div className="col-6">
          <h1 className="fs-4 mb-5">Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg: how do i activate F&Q,why my order is getting rejected"/>
          <br/>
          <div className="mt-3 mb-5 fs-5">
          <a href="">Track account opening</a> &nbsp;&nbsp;
          <a href="">Track segment activation </a> &nbsp;&nbsp;
          <a href="">Intraday margins </a> &nbsp;&nbsp;
          <br/>
          <a href="">Kite user manual</a> &nbsp;&nbsp;
          </div>
        </div>
        <div className="col-6">
          <h1 className="fs-4 mb-3">Featured</h1>
          <ol className="fs-5">
          <li className="mb-3"> <a href="">MCX - Revision in Trading Hours from November 4, 2024</a></li>
          <li><a href="">
          Rights Entitlements listing in November 2024</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
