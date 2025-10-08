import React, { useState } from 'react';
import '../CSS/Contact.css';


const Contact: React.FC = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend or email service
        setSubmitted(true);
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            {submitted ? (
                <p>Thank you for reaching out! I'll get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="contact-form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="contact-input"
                        />
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="contact-input"
                        />
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="contact-input"
                        />
                    </div>
                    <button type="submit" className="contact-button">Send</button>
                </form>
            )}
        </section>
    );
};

export default Contact;