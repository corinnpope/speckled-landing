import React, { Component } from 'react';

export class EmailForm extends Component {
  render() {
    
    return (
      <form name="contact" id="signup-form" method="POST" data-netlify="true">
  <p>
    <input type="text" name="name" placeholder="name"/> 
  </p>
  <p>
    <input type="email" name="email" placeholder="email address"/>

  </p>
  <p>
    <button type="submit">Get Updates</button>
  </p>
</form>
    );
  }
}

export default EmailForm;


