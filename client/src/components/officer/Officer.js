import React, { useState } from "react";

export const OfficerPage = () => {
  const [form, setForm] = useState({ officer_id: '', bike_case_id: '' });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [message, setMessage] = useState('');

  const reportHandler = async (e) => {
    e.preventDefault();

    try {
      setErr('');
      setLoading(true);
      const response = await fetch('/api/officer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({ ...form })
      });

      if (!response.ok) {
        setLoading(false);
        setErr(response.statusText);
        return;
      }

      setLoading(false);
      const result = await response.json();
      setMessage(result);

    } catch (e) {
      console.log(e);
    }
  };

  const inputChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <hr/>

        {
          loading && (
            <div className="text-center m-2">
              <div className="spinner-border text-secondary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>)
        }

        {
          err && (
            <div className="alert alert-warning text-center">
              <strong>Error!</strong> { err }
            </div>
          )
        }

        {
          message && (
            <div className="alert alert-success" role="alert">
              { message }
            </div>
          )
        }

        <div>
          <form>
            <div className="mb-2">
              <input
                type="number"
                name="officer_id"
                onChange={ inputChangeHandler }
                placeholder="Enter your id"
                required
              />
            </div>

            <div>
              <input
                type="number"
                name="bike_case_id"
                onChange={ inputChangeHandler }
                placeholder="Enter bike id"
                required
              />
            </div>

            <div className="mt-2">
              <button type="submit" className="btn btn-success" onClick={ reportHandler }>CONFIRM</button>
              <button type="reset" className="btn btn-danger ml-1">RESET</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
