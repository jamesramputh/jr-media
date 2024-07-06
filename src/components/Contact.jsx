import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Contact.scss"

const Contact = ({contactRef}) => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    packageOption: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage ] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)

    try {
      console.log( formData )

      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'api-key': import.meta.env.VITE_APP_SENDINBLUE_API_KEY,
        },
        body: JSON.stringify(formData),
      });


      if (response.ok) {
        console.log('Message sent successfully');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          packageOption: '',
          message: ''
        }); // reset form data
        setLoading(false)
        setSuccessMessage(true); 
      } else {
        console.log('Message not sent');
        setLoading(false)
        setErrorMessage(true);
        setSuccessMessage(false); 
      }

    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div className="contactContainer" ref={contactRef}>

      <div className="contactHeadings">
        <h2>Contact Us</h2>
      </div>

      <form onSubmit={handleSubmit} className="contactForm">
      
        {successMessage || errorMessage ? (
            successMessage ? (
              <p className="successMessage">Thank you for contacting us!</p>
            ) : (
              <p className="errorMessage">
                There was a problem submitting your form. Please try again later.
              </p>
            )
        ): (
          <>
            <p className="subHeading">If you're interested, please provide the following details and we'll get back to you shortly.</p>
            
            <div className="inputGroup firstName">
              <label htmlFor="firstName" className="label">First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inputGroup lastName">
              <label htmlFor="lastName" className="label">Last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inputGroup email">
              <label htmlFor="email" className="label">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                title="Enter a valid email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inputGroup packageOption">
              <label htmlFor="packageOption" className="label">Package Option</label>
              <select
                id="packageOption"
                name="packageOption"
                value={formData.packageOption}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a package</option>
                <option value="Photo - $199">Photo - $199</option>
                <option value="Photo & Video - $399">Photo & Video - $399</option>
                <option value="Photo, Video & Drone - $449">Photo, Video & Drone - $449</option>
              </select>
            </div>

            <div className="inputGroup message">
              <label htmlFor="message" className="label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit">{ loading ? <FontAwesomeIcon icon="fa-solid fa-spinner" size="1x" spin /> : 'Submit' }</button>
          </>
        )}
      </form>
    </div>
  )
}

export { Contact }
