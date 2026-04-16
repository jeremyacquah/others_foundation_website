import React, { useState } from "react";
import { Mail, MapPin, Phone, Camera } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      alert(
        `Thank you, ${formData.name}! Your message has been sent successfully. We will get back to you soon.`,
      );
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">
          Reach <span className="text-gradient">Us</span>
        </h2>

        <div className="contact-container glass-panel">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              We'd love to hear from you. Whether you want to volunteer, partner
              with us, or have a question.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon glass-panel">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@othersfoundation.org</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon glass-panel">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Call Us or MOMO </h4>
                  <p>+233 (055) 889-0612</p>
                  <p> Ama Nhyira Boateng</p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/others_foundation_/"
                target="_blank"
                rel="noreferrer"
                className="info-item"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                }}
              >
                <div className="info-icon glass-panel">
                  <Camera size={20} />
                </div>
                <div>
                  <h4>Instagram</h4>
                  <p style={{ margin: 0 }}>@others_foundation_</p>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                className="form-input glass-panel"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input glass-panel"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                className="form-input glass-panel"
                rows="4"
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
