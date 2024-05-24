import React, { useState } from 'react';

export default function Contact() {

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [message, setMessage] = useState('')

  return (
      <div>
  
          <h1 className="title text-center">Contact</h1>
              <p>If you have any questions about our company, are experiencing problems with the Taskbot app, are interested 
                  in working for Gigatech, or just want to tell us how amazing we are, then go ahead and give us a call or 
                  send us a message via contact form.  Our customer support specialists are available at all times to assist 
                  you with whatever you need.  They will be sure to not disappoint you.  Our company's reputation (and their 
                  jobs) depends on it.
              </p>
  
              <div className="container">
      <form className="contact-group contact-form my-4" action="#" method="POST">
          <div className="form-group row">
              <div className="col-6 offset-md-3">
                  <label className="container-fluid p-0">
                      Full Name
                      <input type="text" className="form-control"     //placeholder="full name" 
                        value={name} onChange={event => setName(event.target.value)}
                      />
                      {!name && "Type your full name here, human"}                            
                  </label>
              </div>
          </div>
          <div className="form-group row">
              <div className="col-6 offset-md-3">
                  <label className="container-fluid p-0">
                      Email Address
                      <input type="text" className="form-control"     //placeholder="email address" 
                        value={email} onChange={event => setEmail(event.target.value)}
                      />
                      {!email && "Type your email address here, human"}                                                  
                  </label>    
              </div>
          </div>
          <div className="form-group row">
              <div className="col-6 offset-md-3 form-end">
                  <label className="container-fluid p-0">
                      Message
                      <input type="text" className="form-control"     //placeholder="message" 
                        value={message} onChange={event => setMessage(event.target.value)}
                      />
                      {!message && "Type your message here, human"}                    
                  </label>
                  <button className="btn btn-info form-btn" type="submit" role="button">Send</button>
              </div>
          </div>
      </form>
      </div>
      
      <p className="text-center">Phone #:  1-800-444-2825</p>
      <p className="text-center">Email Address:  gigatech_support@zipmail.com</p>
  
      </div>
    );

}






  
    /*return (
      <div>
      <label>
        <span className="label">Name</span>
        <input
          value={name}
          onChange={event => setName(event.target.value)}
        />
        {!name && "Please enter your name"}
      </label>
      <label>
        <span className="label">Email Address</span>
        <input
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        {!email && "Please enter your email address"}
      </label>
      <label>
        <span className="label">Message</span>
        <input
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
        {!message && "Please enter your message"}
      </label>
      </div>
    )*/