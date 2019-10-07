import React, { Component } from 'react';

export class EmailForm extends Component {
  render() {
    
    return (
      <form name="contact" id="signup-form" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
    <input type="text" name="name" id="name" />
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>

  </p>
  <p>
    <button type="submit">Get Updates</button>
  </p>
</form>
    );
  }
}

export default EmailForm;


