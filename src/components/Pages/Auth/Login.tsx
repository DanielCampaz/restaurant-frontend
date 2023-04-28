import React from 'react'
import './Login.css'

export default function Login () {
  return (
    <>
      <div className="container">
          <div className="card">
            <div className="card-element card-header">
                <h2>Login for this Application</h2>
            </div>
            <form className="card-element card-body">
              <label htmlFor='input-email'>Email:</label>
              <input  id="input-email" type="email" />
              <label htmlFor='input-password'> Password:</label>
              <input id="input-password" type="password" />
              <button className='submit-login' type='submit'>Login</button>
            </form>
            <div className="card-element card-footer">
              <h2>Developed by Daniel Campaz </h2>
            </div>
          </div>
      </div>
    </>
  )
}