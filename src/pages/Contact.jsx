import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            Address: 123 Main Street, City, Country
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Phone: +1234567890
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Email: info@example.com
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Follow us on social media:
            <br />
            <a
              href="#"
              className="text-purple-600 hover:text-purple-400 transition duration-300 ease-in-out"
            >
              Twitter
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-400 transition duration-300 ease-in-out"
            >
              Facebook
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-400 transition duration-300 ease-in-out"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
