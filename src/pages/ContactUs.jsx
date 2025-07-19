import React, { useEffect } from "react";

const ContactUs = () => {

    useEffect(() => {
      document.title = "Contact | snazzy-shop"
    }, [])
  
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to reach out to us!</p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
export default ContactUs;