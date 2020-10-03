import React, { useContext, useEffect, useState } from "react";

import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'

export const ReportPage = () => {
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    owner: '', contacts: '', bike: ''
  });

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  // useEffect(() => {
  //   window.M.updateTextFields()
  // }, [])

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

  // const aaa = (e) => {
  //   e.preventDefault();
  //   console.log('ssssssssss', e);
  // }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>ReportPage</h1>
        <div>
          <form action="">
            <input type="text" name="owner" onChange={changeHandler}/>
            <br/>
            <input type="text" name="contacts" onChange={changeHandler}/>
            <br/>
            <input type="text" name="bike" onChange={changeHandler}/>
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
