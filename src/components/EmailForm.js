import React from 'react';
import { navigate } from 'gatsby-link'
import Layout from '../components/Layout'
// export class EmailForm extends Component {
//   render() {
    
//     return (
//       <form name="contact" id="signup-form" method="POST" data-netlify="true">
        
//         <p>
//           <input type="text" name="name" placeholder="name"/> 
//         </p>
//         <p>
//           <input type="email" name="email" placeholder="email address"/>

//         </p>
//         <p>
//           <button type="submit">Get Updates</button>
//         </p>
//       </form>
//     );
//   }
// }

// export default EmailForm;

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
      <form
        id="signup-form"
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >

        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
            <input type="text" name="name" placeholder="First name" onChange={handleChange} />
        </p>
        <p>
            <input type="email" name="email" placeholder="Email address" onChange={handleChange} />
        </p>
        <p>
          <button type="submit">Get Updates</button>
        </p>
      </form>

  )
}