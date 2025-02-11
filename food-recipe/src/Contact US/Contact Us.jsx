

import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add submission logic here, e.g., send formData to your API
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact-us" className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
      <p className="mb-6">
        Have a question or feedback? Fill out the form below or contact us using the
        information provided.
      </p>

      {/* Contact Form */}
      <form
        id="contact-form"
        className="max-w-lg mx-auto mb-8"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="w-full p-2 border rounded"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            className="w-full p-2 border rounded"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-2 border rounded"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 hover:cursor-pointer"
        >
          Send Message
        </button>
      </form>

      {/* Alternative Contact Info */}
      <div className="text-center">
        <p>
          You can also email us at{" "}
          <a
            href="mailto:support@example.com"
            className="text-orange-500 underline"
          >
            support@mykitchen.com
          </a>{" "}
          or call us at (123) 456-7890.
        </p>
      </div>

      {/* Privacy Note */}
      <p className="text-xs text-gray-600 mt-6 text-center">
        Your information is safe with us. We respect your privacy.
      </p>
    </section>
  );
};

export default ContactUs;
