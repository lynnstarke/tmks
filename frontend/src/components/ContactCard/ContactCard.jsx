// ContactCard.jsx
import React, { useState } from 'react';
import './ContactCard.css';
import { FaEnvelope, FaAngleDown } from 'react-icons/fa';

export default function ContactCard() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+31',
    phone: '',
    message: '',
  });

  const maxMessageLength = 120;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > maxMessageLength) return;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <form className="contact-card" onSubmit={handleSubmit}>
      {/* Name fields */}
      <div className="row two-cols">
        <input
          type="text"
          name="firstName"
          placeholder="Voornaam"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Achternaam"
          value={form.lastName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email with icon */}
      <div className="row icon-input">
        <FaEnvelope />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Phone group: inline code + divider + number */}
      <div className="row phone-group">
        <div className="phone-code">
          <select
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
          >
            <option value="+31">+31</option>
            <option value="+32">+32</option>
            <option value="+44">+44</option>
          </select>
          <FaAngleDown className="dropdown-icon" />
        </div>
        <div className="divider" />
        <input
          type="tel"
          name="phone"
          placeholder="Telefoonnummer"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      {/* Message textarea + counter */}
      <div className="row message-group">
        <textarea
          name="message"
          placeholder="Schrijf ons een bericht"
          value={form.message}
          onChange={handleChange}
        />
        <div className="counter">
          {form.message.length}/{maxMessageLength}
        </div>
      </div>

      {/* Submit button */}
      <button type="submit" className="send-button">
        Verstuur
      </button>
    </form>
  );
}
