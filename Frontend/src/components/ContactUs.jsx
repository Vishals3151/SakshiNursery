import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully! 🌟');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Failed to send message. Try again.');
      }
    } catch (err) {
      setStatus('🚫 Server error. Please try later.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 py-12 px-6 sm:px-12 md:px-20 lg:px-40 font-sans">
      <h1 className="text-4xl font-extrabold text-green-900 mb-2 text-center">🌱 Contact Sakshi Hi-Tech Nursery</h1>
      <p className="text-center text-gray-600 mb-10">We're happy to help you! Reach out via the form or visit us.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <div className="text-gray-700 text-lg">
            <p>📍 <strong>Address:</strong> Sakshi Hi-Tech Nursery, Nashik, Maharashtra</p>
            {/* Mobile Number here */}
            <p>📞 <strong>Phone:</strong> <a href="tel: Mobile Number " className="text-blue-600 hover:underline">Owner Mobile Number</a></p>
            <p>📧 <strong>Email:</strong> <a href="mailto:sakshinursery@gmail.com" className="text-blue-600 hover:underline">sakshinursery@gmail.com</a></p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.432343430816!2d74.72617861448656!3d19.607382786772315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc9ec92a169e0b%3A0x9e06a29b6c6cb7b3!2sSakshi%20Hi-Tech%20Nursery!5e0!3m2!1sen!2sin!4v1682594830394!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            className="rounded shadow border"
            title="Sakshi Nursery Location"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                title="Enter a valid email address"
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Write your message here..."
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-all shadow"
            >
              ✉️ Send Message
            </button>
            {status && <p className="text-sm text-green-800 mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
