import React, { useEffect, useState } from 'react'
import './register.css'
const LoginUser = () => {
  
    return (
        <> <div className="login-page">
            <h1>Log In</h1>
            <p className='auth-text'>Welcome back! Please enter your username
                and password to login.</p>
            <form>
                <div className="form-Register-user">
                  
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="Name or email"
                        className="form-control"
                    />
                </div>
                <div className="form-Register-user">
                    <input
                        required
                        type="password"
                        name="password"
                        placeholder="Name"
                        className="form-control"
                    />
                </div>
                <div className=" auth-checkbox">
                    <span>
                    </span>
                    <a href="/" className='anchor'>Forgot?</a>
                </div>
                <div className="btn-auth">
                    <button className='btn-main'  >LOG in</button>
                </div>
            </form>
            <h6 className='other-option-txt'>OR LOG IN WITH</h6>
            <div className="logo-for-auth">
                <img src="tumblr.png" className='tumblr' alt="" />
                <img src="twitter.png" className='twitter' alt="" />
                <img src="facebook.png" className='facebook' alt="" />
                <img src="google-web-search.png" className='google' alt="" />
            </div>
        </div>
        </>
    )
}

export default LoginUser