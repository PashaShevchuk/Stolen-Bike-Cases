import React, { useState } from "react";

import { useHttp } from '../../hooks/http.hook';


export const ReportPage = () => {
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({ owner: '', contacts: '', bike: '' });

  const reportHandler = async (event) => {
    event.preventDefault();
    try {
      console.log(form);
      const data = await request('http://localhost:5000/api/report', 'POST', { ...form });
      console.log('data', data);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>ReportPage</h1>
        <div>
          <form action="">
            <input type="text" name="owner" onChange={ changeHandler }/>
            <br/>
            <input type="text" name="contacts" onChange={ changeHandler }/>
            <br/>
            <input type="text" name="bike" onChange={ changeHandler }/>
            <br/>
            <div>
              <button type="submit" className="btn btn-primary" onClick={ reportHandler }>Submit</button>
            </div>
          </form>
        </div>


      </div>
    </div>
  );
};
