import React, { useState } from "react";


export const ReportPage = () => {
  const [form, setForm] = useState({ owner: '', contacts: '', bike: '' });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [reportMessage, setReportMessage] = useState('');

  const reportHandler = async (e) => {
    e.preventDefault();

    try {
      setErr('');
      setLoading(true);
      const response = await fetch('/api/report', {
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
      setReportMessage(result);

    } catch (e) {
      console.log(e);
    }
  };

  const textareaChangeHandler = (e) => {
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
          reportMessage && (
            <div className="alert alert-success" role="alert">
              { reportMessage }
            </div>
          )
        }

        <div>
          <form>
            <div>
              <textarea
                required
                name="owner"
                cols="46"
                rows="2"
                onChange={ textareaChangeHandler }
                placeholder="Enter your name, surname"
              />
            </div>

            <div>
              <textarea
                name="contacts"
                cols="46"
                rows="4"
                onChange={ textareaChangeHandler }
                placeholder="Enter your address, telephone number, e-mail"
              />
            </div>

            <div>
              <textarea
                name="bike"
                cols="46"
                rows="6"
                onChange={ textareaChangeHandler }
                placeholder="Enter the date and address where the bike was stolen. Describe the bike: make, color,
                frame number, special marks"
              />
            </div>

            <div>
              <button type="submit" className="btn btn-success w-25" onClick={ reportHandler }>REPORT</button>
              <button type="reset" className="btn btn-danger ml-1 w-25">RESET</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
