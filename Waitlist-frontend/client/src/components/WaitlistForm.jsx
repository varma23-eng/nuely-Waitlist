import React, { useState } from 'react';
import { submitWaitlist } from '../services/api';
import '../styles/App.css';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await submitWaitlist(formData);
      setStatus({ type: 'success', message: res.message });
      setFormData({ name: '', email: '', phone: '' }); // Clear form
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-card">
      <p className="form-eyebrow">PRIVATE ACCESS</p>
      <h2>Join the waitlist</h2>
      <p className="form-subtext">Be among the first to experience Nuely.</p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>YOUR NAME</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
        </div>
        
        <div className="input-group">
          <label>EMAIL ADDRESS</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
        </div>

        <div className="input-group">
          <label>PHONE NUMBER</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
        </div>

        <button type="submit" disabled={isLoading} className="submit-btn">
          {isLoading ? 'JOINING...' : 'JOIN THE WAITLIST'}
        </button>

        {status.message && (
          <p className={`status-message ${status.type}`}>{status.message}</p>
        )}
      </form>

      <p className="disclaimer">
        By joining, you agree to receive launch updates from Nuely. No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}