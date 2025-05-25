import React from "react";
import "./ContactForm.css";
function ContactForm() {
  return (
    <div className="container-fluid hero">
      <div className="touch">
        <h4>Get In Touch</h4>
        <form>
          <input
            class="form-control"
            type="email"
            placeholder="Your email"
            aria-label="default input example"
          />
          <select class="form-select" aria-label="Default select example">
            <option selected>Subject</option>
            <option value="1">Operating Syatem</option>
            <option value="2">Computer Networks</option>
            <option value="3">OOP's</option>
            <option value="4">Databases</option>
          </select>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
