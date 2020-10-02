import React from "react";

import { useHttp } from '../../hooks/http.hook'


export const ReportPage = () => {
  const { loading, error, request } = useHttp();

  const handler = async () => {
    try {
      const data = await request('/api/report', 'POST', { a: 'FORM DATA' });
      console.log(data);
    } catch (e) {
    }
  };

  const aaa = (e) => {
    e.preventDefault();
    console.log('ssssssssss', e.target.first.value);
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>ReportPage</h1>

        <div className="container">
          {/*<form onSubmit={ handler }>*/}
          <form>
            <h2>Contact Us</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="first">First Name</label>
                  <input type="text" className="form-control" placeholder="" id="first"/>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="last">Last Name</label>
                  <input type="text" className="form-control" placeholder="" id="last"/>
                </div>
              </div>

            </div>


            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" className="form-control" placeholder="" id="company"/>
                </div>


              </div>


              <div className="col-md-6">

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" placeholder="phone"/>
                </div>
              </div>

            </div>


            <div className="row">
              <div className="col-md-6">

                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="email"/>
                </div>
              </div>


              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="url">Your Website <small>Please include http://</small></label>
                  <input type="url" className="form-control" id="url" placeholder="url"/>
                </div>

              </div>

            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        <div>
          <button className="btn btn-primary" onClick={handler}>Submit</button>
        </div>


      </div>
    </div>
  );
};
